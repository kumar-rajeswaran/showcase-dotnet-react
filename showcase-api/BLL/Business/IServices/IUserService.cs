using Shared.DTOs;

namespace BLL.Business;

public interface IUserService
{
    Task<CommonResponse<UserResponseDto>> UserSignUp(UserSignUpDto dto);
    Task<CommonResponse<UserResponseDto>> GetUser(int id);
    Task<CommonResponse<LoginResponseDto>> UserLogin(UserLoginDto dto);
}
