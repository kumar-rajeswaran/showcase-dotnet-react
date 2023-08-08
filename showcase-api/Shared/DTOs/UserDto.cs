namespace Shared.DTOs;

public class UserDto
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
    public string Email { get; set; }
}

public class UserSignUpDto : UserDto
{
    public string Password { get; set; }
}

public class UserResponseDto : UserDto
{
    public int Id { get; set; }
}

public class UserLoginDto
{
    public string Email { get; set; }
    public string Password { get; set; }
}
