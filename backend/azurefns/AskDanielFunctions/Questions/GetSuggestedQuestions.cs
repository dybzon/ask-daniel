using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using AskDanielCore.Database;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using AskDanielFunctions.Utils;
using AskDanielFunctions.Questions.Models;

namespace AskDanielFunctions
{
    public class GetSuggestedQuestions
    {
		private readonly SqlDbContext dbContext;
		private readonly IUserIdReader userIdReader;

		public GetSuggestedQuestions(SqlDbContext dbContext, IUserIdReader userIdReader)
		{
			this.dbContext = dbContext;
			this.userIdReader = userIdReader;
		}

        [FunctionName("GetSuggestedQuestions")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req, ILogger log)
        {
            var userId = this.userIdReader.GetUserId(req);
            var suggestedQuestions = await this.dbContext.Questions
                .Where(q => !q.IsAuto)
                .ToListAsync();
            var mappedQuestions = suggestedQuestions.Select(q => q.ToQuestionOuput(userId));
            return new OkObjectResult(mappedQuestions);
        }
    }
}
