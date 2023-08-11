using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Shared.Entities;

namespace DAL.DbContexts;

public class ShowCaseDbContext : DbContext
{
    public int UserId;
    private string _user;

    public ShowCaseDbContext() { }

    public ShowCaseDbContext(
        DbContextOptions<ShowCaseDbContext> options,
        IHttpContextAccessor http,
        UserResolverService userService
    )
        : base(options)
    {
        if (http.HttpContext.User.Claims.Any())
        {
            UserId = Convert.ToInt32(
                http.HttpContext.User
                    ?.Claims?.FirstOrDefault(claim => claim.Type == "UserId")
                    ?.Value
            );
            _user = userService.GetUser();
        }
    }

    public DbSet<TblUsers> TblUsers { get; set; }
}

public class UserResolverService
{
    private readonly IHttpContextAccessor _context;

    public UserResolverService(IHttpContextAccessor context)
    {
        _context = context;
    }

    public string GetUser()
    {
        return _context.HttpContext.User?.Identity?.Name ?? "";
    }
}
