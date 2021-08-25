using ResponseDto = AskDanielCore.Responses.Models.Response;
using System.Linq;

namespace AskDanielFunctions.Responses.Models
{
	public static class ResponseExtensions
	{
		public static Response ToResponse(this ResponseDto r)
		{
			var response = new Response
			{
				Id = r.Id,
				Keywords = r.Keywords.Select(kw => kw.Value).ToList(),
				ResponseParts = r.ResponseParts.Select(p => new ResponsePart
				{
					Id = p.Id,
					Src = p.Src,
					Value = p.Value,
					Type = p.Type,
				}).ToList(),
			};

			return response;
		}
	}
}
