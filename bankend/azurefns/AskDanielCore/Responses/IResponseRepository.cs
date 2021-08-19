using AskDanielCore.Responses.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AskDanielCore.Responses
{
	public interface IResponseRepository
	{
		public Task<IEnumerable<Response>> GetAll();
	}
}
