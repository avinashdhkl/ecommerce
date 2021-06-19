import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/servies/product/product.service';
import { IProduct } from './../interface/IProduct';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

 products !: Array<IProduct> ;

  constructor(private productservice : ProductService) { }

  ngOnInit():void {
    this.productservice.getAllProduct().subscribe(
            data=>{
              this.products=data;
        console.log("data",data);
      },error=>{
        console.log(error);
      }
    )

    }
  }


