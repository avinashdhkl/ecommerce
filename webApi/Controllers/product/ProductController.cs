using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webApi.Dtos.productDots;
using webApi.Interface;
using webApi.Models.product;

[Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public ProductController(IUnitOfWork uow,IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }

    [HttpGet("fetchAllProduct")]

    public async Task<IActionResult> GetAllProductsAsync()
    {
        var fetchAllproducts = await uow.productRespo.GetAllProductsAsync();
        var productDtos = mapper.Map<IEnumerable<productdots>>(fetchAllproducts);
        return Ok(productDtos);
    }


    [HttpPost("addproduct")]
  
    public async Task<IActionResult> AddProduct(productdots pd)
    {
        var product = mapper.Map<productModel>(pd);
        product.postdate = DateTime.Now;
        uow.productRespo.AddProduct(product);
        await uow.SaveAsync();
        return Ok(product);
    }

    [HttpPut("update/{id}")]
    public async Task<IActionResult> updateproduct(int id, productdots pd)

    {
        if (id != pd.id)
        {
           return BadRequest("Invalid id");
        }
        var updateProduct = await uow.productRespo.updateProduct(id);
        if (updateProduct == null)
        {
            return BadRequest("Not Allowed!!!");
        }
        pd.postdate = DateTime.Now;
        mapper.Map(pd, updateProduct);
        await uow.SaveAsync();
        return Ok(updateProduct);

    }

    [HttpDelete("remove/{id}")]
    public async Task<IActionResult> RemoveProduct(int id, productdots pd)
    {
        //if(id != pd.id)
        //{
        //    return BadRequest("Id is Invalid");
        //}
       uow.productRespo.deleteProduct(id);
        await uow.SaveAsync();
        return Ok(id);


    }
    [HttpGet("details/{id}")]
       public async Task<IActionResult> FetchProductById(int id)
    {
        var productById = await uow.productRespo.GetById(id);
        var idMap = mapper.Map<productdots>(productById);
        return Ok(idMap);
    }

    [HttpGet("fetchbytype/{type}")]
    public async Task<IActionResult> FetchProductByType(int type)
    {
        var productByType = await uow.productRespo.GetByType(type);
        var productMap = mapper.Map<IEnumerable<productdots>>(productByType);
        return Ok(productMap);
    }
}




