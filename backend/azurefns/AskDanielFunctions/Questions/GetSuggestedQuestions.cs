using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using AskDanielCore.Database;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using AskDanielFunctions.Questions.Models;
using AskDanielFunctions.Utils;

namespace AskDanielFunctions
{
    public class GetSuggestedQuestions
    {
		private readonly SqlDbContext dbContext;
		private readonly IIpAddressReader ipAddressReader;

		public GetSuggestedQuestions(SqlDbContext dbContext, IIpAddressReader ipAddressReader)
		{
			this.dbContext = dbContext;
			this.ipAddressReader = ipAddressReader;
		}

        [FunctionName("GetSuggestedQuestions")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req, ILogger log)
        {
            var calledFromIpAddress = this.ipAddressReader.GetIpFromRequestHeaders(req);
            log.LogInformation($"Function called by IP {calledFromIpAddress?.ToString()}");

            var suggestedQuestions = await this.dbContext.Questions
                //.Where(q => q.AskedByIpAddressBytes.Equals(calledFromIpAddress))
                .Where(q => !q.IsAuto)
                .ToListAsync();
            var mappedQuestions = suggestedQuestions.Select(q => q.ToQuestion());
            return new OkObjectResult(mappedQuestions);
        }
    }
}
