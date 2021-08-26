using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;

namespace AskDanielCore.Questions
{
	public class Question
	{
		public int Id { get; set; }

		[MinLength(4), MaxLength(16), Column("AskedByIpAddress")]
		public byte[]? AskedByIpAddressBytes { get; set; }

		[NotMapped]
		public IPAddress? AskedByIpAddress
		{
			get { return new IPAddress(this.AskedByIpAddressBytes); }
			set { this.AskedByIpAddressBytes = value?.GetAddressBytes(); }
		}

		public Guid? AskedById { get; set; }

		[Required, StringLength(250)]
		public string Value { get; set; }

		/// <summary>
		/// Determines whether the question should be asked automatically.
		/// </summary>
		public bool IsAuto { get; set; }
	}
}
