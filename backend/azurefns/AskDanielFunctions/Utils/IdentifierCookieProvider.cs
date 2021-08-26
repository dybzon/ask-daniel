using AskDanielCore.Time;
using Microsoft.AspNetCore.Http;
using System;

namespace AskDanielFunctions.Utils
{
	public class IdentifierCookieProvider : IIdentifierCookieProvider
	{
		private const string IdentifierCookieName = "identifier";
		private readonly IClock clock;

		public IdentifierCookieProvider(IClock clock)
		{
			this.clock = clock;
		}

		public void AddIdentifierCookie(HttpRequest request)
		{
			request.HttpContext.Response.Cookies.Append(IdentifierCookieName, this.GetIdentifierCookieValue(request), this.GetOptions());
		}

		public Guid GetIdentifierCookieGuid(HttpRequest request)
			=> Guid.Parse(this.GetIdentifierCookieValue(request));

		public string GetIdentifierCookieValue(HttpRequest request)
		{
			if(request.Cookies.TryGetValue(IdentifierCookieName, out var id)) 
			{
				return id;
			}

			return Guid.NewGuid().ToString();
		}

		private CookieOptions GetOptions() => new CookieOptions
		{
			Expires = this.clock.Now().AddYears(1),
			HttpOnly = false,
			Secure = true,
			Path = "/api",
			SameSite = SameSiteMode.None,
		};
	}
}
