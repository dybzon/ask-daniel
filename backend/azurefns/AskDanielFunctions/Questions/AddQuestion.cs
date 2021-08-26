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
		private readonly IIdentifierCookieProvider identifierCookieProvider;

		public AddQuestion(SqlDbContext dbContext, IIpAddressReader ipAddressReader, IIdentifierCookieProvider identifierCookieProvider)
		{
			this.dbContext = dbContext;
			this.ipAddressReader = ipAddressReader;
			this.identifierCookieProvider = identifierCookieProvider;
		}

        [FunctionName("AddQuestion")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            this.identifierCookieProvider.AddIdentifierCookie(req);
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var input = JsonConvert.DeserializeObject<QuestionInput>(requestBody);
            var calledFromIpAddress = this.ipAddressReader.GetIpFromRequestHeaders(req);
            await this.dbContext.AddAsync(
                new QuestionDto { 
                    Value = input.Question, 
                    AskedByIpAddress = calledFromIpAddress, 
                    AskedById = this.identifierCookieProvider.GetIdentifierCookieGuid(req) 
                });
            await this.dbContext.SaveChangesAsync();
            return new OkObjectResult("Question posted successfully");
        }
    }
}
