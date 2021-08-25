using Microsoft.Extensions.DependencyInjection;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using AskDanielCore.Database;
using Microsoft.EntityFrameworkCore;
using System;
using AskDanielFunctions.Utils;

[assembly: FunctionsStartup(typeof(AskDanielFunctions.Startup))]

namespace AskDanielFunctions
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddDbContext<SqlDbContext>(optsBuilder => optsBuilder.UseSqlServer(this.GetConnectionString()));
            builder.Services.AddScoped<IIpAddressReader, IpAddressReader>();
        }

        private string GetConnectionString() => Environment.GetEnvironmentVariable("ConnectionStrings:DefaultConnection");
    }
}
