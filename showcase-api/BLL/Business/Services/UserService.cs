using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;
using BLL.Mappers;
using DAL.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Shared.DTOs;

namespace BLL.Business;

public class UserService : IUserService
{
    private readonly IUserRepo _userRepo;
    private readonly IConfiguration _configuration;

    public UserService(IUserRepo userRepo, IConfiguration configuration)
    {
        _configuration = configuration;
        _userRepo = userRepo;
    }

    public async Task<CommonResponse<List<UserResponseDto>>> GetAllUsers()
    {
        var users = await _userRepo.GetAllUsers();
        return CommonResponseMapper<List<UserResponseDto>>.GetResponse(users.Select(x=>UserMapper.MapToDto(x)).ToList()!,
            users.Count > 0 ? HttpStatusCode.OK : HttpStatusCode.NoContent);
    }

    public async Task<CommonResponse<UserResponseDto>> GetUser(int id)
    {
        var user = await _userRepo.GetUser(id);
        return CommonResponseMapper<UserResponseDto>.GetResponse(
            user!=null?UserMapper.MapToDto(user):null,
            user != null ? HttpStatusCode.OK : HttpStatusCode.NotFound
        );
    }

    public async Task<CommonResponse<string>> UpdateUser(int userId,UserDto user)
    {
        var res = false;
        var userData = await _userRepo.GetUser(userId);
        if (userData == null) res = false;
        else
        {
            userData.FirstName = user.FirstName;
            userData.LastName = user.LastName;
            userData.Email = user.Email;
            userData.Age = user.Age;
            userData.UpdatedOn = DateTime.Now;
            res = await _userRepo.UpdateUser(userData);
        }
        return CommonResponseMapper<string>.GetResponse(
            res ? "User Updated Successfully" : "User not updated.Try again!",
            res ? HttpStatusCode.Accepted : HttpStatusCode.BadRequest);
    }

    public async Task<CommonResponse<UserResponseDto>> UserSignUp(UserSignUpDto dto)
    {
        var user = await _userRepo.UserSignUp(UserMapper.MaptoEntity(dto));
        return CommonResponseMapper<UserResponseDto>.GetResponse(
            user!=null?UserMapper.MapToDto(user):null,
            user != null ? HttpStatusCode.Created : HttpStatusCode.BadRequest
        );
    }

    public async Task<CommonResponse<LoginResponseDto>> UserLogin(UserLoginDto dto)
    {
        var user = await _userRepo.GetUserByEmail(dto.Email);
        if (user == null)
        {
            return CommonResponseMapper<LoginResponseDto>.GetResponse(
                null,
                HttpStatusCode.BadRequest
            );
        }
        var checkPassword = BCrypt.Net.BCrypt.Verify(dto.Password, user.Password);
        if (!checkPassword)
        {
            return CommonResponseMapper<LoginResponseDto>.GetResponse(
                null,
                HttpStatusCode.Unauthorized
            );
        }

        var issuer = _configuration["Jwt:Issuer"];
        var audience = _configuration["Jwt:Audience"];
        var key = Encoding.ASCII.GetBytes($"{_configuration["Jwt:Key"]}");
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(
                new[]
                {
                    new Claim("UserId", user.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Name, $"{user.FirstName} {user.LastName}"),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email)
                }
            ),
            Expires = DateTime.UtcNow.AddMinutes(1),
            Issuer = issuer,
            Audience = audience,
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature
            )
        };
        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        var jwtToken = tokenHandler.WriteToken(token);

        return CommonResponseMapper<LoginResponseDto>.GetResponse(
            new LoginResponseDto
            {
                Age = user.Age,
                Email = user.Email,
                FirstName = user.FirstName,
                Id = user.Id,
                LastName = user.LastName,
                Token = jwtToken
            },
            HttpStatusCode.OK
        );
    }
}
