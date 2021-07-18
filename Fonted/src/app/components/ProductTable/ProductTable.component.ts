
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../servies/product/product.service';
import { productModel } from './../../models/product/productmodel';
import { IProduct, IUpdateProduct } from './../../../interface/IProduct';
import { ActivatedRoute } from '@angular/router';
import { updateProductModel } from 'src/app/models/product/productmodel';
import { AlertifyService } from 'src/app/servies/alertify/alertify.service';

@Component({
    selector: 'app-ProductTable',
    templateUrl: './ProductTable.component.html',
    styleUrls: ['./ProductTable.component.css']
})
export class ProductTableComponent implements OnInit {
    products !: IUpdateProduct[];






    constructor(private productServices:ProductService,private route :ActivatedRoute,private alertify : AlertifyService) { }

    ngOnInit() {

      this.productServices.getProductTable().subscribe(
        (data:IUpdateProduct[])=>{
          this.products= data
          console.log('All data in table',this.products);
        }
      )







    }
    deleteProduct(id: number){
      console.log('id',id)
      // this.alertify.confirm('Are you sure');
      debugger;
      this.productServices.removeProduct(id).subscribe(
        (resp)=>{

this.alertify.success('done');
          console.log('Delete suucessfully');

        } ,err => {
          debugger;
          console.log(err);
        })


    }

}
