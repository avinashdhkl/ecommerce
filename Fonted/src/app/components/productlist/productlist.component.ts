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
    type = 1;

    products !: IProduct[] ;
    name = "";
    searchByName = "";

    constructor(private productservice: ProductService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        if (this.route.snapshot.url.toString()){
            this.type = 2;
        }
        // this.productservice.getAllProduct(this.type).subscribe(
        //   data=>{
        //     this.products = data
        //   }
        // )
        this.productservice.fetchAllProductByType(this.type).subscribe(
            (data:any) => {
                this.products = data;
                // let product = JSON.parse(localStorage.getItem('products')||'');
                // if(product.type===this.type){
                //   this.products=[product,...this.products]
                // }
                console.log("data", data);
                console.log('type:', this.route.snapshot.url.toString());
            }, error => {
                console.log(error);
            }
        );

    }
    onSearch(){
        this.searchByName = this.name;

    }
    onClearSearch(){
        this.searchByName = "";
        this.name = "";
    }
}


