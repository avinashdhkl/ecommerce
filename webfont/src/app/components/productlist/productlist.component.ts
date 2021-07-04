import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/servies/product/product.service';
import { IProduct } from '../../../interface/IProduct';
import { productModel } from './../../models/product/productmodel';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  type =1;

 products !: IProduct[] ;

  constructor(private productservice : ProductService,private route : ActivatedRoute) { }

  ngOnInit():void {
    if(this.route.snapshot.url.toString()){
      this.type=2
    }
    this.productservice.getAllProduct(this.type).subscribe(
            data=>{
              this.products=data;
        console.log("data",data);
        console.log('type:',this.route.snapshot.url.toString());
      },error=>{
        console.log(error);
      }
    )

    }
  }


