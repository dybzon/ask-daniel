using Microsoft.Extensions.DependencyInjection;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using AskDanielCore.Database;
using Microsoft.EntityFrameworkCore;
using System;
using AskDanielFunctions.Utils;
using AskDanielCore.Utils;

[assembly: FunctionsStartup(typeof(AskDanielFunctions.Startup))]

namespace AskDanielFunctions
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddDbContext<SqlDbContext>(optsBuilder => optsBuilder.UseSqlServer(this.GetConnectionString()));
            builder.Services.AddScoped<IIpAddressReader, IpAddressReader>();
            builder.Services.AddSingleton<IUserIdReader, UserIdReader>();
            builder.Services.AddDanielCoreServices();
        }

        private string GetConnectionString() => Environment.GetEnvironmentVariable("ConnectionStrings:DefaultConnection") 
            ?? throw new ArgumentNullException("No default connection string has been configured");
    }
}
