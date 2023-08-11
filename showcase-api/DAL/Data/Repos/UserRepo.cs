using DAL.Data;
using DAL.DbContexts;
using Microsoft.EntityFrameworkCore;
using Shared.Entities;

namespace DAL.Data;

public class UserRepo : IUserRepo
{
    private readonly ShowCaseDbContext _showCaseDbContext;

    public UserRepo(ShowCaseDbContext showCaseDbContext)
    {
        _showCaseDbContext = showCaseDbContext;
    }

    public async Task<TblUsers?> UserSignUp(TblUsers entity)
    {
        var userData = await _showCaseDbContext.TblUsers.AddAsync(entity);
        await _showCaseDbContext.SaveChangesAsync();
        return userData.Entity;
    }

    public async Task<TblUsers?> GetUser(int id)
    {
        var res = await _showCaseDbContext.TblUsers.FirstOrDefaultAsync(x => x.Id == id);
        return res;
    }

    public async Task<TblUsers?> GetUserByEmail(string email)
    {
        var res = await _showCaseDbContext.TblUsers.FirstOrDefaultAsync(x => x.Email == email);
        return res;
    }
}
