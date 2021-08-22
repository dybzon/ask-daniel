using AskDanielCore.Responses.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace AskDanielCore.Database
{
    public class DefaultDbContext : DbContext
    {
		private readonly IConfiguration configuration;

		public DefaultDbContext(IConfiguration configuration)
		{
			this.configuration = configuration;
		}

        public DbSet<Response> Responses { get; set; }
        public DbSet<ResponsePartBase> ResponseParts { get; set; }
        public DbSet<Keyword> Keywords { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(this.configuration.GetConnectionString("DefaultConnection"));
        }
    }
}
