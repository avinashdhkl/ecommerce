using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webApi.Data.DC;
using webApi.Interface;
using webApi.Models.product;

namespace webApi.Data.Respository
{
    public class productRespo : Iproduct
    {
        private readonly DataContext dc;

        public productRespo(DataContext dc)
        {
            this.dc = dc;
        }

        public void AddProduct(productModel product)
        {
            dc.Products.AddAsync(product);
        }

        public void deleteProduct(int productId)
        {
            var Id = dc.Products.Find(productId);
            dc.Products.Remove(Id);
        }

        public async Task<IEnumerable<productModel>> GetAllProductsAsync()
        {
            return await dc.Products.ToListAsync();
        }

        public async Task<productModel> GetById(int id)
        {
            var productByID = await dc.Products
                .Where(p => p.id == id)
                .FirstAsync();

            return productByID;
        }

        public async Task<IEnumerable<productModel>> GetByType(int type)
        {
            var products = await dc.Products
                .Where(p => p.type == type)
                .ToListAsync();
            return products;
        }

        public async Task<productModel> updateProduct(int id)
        {
            return await dc.Products.FindAsync(id);
        }
    }
}
