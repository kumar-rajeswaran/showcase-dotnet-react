using Shared.DTOs;

namespace BLL.Business;

public interface IUserService
{
    Task<CommonResponse<UserResponseDto>> UserSignUp(UserSignUpDto dto);
    Task<CommonResponse<List<UserResponseDto>>> GetAllUsers();
    Task<CommonResponse<UserResponseDto>> GetUser(int id);
    Task<CommonResponse<string>> UpdateUser(int userId, UserDto user);
    Task<CommonResponse<LoginResponseDto>> UserLogin(UserLoginDto dto);
}
