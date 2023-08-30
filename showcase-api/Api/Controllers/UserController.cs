using BLL.Business;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Shared.DTOs;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> SignUp(UserSignUpDto user)
        {
            var res = await _userService.UserSignUp(user);
            return StatusCode(res.Status, res);
        }

        [HttpPost("login")]
        public async Task<IActionResult> UserLogin(UserLoginDto dto)
        {
            var res = await _userService.UserLogin(dto);
            return StatusCode(res.Status, res);
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetUser(int id)
        {
            var res = await _userService.GetUser(id);
            return StatusCode(res.Status, res);
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> UpdateUser(int usersId,UserDto user)
        {
            var res = await _userService.UpdateUser(usersId,user);
            return StatusCode(res.Status, res);
        }
        [HttpGet("GetAllUsers")]
        [Authorize]
        public async Task<IActionResult> GetAllUsers()
        {
            var res = await _userService.GetAllUsers();
            return StatusCode(res.Status, res);
        }
    }
}
