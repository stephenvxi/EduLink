using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<School> Schools { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<School>()
                .HasData(
                    new School {Id = 1, Name = "English Language School"},
                    new School {Id = 2, Name = "University of Informatics"},
                    new School {Id = 3, Name = "Primary School nr. 123"}
                );
        }
    }
}
