using AskDanielCore.Questions;
using AskDanielCore.Responses.Models;
using Microsoft.EntityFrameworkCore;

namespace AskDanielCore.Database
{
    public class SqlDbContext : DbContext
    {
        public SqlDbContext(DbContextOptions<SqlDbContext> options)
            : base(options)
        {
        }

        public DbSet<Response> Responses { get; set; }
        public DbSet<ResponsePart> ResponseParts { get; set; }
        public DbSet<Keyword> Keywords { get; set; }
        public DbSet<Question> Questions { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			// Seed some data
			modelBuilder.Entity<Question>()
				.HasData(
				new Question { Id = 1, AskedByIpAddress = System.Net.IPAddress.Parse("212.237.135.57"), Value = "Har du hørt om Rasmus Dybkjær!?", IsAuto = true },
				new Question { Id = 2, AskedByIpAddress = System.Net.IPAddress.Parse("212.237.135.57"), Value = "Er du god til at flyve med svævefly?", IsAuto = true },
				new Question { Id = 3, AskedByIpAddress = System.Net.IPAddress.Parse("212.237.135.57"), Value = "Arbejder du meget med data?", IsAuto = true },
				new Question { Id = 4, AskedByIpAddress = System.Net.IPAddress.Parse("212.237.135.57"), Value = "Parkerer du nogensinde ulovligt?", IsAuto = true },
				new Question { Id = 5, AskedByIpAddress = System.Net.IPAddress.Parse("212.237.135.57"), Value = "Er der en DAX-parser i TabularEditor3?" },
				new Question { Id = 6, AskedByIpAddress = System.Net.IPAddress.Parse("212.237.135.57"), Value = "Bliver TabularEditor2 stadig vedligeholdt?" },
				new Question { Id = 7, AskedByIpAddress = System.Net.IPAddress.Parse("212.237.135.57"), Value = "Findes der en gratis version af TabularEditor3?" },
				new Question { Id = 8, AskedByIpAddress = System.Net.IPAddress.Parse("212.237.135.57"), Value = "Jeg er Microsoft MVP. Hvordan får jeg en gratis licens til TabularEditor3?" }
			);

			modelBuilder.Entity<Response>(b =>
			{
				b.HasData(new Response { Id = 1, });
				b.OwnsMany(r => r.ResponseParts).HasData(new ResponsePart { Id = 1, ResponseId = 1, Type = "String", Value = "Rasmus Dybkjær er et dejligt, smukt menneske. Når jeg ser ham tænker jeg \"wow!\". Det er svært at sætte ord på. Han er uden sammenligning den flotteste og mest kompetente person jeg kender!" });
				b.OwnsMany(r => r.Keywords).HasData(new Keyword { Id = 1, ResponseId = 1, Value = "smuk" },
							new Keyword { Id = 2, ResponseId = 1, Value = "flot" },
							new Keyword { Id = 3, ResponseId = 1, Value = "rasmus" },
							new Keyword { Id = 4, ResponseId = 1, Value = "dybkjær" },
							new Keyword { Id = 5, ResponseId = 1, Value = "kompetent" });
			});


			modelBuilder.Entity<Response>(b =>
			{
				b.HasData(new Response { Id = 2 });
				b.OwnsMany(r => r.ResponseParts).HasData(new ResponsePart { Id = 2, ResponseId = 2, Value = "Jeg er helt vild med svævefly. Engang fløj jeg helt til Svalbard og tilbage ved hjælp af lidt varm luft. Helt fantastisk.", Type = "String" });
				b.OwnsMany(r => r.Keywords).HasData(new Keyword { Id = 6, ResponseId = 2, Value = "flyve" },
									new Keyword { Id = 7, ResponseId = 2, Value = "svæve" },
									new Keyword { Id = 8, ResponseId = 2, Value = "svævefly" },
									new Keyword { Id = 9, ResponseId = 2, Value = "rejse" });
			});

			modelBuilder.Entity<Response>(b =>
			{
				b.HasData(new Response { Id = 3 });
				b.OwnsMany(r => r.ResponseParts).HasData(new ResponsePart { Id = 3, ResponseId = 3, Value = "Jeg er helt tosset med data. Jeg er faktisk en ", Type = "String" },
						new ResponsePart { Id = 4, ResponseId = 3, Value = "datagud 😎👴🙌", Src = "https://www.kratosbi.com/data-god-daniel-otykier", Type = "Link" });
				b.OwnsMany(r => r.Keywords).HasData(new Keyword { Id = 10, ResponseId = 3, Value = "data" },
									new Keyword { Id = 11, ResponseId = 3, Value = "datagud" },
									new Keyword { Id = 12, ResponseId = 3, Value = "gud" });
			});

			modelBuilder.Entity<Response>(b =>
			{
				b.HasData(new Response { Id = 4 });
				b.OwnsMany(r => r.ResponseParts).HasData(new ResponsePart { Id = 5, ResponseId = 4, Value = "Jeg hader de fjolser der parkerer ulovligt! Især ude omkring Kattegatcentret. Der ringer jeg gerne til ", Type = "String" },
						new ResponsePart { Id = 6, ResponseId = 4, Value = "QPark", Src = "https://www.q-park.dk/da/kontakt-os/", Type = "Link" },
						new ResponsePart { Id = 7, ResponseId = 4, Value = " så der kommer orden i sagerne", Type = "String" });
				b.OwnsMany(r => r.Keywords).HasData(new Keyword { Id = 13, ResponseId = 4, Value = "parkering" },
									new Keyword { Id = 14, ResponseId = 4, Value = "qpark" },
									new Keyword { Id = 15, ResponseId = 4, Value = "parkeringsplads" },
									new Keyword { Id = 16, ResponseId = 4, Value = "parkere" },
									new Keyword { Id = 17, ResponseId = 4, Value = "parkerer" },
									new Keyword { Id = 18, ResponseId = 4, Value = "ulovligt" });
			});
		}
	}
}
