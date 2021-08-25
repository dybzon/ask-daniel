using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;
using System.Linq;
using System.Net;

namespace AskDanielFunctions.Utils
{
	public class IpAddressReader : IIpAddressReader
	{
		public IPAddress? GetIpFromRequestHeaders(HttpRequest request)
		{
			StringValues values;
			if (request.Headers.TryGetValue("X-Forwarded-For", out values))
			{
				var ipString = values.FirstOrDefault().Split(new char[] { ',' }).FirstOrDefault().Split(new char[] { ':' }).FirstOrDefault();
				if(IPAddress.TryParse(ipString, out var ipAddress))
				{
					return ipAddress;
				}
			}

			return null;
		}
	}
}
