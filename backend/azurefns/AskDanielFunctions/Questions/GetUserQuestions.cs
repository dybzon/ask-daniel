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

namespace AskDanielFunctions
{
    public class GetUserQuestions
    {
		private readonly SqlDbContext dbContext;
		private readonly IUserIdReader userIdReader;

		public GetUserQuestions(SqlDbContext dbContext, IUserIdReader userIdReader)
		{
			this.dbContext = dbContext;
			this.userIdReader = userIdReader;
		}

        [FunctionName("GetUserQuestions")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            var userId = this.userIdReader.GetUserId(req);

			if (userId is null)
			{
				return new OkObjectResult(new string [] { });
			}

            var userQuestions = await this.dbContext.Questions
                .Where(q => q.AskedById.Equals(userId))
                .ToListAsync();
            var mappedQuestions = userQuestions.Select(q => q.Value);
            return new OkObjectResult(mappedQuestions);
        }
    }
}
