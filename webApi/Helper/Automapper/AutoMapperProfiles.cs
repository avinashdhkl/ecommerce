using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using webApi.Dtos.productDots;
using webApi.Dtos.userdtos;
using webApi.Models.product;
using webApi.Models.user;

namespace webApi.Helper.Automapper
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<userModels, UserReq>();
            CreateMap<productModel, productdots>().ReverseMap();
                
        }
    }
}
