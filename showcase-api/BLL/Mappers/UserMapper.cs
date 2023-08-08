using System.Net;
using Shared.DTOs;
using Shared.Entities;

namespace BLL.Mappers;

public static class UserMapper
{
    public static TblUsers MaptoEntity(UserSignUpDto dto)
    {
        return new TblUsers
        {
            Age = dto.Age,
            CreatedOn = DateTime.Now,
            Email = dto.Email,
            FirstName = dto.FirstName,
            IsActive = true,
            LastName = dto.LastName,
            Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
            UpdatedOn = DateTime.Now
        };
    }

    public static UserResponseDto? MapToDto(TblUsers user)
    {
        if (user == null)
            return null;
        return new UserResponseDto
        {
            Id = user.Id,
            Age = user.Age,
            Email = user.Email,
            FirstName = user.FirstName,
            LastName = user.LastName,
        };
    }
}
