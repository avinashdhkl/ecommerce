import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/Operators'
import { Observable } from 'rxjs';
import {  IUpdateProduct } from '../../../interface/IProduct';
import { productModel} from './../../models/product/productmodel';
import { environment } from './../../../environments/environment';
import { updateProductModel } from 'src/app/models/product/productmodel';
import { IProduct } from './../../../interface/IProduct';



@Injectable({
    providedIn: 'root'
})
export class ProductService {
  URL=environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  }

    constructor(private http: HttpClient) { }

    getAllProduct(type?: number): Observable<productModel[]>
    {
        return  this.http.get<Record<string, productModel>>('./data/data.json').pipe(
            map(
                data => {
                    const productArray: productModel[] = [];

                    const localProperties = JSON.parse(localStorage.getItem('products') || "");
                    if (localProperties){
                        for (const id in localProperties){
                            if (type){
                                if (localProperties.hasOwnProperty(id) && localProperties[id].type === type){
                                    productArray.push(localProperties[id]);
                                }
                            }else{
                                productArray.push(localProperties[id]);
                            }


                        }

                    }




                    for (const id in data){
                        if (type){
                            if (data.hasOwnProperty(id) && data[id].type === type){
                                productArray.push(data[id]);
                            }
                        }
                        else{
                            productArray.push(data[id]);
                        }


                    }
                    return productArray;
                }
            )
        );

    }
    fetchAllProductByType(type:number):Observable<productModel[]>{
      return this.http.get<productModel[]>(this.URL+"/Product/fetchbytype/"+type.toString());
    }
    getProductTable():Observable<IUpdateProduct[]> {
      return this.http.get<IUpdateProduct[]>(this.URL+'/Product/fetchAllProduct');
    }

    AddProduct(product: productModel){

        let products = [product];
        if (localStorage.getItem('products')){
            // products = JSON.parse(localStorage.getItem('products')||"")
            products = [product,  ...JSON.parse(localStorage.getItem('products') || "")];


        }
        // else{
        //   products=[product]

        // }
        localStorage.setItem('products', JSON.stringify(products));

    }

    proId(){
        if (localStorage.getItem('proId')){
            localStorage.setItem('proId', String(+(localStorage.getItem('proId') || "") + 1));
            return +(localStorage.getItem('proId') || "");
        }else{
            localStorage.set('proId', "101");
            return 101;
        }
    }



    getProductById(id: number){
        return this.getAllProduct().pipe(
            map(
                productArray => productArray.find(p => p.id == id)

            )
        );

    }
    fetchProductDetails(id:number){
      return this.http.get<productModel>(this.URL+"/product/details/"+id.toString());
         }

         updateProduct(id:number,product:updateProductModel){
           return this.http.put<productModel>(this.URL+`/product/update/`+id.toString() ,  product);
         }

         removeProduct(id:number){
        return this.http.delete(this.URL+`/product/remove/`+id,this.httpOptions );
        }



}
