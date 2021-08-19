namespace AskDanielCore.Responses.Models
{
	public class LinkResponsePart : ResponsePartBase
	{
		public LinkResponsePart(string value, string src) : base(value)
		{
			this.Src = src;
		}

		public string Src { get; }

		public override string Type => "Link";
	}
}
