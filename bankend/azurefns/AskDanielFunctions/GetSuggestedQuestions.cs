using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using AskDanielCore.Questions;

namespace AskDanielFunctions
{
    public class GetSuggestedQuestions
    {
		private readonly IQuestionRepository questionRepository;

		public GetSuggestedQuestions(IQuestionRepository questionRepository)
		{
			this.questionRepository = questionRepository;
		}

        [FunctionName("GetSuggestedQuestions")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req, ILogger log)
        {
            var suggestions = await this.questionRepository.GetSuggestedQuestions();
            return new OkObjectResult(suggestions);
        }
    }
}
