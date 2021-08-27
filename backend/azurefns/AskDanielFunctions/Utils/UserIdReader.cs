using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;

namespace AskDanielFunctions.Utils
{
	public class UserIdReader : IUserIdReader
	{
		public Guid? GetUserId(HttpRequest req, string? requestBody)
		{
			string? userId = req.Query["userId"];
			dynamic data = JsonConvert.DeserializeObject(requestBody);
			userId ??= data?.userId;

			if (Guid.TryParse(userId, out var userGuid))
			{
				return userGuid;
			}

			return null;
		}
	}
}
