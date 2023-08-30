using Shared.Entities;

namespace DAL.Data;

public interface IUserRepo
{
    Task<TblUsers?> UserSignUp(TblUsers entity);
    Task<List<TblUsers>> GetAllUsers();
    Task<TblUsers?> GetUser(int id);
    Task<bool> UpdateUser(TblUsers user);
    Task<TblUsers?> GetUserByEmail(string email);
}
