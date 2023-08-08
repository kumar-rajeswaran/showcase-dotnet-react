using Microsoft.EntityFrameworkCore;
using Shared.Entities;

namespace DAL.DbContexts;

public class ShowCaseDbContext : DbContext
{
    public ShowCaseDbContext(DbContextOptions<ShowCaseDbContext> options)
        : base(options) { }

    public DbSet<TblUsers> TblUsers { get; set; }
}
