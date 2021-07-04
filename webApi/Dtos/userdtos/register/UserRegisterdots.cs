using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webApi.Dtos.userdtos.register
{
    public class UserRegisterdots
    {
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public DateTime dob { get; set; }
        public string password { get; set; }
        public  string phonenumber { get; set; }
    }
}
