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
		private readonly IIdentifierCookieProvider identifierCookieProvider;

		public GetSuggestedQuestions(SqlDbContext dbContext, IIdentifierCookieProvider identifierCookieProvider)
		{
			this.dbContext = dbContext;
			this.identifierCookieProvider = identifierCookieProvider;
		}

        [FunctionName("GetSuggestedQuestions")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req, ILogger log)
        {
            this.identifierCookieProvider.AddIdentifierCookie(req);
            var suggestedQuestions = await this.dbContext.Questions
                //.Where(q => q.AskedByIpAddressBytes.Equals(calledFromIpAddress))
                .Where(q => q.AskedById == null || !q.AskedById.Equals(this.identifierCookieProvider.GetIdentifierCookieGuid(req)))
                .Where(q => !q.IsAuto)
                .ToListAsync();
            var mappedQuestions = suggestedQuestions.Select(q => q.Value);
            return new OkObjectResult(mappedQuestions);
        }
    }
}
