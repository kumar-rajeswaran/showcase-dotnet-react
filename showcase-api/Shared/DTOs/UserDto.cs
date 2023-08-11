namespace Shared.DTOs;

public class UserDto
{
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public int Age { get; set; }
    public required string Email { get; set; }
}

public class UserSignUpDto : UserDto
{
    public required string Password { get; set; }
}

public class UserResponseDto : UserDto
{
    public int Id { get; set; }
}

public class UserLoginDto
{
    public required string Email { get; set; }
    public required string Password { get; set; }
}

public class LoginResponseDto : UserDto
{
    public int Id { get; set; }
    public required string Token { get; set; }
}
