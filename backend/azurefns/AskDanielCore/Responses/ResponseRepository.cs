using AskDanielCore.Responses.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AskDanielCore.Responses
{
	public class ResponseRepository : IResponseRepository
	{
		public Task<IEnumerable<Response>> GetAll()
		{
			return Task.FromResult(BaseResponses);
		}

		private static IEnumerable<Response> BaseResponses =>
			new List<Response>
			{
				new Response (new List<IResponsePart> { new StringResponsePart("Rasmus Dybkjær er et dejligt, smukt menneske. Når jeg ser ham tænker jeg \"wow!\". Det er svært at sætte ord på. Han er uden sammenligning den flotteste og mest kompetente person jeg kender!") }, new [] { "rasmus", "dybkjær", "kompetent", "smuk", "flot" }),
				new Response (new List<IResponsePart> { new StringResponsePart("Jeg er helt vild med svævefly. Engang fløj jeg helt til Svalbard og tilbage ved hjælp af lidt varm luft. Helt fantastisk.") }, new [] { "flyve", "svæve", "svævefly", "rejse" }),
				new Response (new List<IResponsePart> { new StringResponsePart("Jeg er helt tosset med data. Jeg er faktisk en "), new LinkResponsePart("datagud 😎👴🙌", "https://www.kratosbi.com/data-god-daniel-otykier") }, new [] { "data", "datagud", "gud" }),
				new Response (new List<IResponsePart> { new StringResponsePart("Jeg hader de fjolser der parkerer ulovligt! Især ude omkring Kattegatcentret. Der ringer jeg gerne til "), new LinkResponsePart("QPark", "https://www.q-park.dk/da/kontakt-os/"), new StringResponsePart(" så der kommer orden i sagerne") }, new [] { "parkering", "qpark", "parkeringsplads", "parkere", "parkerer", "ulovligt" }),
			};
	}
}
