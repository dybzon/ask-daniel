using System.Collections.Generic;
using System.Threading.Tasks;

namespace AskDanielCore.Questions
{
	public interface IQuestionRepository
	{
		public Task<IEnumerable<string>> GetAutoQuestions();

		public Task<IEnumerable<string>> GetSuggestedQuestions();
	}
}
