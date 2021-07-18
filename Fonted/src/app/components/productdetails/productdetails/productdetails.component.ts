import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/servies/product/product.service';
import { productModel } from './../../../models/product/productmodel';

@Component({
    selector: 'app-productdetails',
    templateUrl: './productdetails.component.html',
    styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
    productId !: number;
    product = new productModel();

    constructor(private route: ActivatedRoute ) { }

    ngOnInit() {
        this.productId = +this.route.snapshot.params.id;
        console.log('productdetals by id',this.productId);
        this.route.data.subscribe(
            (data: any) => {
              console.log('details',data);
                this.product = data.prp;
            }
        );

    }

}
