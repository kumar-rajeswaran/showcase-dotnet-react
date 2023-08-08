using Shared.DTOs;

namespace BLL.Business.IServices;

public interface IUserService
{
    Task<CommonResponse<UserResponseDto>> UserSignUp(UserSignUpDto dto);
    Task<CommonResponse<UserResponseDto>> GetUser(int id);
    Task<CommonResponse<UserResponseDto>> UserLogin(UserLoginDto dto);
}
