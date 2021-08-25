using Microsoft.AspNetCore.Http;
using System.Net;

namespace AskDanielFunctions.Utils
{
	public interface IIpAddressReader
	{
		IPAddress? GetIpFromRequestHeaders(HttpRequest request);
	}
}
