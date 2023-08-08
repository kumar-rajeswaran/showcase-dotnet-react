using System.Net;
using BLL.Business.IServices;
using BLL.Mappers;
using DAL.Data.IRepos;
using Shared.DTOs;

namespace BLL.Business.Services;

public class UserService : IUserService
{
    private readonly IUserRepo _userRepo;

    public UserService(IUserRepo userRepo)
    {
        _userRepo = userRepo;
    }

    public async Task<CommonResponse<UserResponseDto>> GetUser(int id)
    {
        var user = await _userRepo.GetUser(id);
        return CommonResponseMapper<UserResponseDto>.GetResponse(
            UserMapper.MapToDto(user),
            user != null ? HttpStatusCode.OK : HttpStatusCode.NotFound
        );
    }

    public async Task<CommonResponse<UserResponseDto>> UserSignUp(UserSignUpDto dto)
    {
        var user = await _userRepo.UserSignUp(UserMapper.MaptoEntity(dto));
        return CommonResponseMapper<UserResponseDto>.GetResponse(
            UserMapper.MapToDto(user),
            user != null ? HttpStatusCode.Created : HttpStatusCode.BadRequest
        );
    }

    public async Task<CommonResponse<UserResponseDto>> UserLogin(UserLoginDto dto)
    {
        var user = await _userRepo.GetUserByEmail(dto.Email);
        var checkPassword = user != null && BCrypt.Net.BCrypt.Verify(dto.Password, user.Password);

        return CommonResponseMapper<UserResponseDto>.GetResponse(
            UserMapper.MapToDto(user),
            user != null && checkPassword ? HttpStatusCode.OK : HttpStatusCode.Unauthorized
        );
    }
}
