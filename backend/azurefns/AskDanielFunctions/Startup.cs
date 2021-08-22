using Microsoft.Extensions.DependencyInjection;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using AskDanielCore.Questions;
using AskDanielCore.Responses;

[assembly: FunctionsStartup(typeof(AskDanielFunctions.Startup))]

namespace AskDanielFunctions
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddSingleton<IQuestionRepository, QuestionRepository>();
            builder.Services.AddSingleton<IResponseRepository, ResponseRepository>();
        }
    }
}
