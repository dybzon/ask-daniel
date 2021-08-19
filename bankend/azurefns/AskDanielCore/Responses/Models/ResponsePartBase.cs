namespace AskDanielCore.Responses.Models
{
	public abstract class ResponsePartBase : IResponsePart
	{
		public ResponsePartBase(string value)
		{
			this.Value = value;
		}

		public string Value { get; }

		public abstract string Type { get; }
	}
}
