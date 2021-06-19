import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/Operators'
import { Observable } from 'rxjs';
import { IProduct } from './../../components/interface/IProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http: HttpClient) { }

getAllProduct():Observable<IProduct[]>
{
  return  this.http.get<Record<string,IProduct>>('./data/data.json').pipe(
    map(
      data=>{
        const productArray : Array<IProduct>=[]
        for(const id in data){
          if(data.hasOwnProperty(id)){
            productArray.push(data[id])
          }

        }
        return productArray;
      }
    )
  )

}

}
