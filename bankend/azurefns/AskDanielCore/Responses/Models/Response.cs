namespace AskDanielCore.Responses.Models
{
	using System.Collections.Generic;

	public class Response
	{
		public Response(IEnumerable<IResponsePart> parts, IEnumerable<string> keywords)
		{
			this.Parts = parts;
			this.Keywords = keywords;
		}

		public IEnumerable<IResponsePart> Parts { get; }

		public IEnumerable<string> Keywords { get; }
	}
}
