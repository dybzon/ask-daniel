using System.Collections.Generic;
using System.Threading.Tasks;

namespace AskDanielCore.Questions
{
	public class QuestionRepository : IQuestionRepository
	{
		public Task<IEnumerable<string>> GetAutoQuestions()
		{
			var questions = new[] {
				"Har du hørt om Rasmus Dybkjær?",
				"Er du god til at flyve med svævefly?",
				"Arbejder du meget med data?",
				"Parkerer du nogensinde ulovligt?" } as IEnumerable<string>;
			return Task.FromResult(questions);
		}

		public Task<IEnumerable<string>> GetSuggestedQuestions()
		{
			var questions = new[] {
				"Er der en DAX-parser i TabularEditor3?",
				"Findes der en gratis version af TabularEditor3?",
				"Bliver TabularEditor2 stadig vedligeholdt?",
				"Jeg er Microsoft MVP. Hvordan får jeg en gratis licens til TabularEditor3?" } as IEnumerable<string>;
			return Task.FromResult(questions);
		}
	}
}
