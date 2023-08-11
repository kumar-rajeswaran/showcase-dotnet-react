using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Shared.Entities;

namespace DAL.DbContexts;

public class ShowCaseDbContext : DbContext
{
    public int UserId;

    public ShowCaseDbContext() { }

    public ShowCaseDbContext(DbContextOptions<ShowCaseDbContext> options, IHttpContextAccessor http)
        : base(options)
    {
        if (http.HttpContext.User.Claims.Any())
        {
            UserId = Convert.ToInt32(
                http.HttpContext.User
                    ?.Claims?.FirstOrDefault(claim => claim.Type == "UserId")
                    ?.Value
            );
        }
    }

    public DbSet<TblUsers> TblUsers { get; set; }
}
