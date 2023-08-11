using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using BLL.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index()
        {
            var res = CommonResponseMapper<string>.GetResponse(
                "Api is running!",
                HttpStatusCode.OK
            );
            return StatusCode(res.Status, res);
        }
    }
}
