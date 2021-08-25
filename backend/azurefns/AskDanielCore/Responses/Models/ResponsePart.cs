using System.ComponentModel.DataAnnotations;

namespace AskDanielCore.Responses.Models
{
	public class ResponsePart
	{
		public int Id { get; set; }

		public int ResponseId { get; set; }

		[StringLength(250)]
		public string Value { get; set; }

		[StringLength(10)]
		public string Type { get; set; }

		[StringLength(500)]
		public string Src { get; set; }
	}
}
