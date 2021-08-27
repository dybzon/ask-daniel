namespace AskDanielFunctions.Questions.Models
{
	public class Question
	{
		public int Id { get; set; }

		public string Value { get; set; } = string.Empty;

		public bool AskedByMe { get; set; }
	}
}
