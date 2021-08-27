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
		private readonly IUserIdReader userIdReader;

		public AddQuestion(SqlDbContext dbContext, IIpAddressReader ipAddressReader, IUserIdReader userIdReader)
		{
			this.dbContext = dbContext;
			this.ipAddressReader = ipAddressReader;
			this.userIdReader = userIdReader;
		}

        [FunctionName("AddQuestion")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            var requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var input = JsonConvert.DeserializeObject<QuestionInput>(requestBody);
            var userUid = this.userIdReader.GetUserId(req, requestBody);
            var calledFromIpAddress = this.ipAddressReader.GetIpFromRequestHeaders(req);
            await this.dbContext.AddAsync(
                new QuestionDto { 
                    Value = input.Question, 
                    AskedByIpAddress = calledFromIpAddress, 
                    AskedById = userUid,
                });
            await this.dbContext.SaveChangesAsync();
            return new OkObjectResult("Question posted successfully");
        }
    }
}
