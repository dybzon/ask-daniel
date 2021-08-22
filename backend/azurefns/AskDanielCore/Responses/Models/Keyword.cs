namespace AskDanielCore.Responses.Models
{
	public class Keyword
	{
		public Keyword()
		{
		}

		public Keyword(string value)
		{
			this.Value = value;
		}

		public int Id { get; set; }

		public string Value { get; set; }
	}
}
