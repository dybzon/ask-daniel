using System;

using QuestionDto = AskDanielCore.Questions.Question;

namespace AskDanielFunctions.Questions.Models
{
	public static class QuestionExtensions
	{
		public static Question ToQuestionOuput(this QuestionDto dto, Guid? userId = null)
			=> new Question { Id = dto.Id, Value = dto.Value, AskedByMe = dto.AskedById?.Equals(userId) ?? false };
	}
}
