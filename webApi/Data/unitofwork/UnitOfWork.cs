using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webApi.Data.DC;
using webApi.Data.Respository;
using webApi.Interface;

namespace webApi.Data.unitofwork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dc;

        public UnitOfWork(DataContext dc)
        {
            this.dc = dc;
        }
        public IUser UserResp => new UserResp(dc);

        public Iproduct productRespo => new productRespo(dc);

        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
        }
    }
}
