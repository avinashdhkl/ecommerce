using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webApi.Models.user;

namespace webApi.Interface
{
  public  interface IUser
    {
        Task<userModels> Authenticate(string username , string password );
        void Register(string firstname, string lastname, string username,string email, string password,DateTime dob,string phonenumber);
        Task<bool> UserAlreadyExist(string username);
    }
}
