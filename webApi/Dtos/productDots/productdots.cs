using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webApi.Dtos.productDots
{
    public class productdots
    {
        public int id { get; set; }
        public int type { get; set; }
        public string name { get; set; }
        public string brand { get; set; }
        public string color { get; set; }
        public string price { get; set; }
        public string size { get; set; }
        public string image { get; set; }
        public string postby { get; set; }
        public DateTime postdate { get; set; }
        public string description { get; set; }
    }
}
