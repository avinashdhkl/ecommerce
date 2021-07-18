using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webApi.Interface
{
    public interface IUnitOfWork
    {
        IUser UserResp { get; }
        Iproduct productRespo { get; }
            Task<bool> SaveAsync();
    }
}
