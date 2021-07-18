using Microsoft.EntityFrameworkCore;
using webApi.Models.product;
using webApi.Models.user;

namespace webApi.Data.DC
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<userModels> Users { get; set; }
        public DbSet<productModel>Products { get; set; }
    }
}
