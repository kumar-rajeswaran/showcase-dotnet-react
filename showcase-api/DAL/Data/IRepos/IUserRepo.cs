using Shared.Entities;

namespace DAL.Data;

public interface IUserRepo
{
    Task<TblUsers> UserSignUp(TblUsers entity);
    Task<TblUsers> GetUser(int id);
    Task<TblUsers> GetUserByEmail(string email);
}
