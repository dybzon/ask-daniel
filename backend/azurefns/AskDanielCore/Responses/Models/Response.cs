namespace AskDanielCore.Responses.Models
{
	using System.Collections.Generic;

	public class Response
	{
		public int Id { get; set; }

		public List<ResponsePartBase> ResponseParts { get; set; }

		public List<Keyword> Keywords { get; set; }
	}
}
