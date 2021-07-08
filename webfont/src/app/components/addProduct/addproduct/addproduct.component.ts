import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TabsetComponent } from 'ng-uikit-pro-standard';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { productModel } from './../../../models/product/productmodel';
import { IProduct } from '../../../../interface/IProduct';
import { AlertifyService } from './../../../servies/alertify/alertify.service';
import { ProductService } from 'src/app/servies/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @ViewChild('formTabs')
  formTabs!: TabsetComponent;
  productForm !: FormGroup;
  nextClicked !: boolean
  AddproductComponent={};
  product = new productModel;

  // productView : IProduct={
  //   id:'',
  //   name:'',
  //   color:'',
  //   brand:'',
  //   size:'',
  //   postby:'',
  //   postdate:'',
  //   discription:'',
  //   image:'',
  //   price:'',
  //   type:'',


  // }


  constructor(private fb : FormBuilder, private Alertify:AlertifyService,private productServices:ProductService,private router:Router) { }
  selectTab(tabId: number,IsCurrrentValid:boolean) {
    this.nextClicked=true
    if(IsCurrrentValid){
      this.formTabs.tabs[tabId].active = true;
    }

  }

  ngOnInit() {
    this.createProduct();

  }

createProduct(){
  this.productForm = this.fb.group({
    BasicInfo : this.fb.group({
      name:['', Validators.required],
      brand:['', Validators.required],
      type:['1',Validators.required],
    }),
    priceInfo:this.fb.group({
      color:['', Validators.required],

    size:['', Validators.required],
    price:['', Validators.required],

    }),
    DetailsInfo:this.fb.group({
      discription:['', Validators.required],

      postby:['', Validators.required],

      postdate:['', Validators.required],

    }),
    uploadInfo : this.fb.group({
      image:['', Validators.required],
    })

})

}

get BasicInfo(){
  return this.productForm.controls.BasicInfo as FormGroup
}
get priceInfo(){
  return this.productForm.controls.priceInfo as FormGroup
}
get DetailsInfo(){
  return this.productForm.controls.DetailsInfo as FormGroup
}
get uploadInfo(){
  return this.productForm.controls.uploadInfo as FormGroup
}



get name(){
  return this.BasicInfo.controls.name as FormControl
}
get type(){
  return this.BasicInfo.controls.type as FormControl
}
get brand(){
  return this.BasicInfo.controls.brand as FormControl
}

get color(){
  return this.priceInfo.controls.color as FormControl
}
get size(){
  return this.priceInfo.controls.size as FormControl
}
get price(){
  return this.priceInfo.controls.price as FormControl
}

get postby(){
  return this.DetailsInfo.controls.postby as FormControl
}
get postdate(){
  return this.DetailsInfo.controls.postdate as FormControl
}
get discription(){
  return this.DetailsInfo.controls.discription as FormControl
}
get image(){
  return this.uploadInfo.controls.image as FormControl
}








  onSubmit(){
    this.nextClicked=true;
    if(this.IsAllTabsValid()){
      this.mapProduct();
      this.productServices.AddProduct(this.product);
      if(this.type.value==2){
        this.router.navigate(['/gadgets']);

      }else{
        this.router.navigate(['/']);

      }
      this.Alertify.success('Add Successfull');
      console.log(this.productForm);

    }else{
      this.Alertify.error('Please review Product Form')
    }



  }
  IsAllTabsValid():boolean{
    if(this.BasicInfo.invalid){
      this.formTabs.tabs[0].active = true;
      return false;
    }
    if(this.priceInfo.invalid){
      this.formTabs.tabs[1].active = true;
      return false;
    }
    if(this.DetailsInfo.invalid){
      this.formTabs.tabs[2].active = true;
      return false;
    }
    // if(this.uploadInfo.invalid){
    //   this.formTabs.tabs[3].active = true;
    //   return false;
    // }
    return true;

  }

  mapProduct():void{
    this.product.id=this.productServices.proId();
    this.product.type = +this.type.value;
    this.product.name = this.name.value;
    this.product.brand = this.brand.value;
    this.product.color = this.color.value;
    this.product.size = this.size.value;
    this.product.price = this.price.value;
    this.product.postby = this.postby.value;
    this.product.postdate = this.postdate.value;
    this.product.discription = this.discription.value;
    this.product.image = this.image.value;

  }

}
