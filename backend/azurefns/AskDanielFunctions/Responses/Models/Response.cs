using System.Collections.Generic;

namespace AskDanielFunctions.Responses.Models
{
	public class Response
	{
		public int Id { get; set; }

		public List<ResponsePart> ResponseParts { get; set; }

		public List<string> Keywords { get; set; }
	}
}
