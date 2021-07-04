import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/Operators'
import { Observable } from 'rxjs';
import { IProduct } from '../../../interface/IProduct';


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
        const productArray : Array<IProduct>=[]
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

}
