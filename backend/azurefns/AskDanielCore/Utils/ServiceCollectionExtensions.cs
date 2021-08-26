using AskDanielCore.Time;
using Microsoft.Extensions.DependencyInjection;

namespace AskDanielCore.Utils
{
	public static class ServiceCollectionExtensions
	{
		public static void AddDanielCoreServices(this IServiceCollection services)
		{
			services.AddSingleton<IClock, Clock>();
		}

	}
}
