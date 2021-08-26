using Microsoft.AspNetCore.Http;
using System;

namespace AskDanielFunctions.Utils
{
	public interface IIdentifierCookieProvider
	{
		string GetIdentifierCookieValue(HttpRequest request);

		Guid GetIdentifierCookieGuid(HttpRequest request);

		void AddIdentifierCookie(HttpRequest request);
	}
}
