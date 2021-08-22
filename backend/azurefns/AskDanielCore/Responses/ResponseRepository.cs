using AskDanielCore.Database;
using AskDanielCore.Responses.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AskDanielCore.Responses
{
	public class ResponseRepository : IResponseRepository
	{
		private readonly DefaultDbContext dbContext;

		public ResponseRepository(DefaultDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public async Task<IEnumerable<Response>> GetAll()
		{
			return await this.dbContext.Responses.ToListAsync();
		}

		private static IEnumerable<Response> BaseResponses =>
			new List<Response>
			{
				new Response { ResponseParts = new List<ResponsePartBase> { new StringResponsePart { Value = "Rasmus Dybkjær er et dejligt, smukt menneske. Når jeg ser ham tænker jeg \"wow!\". Det er svært at sætte ord på. Han er uden sammenligning den flotteste og mest kompetente person jeg kender!" } },  Keywords = new List<Keyword> { new Keyword ("rasmus"), new Keyword("dybkjær"), new Keyword("kompetent"), new Keyword("smuk"), new Keyword("flot") } },
				//new Response { ResponseParts = new List<ResponsePartBase> { new StringResponsePart { Value = "Jeg er helt vild med svævefly. Engang fløj jeg helt til Svalbard og tilbage ved hjælp af lidt varm luft. Helt fantastisk." } }, Keywords = new List<Keyword>  {  "flyve", "svæve", "svævefly", "rejse" } },
				//new Response { ResponseParts = new List<ResponsePartBase> { new StringResponsePart { Value = "Jeg er helt tosset med data. Jeg er faktisk en " }, new LinkResponsePart { Value = "datagud 😎👴🙌", Src = "https://www.kratosbi.com/data-god-daniel-otykier" } },Keywords = new List<string>  { "data", "datagud", "gud" } },
				//new Response { ResponseParts = new List<ResponsePartBase> { new StringResponsePart { Value = "Jeg hader de fjolser der parkerer ulovligt! Især ude omkring Kattegatcentret. Der ringer jeg gerne til " }, new LinkResponsePart { Value = "QPark", Src = "https://www.q-park.dk/da/kontakt-os/" }, new StringResponsePart { Value = " så der kommer orden i sagerne" } },Keywords = new List<string> { "parkering", "qpark", "parkeringsplads", "parkere", "parkerer", "ulovligt" } },
			};
	}
}
