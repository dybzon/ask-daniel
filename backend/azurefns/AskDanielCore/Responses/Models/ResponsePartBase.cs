namespace AskDanielCore.Responses.Models
{
	public class ResponsePartBase
	{
		public int Id { get; set; }

		public int ResponseId { get; set; }

		public string Value { get; set; }

		public string Type { get; set; }
	}
}
