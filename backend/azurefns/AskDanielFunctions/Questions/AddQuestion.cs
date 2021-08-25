using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using AskDanielCore.Database;
using QuestionDto = AskDanielCore.Questions.Question;
using AskDanielFunctions.Questions.Models;
using AskDanielFunctions.Utils;

namespace AskDanielFunctions.Questions
{
    public class AddQuestion
    {
		private readonly SqlDbContext dbContext;
		private readonly IIpAddressReader ipAddressReader;

		public AddQuestion(SqlDbContext dbContext, IIpAddressReader ipAddressReader)
		{
			this.dbContext = dbContext;
			this.ipAddressReader = ipAddressReader;
		}

        [FunctionName("AddQuestion")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var input = JsonConvert.DeserializeObject<QuestionInput>(requestBody);
            var calledFromIpAddress = this.ipAddressReader.GetIpFromRequestHeaders(req);
            this.dbContext.Add(new QuestionDto { Value = input.Question, AskedByIpAddress = calledFromIpAddress });
            return new OkObjectResult("Question posted successfully");
        }
    }
}
