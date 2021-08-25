using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Linq;
using AskDanielCore.Database;
using Microsoft.EntityFrameworkCore;
using AskDanielFunctions.Responses.Models;

namespace AskDanielFunctions
{
    public class GetResponses
    {
		private readonly SqlDbContext dbContext;

		public GetResponses(SqlDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

        [FunctionName("GetResponses")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req, ILogger log)
        {
            var responses = await this.dbContext.Responses
                .Include(r => r.Keywords)
                .Include(r => r.ResponseParts)
                .ToListAsync();
            var mappedResponses = responses.Select(r => r.ToResponse());
            return new OkObjectResult(responses);
        }
    }
}
