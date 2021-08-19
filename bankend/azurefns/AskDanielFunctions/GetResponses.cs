using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Linq;
using Microsoft.Extensions.Primitives;
using AskDanielCore.Responses;

namespace AskDanielFunctions
{
    public class GetResponses
    {
		private readonly IResponseRepository responseRepository;

		public GetResponses(IResponseRepository responseRepository)
		{
			this.responseRepository = responseRepository;
		}

        [FunctionName("GetResponses")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req, ILogger log)
        {
            //var calledFromIpAddress = GetIpFromRequestHeaders(req);
            //log.LogInformation($"Function called by IP {calledFromIpAddress}");

            var responses = await this.responseRepository.GetAll();
            return new OkObjectResult(responses);
        }

        private static string GetIpFromRequestHeaders(HttpRequest request)
        {
            StringValues values;
            if (request.Headers.TryGetValue("X-Forwarded-For", out values))
            {
                return values.FirstOrDefault().Split(new char[] { ',' }).FirstOrDefault().Split(new char[] { ':' }).FirstOrDefault();
            }

            return "";
        }
    }
}
