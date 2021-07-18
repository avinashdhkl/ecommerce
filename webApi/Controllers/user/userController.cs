using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webApi.Data.unitofwork;
using webApi.Dtos.user;
using webApi.Dtos.userdtos;
using webApi.Dtos.userdtos.register;
using webApi.Interface;
using webApi.Models.user;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace webApi.Controllers.user
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAccountController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        private readonly IConfiguration config;

        public UserAccountController(IUnitOfWork uow, IConfiguration config)
        {
            this.uow = uow;
            this.config = config;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterdots regdots)

        {
            if (string.IsNullOrEmpty(regdots.username.Trim()) || string.IsNullOrEmpty(regdots.password.Trim()))
            {
                return BadRequest("Username and password should not be Blank");
            }
            if (await uow.UserResp.UserAlreadyExist(regdots.username))

                return BadRequest("Already Exist");





            uow.UserResp.Register(regdots.firstname, regdots.lastname, regdots.username, regdots.email, regdots.password, regdots.dob,regdots.phonenumber);
            await uow.SaveAsync();
            return StatusCode(200);
                }


        [HttpPost("login")]
        public async Task<IActionResult> Login(UserReq logindots)
        {




            var user = await uow.UserResp.Authenticate(logindots.username, logindots.password);
            if (user == null)
            {
                return Unauthorized("Invalid username and password");
            }
            var LoginUserResp = new UserRes();
            LoginUserResp.username = user.username;
            LoginUserResp.token = CreateJWT(user);
            return Ok(LoginUserResp);


            

        
        }
        private string CreateJWT(userModels user)
        {
            var secretekey = config.GetSection("AppSettings:key").Value;
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretekey));
            var claim = new Claim[]
            {
                new Claim(ClaimTypes.Name, user.username),
                new Claim(ClaimTypes.NameIdentifier,user.id.ToString())

            };
            var signingCredentials = new SigningCredentials(
                key,SecurityAlgorithms.HmacSha256Signature
                );
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(claim),
                Expires = DateTime.UtcNow.AddDays(365),
                SigningCredentials = signingCredentials
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);



        }



        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "hy", "Hello" };
        }
       
    }
}
