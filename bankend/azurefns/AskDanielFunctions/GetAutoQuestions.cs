using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using AskDanielCore.Questions;

namespace AskDanielFunctions
{
    public class GetAutoQuestions
    {
		private readonly IQuestionRepository questionRepository;

		public GetAutoQuestions(IQuestionRepository questionRepository)
		{
			this.questionRepository = questionRepository;
		}

        [FunctionName("GetAutoQuestions")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req, ILogger log)
        {
            var autoQuestions = await this.questionRepository.GetAutoQuestions();
            return new OkObjectResult(autoQuestions);
        }
    }
}
