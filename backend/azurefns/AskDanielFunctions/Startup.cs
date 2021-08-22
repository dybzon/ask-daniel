using Microsoft.Extensions.DependencyInjection;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using AskDanielCore.Questions;
using AskDanielCore.Database;

[assembly: FunctionsStartup(typeof(AskDanielFunctions.Startup))]

namespace AskDanielFunctions
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddSingleton<IQuestionRepository, QuestionRepository>();
            builder.Services.AddDbContext<DefaultDbContext>();
        }
    }
}
