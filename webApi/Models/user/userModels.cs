using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webApi.Models.user
{
    public class userModels
    {
        public int id { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string phonenumber { get; set; }
        public DateTime dob { get; set; }
        public byte[] password { get; set; }
        public byte[] passwordkey { get; set; }

    }
}
