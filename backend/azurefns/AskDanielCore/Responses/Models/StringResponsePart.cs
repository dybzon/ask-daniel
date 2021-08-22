namespace AskDanielCore.Responses.Models
{
	public class StringResponsePart : ResponsePartBase
	{
		public StringResponsePart(string value) : base(value)
		{
		}

		public override string Type => "String";
	}
}
