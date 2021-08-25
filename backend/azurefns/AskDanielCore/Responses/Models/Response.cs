namespace AskDanielCore.Responses.Models
{
	using System.Collections.Generic;

	public class Response
	{
		public int Id { get; set; }

		public List<ResponsePart> ResponseParts { get; set; } = new List<ResponsePart>();

		public List<Keyword> Keywords { get; set; } = new List<Keyword>();
	}
}
