using QuestionDto = AskDanielCore.Questions.Question;

namespace AskDanielFunctions.Questions.Models
{
	public static class QuestionExtensions
	{
		public static Question ToQuestion(this QuestionDto q)
			=> new Question
			{
				Value = q.Value,
				IsAuto = q.IsAuto,
			};
	}
}
