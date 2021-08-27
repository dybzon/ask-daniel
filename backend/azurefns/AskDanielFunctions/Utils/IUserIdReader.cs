using Microsoft.AspNetCore.Http;
using System;

namespace AskDanielFunctions.Utils
{
	public interface IUserIdReader
	{
		/// <summary>
		/// Reads the user identifier from an http request. 
		/// Will first attempt reading it from query parameters. Falls back to reading from request body.
		/// Returns null if no user id is found.
		/// </summary>
		/// <param name="req">An http request.</param>
		/// <param name="reqBody">The request body read to a string.</param>
		/// <returns>A user id from the http request, if any.</returns>
		public Guid? GetUserId(HttpRequest req, string? reqBody = null);
	}
}
