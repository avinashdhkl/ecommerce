import { Component, Input, OnInit } from '@angular/core';

import { productModel } from './../../models/product/productmodel';
import { IProduct } from '../../../interface/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
@Input() product !: IProduct;


}
