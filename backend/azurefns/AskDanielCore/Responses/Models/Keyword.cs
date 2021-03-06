using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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

		public int ResponseId { get; set; }

		[StringLength(30)]
		public string Value { get; set; }
	}
}
