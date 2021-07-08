import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/Operators'
import { Observable } from 'rxjs';
import { IProduct } from '../../../interface/IProduct';
import { productModel } from './../../models/product/productmodel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http: HttpClient) { }

getAllProduct(type:number):Observable<IProduct[]>
{
  return  this.http.get<Record<string,IProduct>>('./data/data.json').pipe(
    map(
      data=>{
        const productArray : Array<IProduct>=[];
        const properties = JSON.parse(localStorage.getItem('products')||'');
        if(properties){
          for(const id in properties){
            if(properties.hasOwnProperty(id) && properties[id].type === type){
              productArray.push(properties[id])
            }

          }

        }

      // const localProducts = JSON.parse(localStorage.getItem('products')||'');
      // if(localProducts){
      //   for(const id in localProducts){
      //     if(localProducts.hasOwnProperty(id) && localProducts[id].type === type){
      //       productArray.push(localProducts[id])
      //     }

      //   }
      // }


        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].type === type){
            productArray.push(data[id])
          }

        }
        return productArray;
      }
    )
  )

}

AddProduct(product:productModel){

  let products=[product]
  if(localStorage.getItem('products')){
    // products = JSON.parse(localStorage.getItem('products')||"")
    products=[product,  ...JSON.parse(localStorage.getItem('products')||'')]


  }
  // else{
  //   products=[product]

  // }
  localStorage.setItem('products',JSON.stringify(products))

}

proId(){
  if(localStorage.getItem('proId')){
    localStorage.setItem('proId',String(+(localStorage.getItem('proId')||'')+1))
    return +(localStorage.getItem('proId')||'');
  }else{
    localStorage.set('proId','101');
    return 101;
  }
}

// proId(){
//   const proId = localStorage.getItem('proId');
//   if (proId) {
//     const updatedPID = String(+proId + 1);

//     localStorage.setItem('proId', updatedPID);
//     return updatedPID;
//   }
//     else{
//       localStorage.setItem('proId','101');
//       return 101;
//     }
// }


}
