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

namespace AskDanielFunctions
{
    public class GetAutoQuestions
    {
		private readonly SqlDbContext dbContext;

		public GetAutoQuestions(SqlDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

        [FunctionName("GetAutoQuestions")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req, ILogger log)
        {
            var autoQuestions = await this.dbContext.Questions.Where(q => q.IsAuto).ToListAsync();
            var mappedQuestions = autoQuestions.Select(q => q.Value);
            return new OkObjectResult(mappedQuestions);
        }
    }
}
