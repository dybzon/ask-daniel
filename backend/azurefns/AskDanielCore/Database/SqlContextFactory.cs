using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;

namespace AskDanielCore.Database
{
    public class SqlContextFactory : IDesignTimeDbContextFactory<SqlDbContext>
    {
        public SqlDbContext CreateDbContext(string[] args)
        {
            // This connection will be used at design time when creating and testing migrations.
            var optionsBuilder = new DbContextOptionsBuilder<SqlDbContext>();
            optionsBuilder.UseSqlServer("Server=.;Database=ask-daniel;Trusted_Connection=True;");
            return new SqlDbContext(optionsBuilder.Options);
        }
    }
}