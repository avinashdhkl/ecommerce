import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TabsetComponent } from 'ng-uikit-pro-standard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { productModel } from './../../../models/product/productmodel';
import { IProduct } from '../../../../interface/IProduct';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @ViewChild('formTabs')
  formTabs!: TabsetComponent;
  productForm !: FormGroup

  productView : IProduct={
    id:'',
    name:'',
    color:'',
    brand:'',
    size:'',
    postby:'',
    postdate:'',
    discription:'',
    image:'',
    price:'',
    type:'',


  }


  constructor(private fb : FormBuilder) { }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      type:['',Validators.required],
      name:['', Validators.required],
      color:['', Validators.required],
      brand:['', Validators.required],
      size:['', Validators.required],
      image:['', Validators.required],
      discription:['', Validators.required],

      postby:['', Validators.required],
      price:['', Validators.required],
      postdate:['', Validators.required],



    })
  }
  onSubmit(){
    console.log(this.productForm)

  }

}
