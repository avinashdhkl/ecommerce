using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webApi.Models.product;

namespace webApi.Interface
{
 public   interface Iproduct
    {
        Task<IEnumerable<productModel>> GetAllProductsAsync();
        void AddProduct(productModel product);
        void deleteProduct(int productId);
        Task<IEnumerable<productModel>> GetByType(int type);
        Task<productModel> GetById(int id);
        Task<productModel> updateProduct(int id);


    }
}
