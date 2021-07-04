using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using webApi.Data.DC;
using webApi.Interface;
using webApi.Models.user;

namespace webApi.Data.Respository
{
    public class UserResp : IUser
    {
        private readonly DataContext dc;

        public UserResp(DataContext dc)
        {
            this.dc = dc;
        }
        public async Task<userModels> Authenticate(string username, string passwordText)
        {
            var user= await dc.Users.FirstOrDefaultAsync(x=>x.username==username);
            if(user == null)
            {
                return null;
            }
            if (!IsPasswordMatch(passwordText, user.password, user.passwordkey))
            {
                return null;
            }
            return user;

        }

        private  bool IsPasswordMatch(string passwordText, byte[] password, byte[] passwordkey)
        {
            using (var hma = new HMACSHA512(passwordkey))
            {
                var passwordHash = hma.ComputeHash(Encoding.UTF8.GetBytes(passwordText));
                for (int i = 0; i < passwordHash.Length; i++)
                {
                    if (passwordHash[i] != password[i])
                    
                        return false;
                    
                  
                }
                return true;
            }

        }

        

        public void Register(string firstname, string lastname, string username, string email, string password, DateTime dob,string phonenumber)
        {
            byte[] passwordhash, passwordkey;
            using( var hma = new  HMACSHA512())
            {
                passwordkey = hma.Key;
                passwordhash = hma.ComputeHash(Encoding.UTF8.GetBytes(password));
               
            }
            userModels user = new userModels();

            user.firstname = firstname;
            user.lastname = lastname;
            user.username = username;
            user.email = email;
            user.dob = dob;
            user.password = passwordhash;
            user.passwordkey = passwordkey;
            user.phonenumber = phonenumber;
            dc.Users.Add(user);

        }

        public async Task<bool> UserAlreadyExist(string username)
        {
            return await dc.Users.AnyAsync(x => x.username == username );
        }
    }
}
