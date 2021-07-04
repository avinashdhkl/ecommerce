using Microsoft.EntityFrameworkCore;
using webApi.Models.user;

namespace webApi.Data.DC
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<userModels> Users { get; set; }
       
    }
}
