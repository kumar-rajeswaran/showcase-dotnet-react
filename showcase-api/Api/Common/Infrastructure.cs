using BLL.Business.IServices;
using BLL.Business.Services;
using DAL.Data.IRepos;
using DAL.Data.Repos;
using DAL.DbContexts;
using Microsoft.EntityFrameworkCore;

namespace Api.Common;

public class Infrastructure
{
    public static void ConfigureDatabase(WebApplicationBuilder builder)
    {
        var serverVersion = new MySqlServerVersion(new Version(8, 0, 31));
        var connectionString = builder.Configuration.GetConnectionString("ShowCaseDb");
        builder.Services.AddDbContext<ShowCaseDbContext>(
            opts =>
                opts.UseMySql(
                    connectionString,
                    ServerVersion.AutoDetect(connectionString),
                    options => options.EnableRetryOnFailure()
                )
        );
    }

    public static void ConfigureService(WebApplicationBuilder builder)
    {
        builder.Services.AddTransient<IUserService, UserService>();
        builder.Services.AddTransient<IUserRepo, UserRepo>();
    }
}
