using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models.user
{
    //public enum gender
    //{
    //    male = 1,
    //    femaile = 2
    //}
    //public enum role
    //{
    //    admin =1,
    //    user=2
    //}
    public class user
    {
        public int id { get; set; }
        public string firstname { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public DateTime  dob { get; set; }
        //public gender gender  { get; set; }
        //public role role { get; set; }
    }
}
