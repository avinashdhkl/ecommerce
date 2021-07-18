import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { productModel, updateProductModel } from 'src/app/models/product/productmodel';
import { ProductService } from 'src/app/servies/product/product.service';
import { AlertifyService } from './../../servies/alertify/alertify.service';


@Component({
  selector: 'app-editComponent',
  templateUrl: './editComponent.component.html',
  styleUrls: ['./editComponent.component.css']
})
export class EditComponentComponent implements OnInit {
  @ViewChild('formTabs')
  formTabs!: TabsetComponent;
  productForm !: FormGroup;
  nextClicked !: boolean;
  EditComponentComponent = {};
  product = new updateProductModel();
  productId !: number;
  // id!:number;

  //  productView : productModel={
  //     id:'',
  //     name:'',
  //     color:'',
  //     brand:'',
  //     size:'',
  //     postby:'',
  //     postdate:'',
  //     description:'',
  //     image:'',
  //     price:'',
  //     type:'',


  //   }





  constructor(private fb: FormBuilder,private productServices:ProductService,private route:ActivatedRoute,private alertify:AlertifyService,private router:Router ) { }
  selectTab(tabId: number, IsCurrrentValid: boolean) {
    this.nextClicked = true;
    if (IsCurrrentValid){
        this.formTabs.tabs[tabId].active = true;
    }

}

  ngOnInit() {

    // this.productId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
        (data: any) => {
          console.log('details',data);
            this.product = data.prp;

        }
    );
    this.createProduct();
  }

  createProduct(){
    this.productForm = this.fb.group({
        BasicInfo : this.fb.group({

            name: ['', Validators.required],
            brand: ['', Validators.required],
            // type: ['1', Validators.required],
        }),
        priceInfo: this.fb.group({
            color: ['', Validators.required],

            size: ['', Validators.required],
            price: ['', Validators.required],

        }),
        DetailsInfo: this.fb.group({
            description: ['', Validators.required],

            postby: ['', Validators.required],

            // postdate: ['', Validators.required],

        }),
        uploadInfo : this.fb.group({
            image: ['', Validators.required],
        })

    });

}

get BasicInfo(){
    return this.productForm.controls.BasicInfo as FormGroup;
}
get priceInfo(){
    return this.productForm.controls.priceInfo as FormGroup;
}
get DetailsInfo(){
    return this.productForm.controls.DetailsInfo as FormGroup;
}
get uploadInfo(){
    return this.productForm.controls.uploadInfo as FormGroup;
}



get name(){
    return this.BasicInfo.controls.name as FormControl;
}
// get type(){
//     return this.BasicInfo.controls.type as FormControl;
// }
get brand(){
    return this.BasicInfo.controls.brand as FormControl;
}

get color(){
    return this.priceInfo.controls.color as FormControl;
}
get size(){
    return this.priceInfo.controls.size as FormControl;
}
get price(){
    return this.priceInfo.controls.price as FormControl;
}

get postby(){
    return this.DetailsInfo.controls.postby as FormControl;
}
// get postdate(){
//     return this.DetailsInfo.controls.postdate as FormControl;
// }
get description(){
    return this.DetailsInfo.controls.description as FormControl;
}
get image(){
    return this.uploadInfo.controls.image as FormControl;
}








onSubmit(){

    this.nextClicked = true;
    if (this.IsAllTabsValid()){
        this.mapProduct();
        console.log('values',this.productForm.value)

        this.updateproduct();

    }





  }

  updateproduct(){
    this.productId = +this.route.snapshot.params['id'];
    console.log('id',this.productId);

    this.productServices.updateProduct(this.product.id,this.product).subscribe(
      (resp:any)=>{
        this.product= resp;

        console.log('update data');
        console.log("update data",resp);
        this.router.navigate(['/tables/product'])
        this.alertify.success('update successful');
      }
    )

  }
IsAllTabsValid(): boolean{
    if (this.BasicInfo.invalid){
        this.formTabs.tabs[0].active = true;
        return false;
    }
    if (this.priceInfo.invalid){
        this.formTabs.tabs[1].active = true;
        return false;
    }
    if (this.DetailsInfo.invalid){
        this.formTabs.tabs[2].active = true;
        return false;
    }
    // if(this.uploadInfo.invalid){
    //   this.formTabs.tabs[3].active = true;
    //   return false;
    // }
    return true;

}

mapProduct(): void{
    this.product.id = this.route.snapshot.params['id'];
    // this.product.type = +this.type.value;
    this.product.name = this.name.value;
    this.product.brand = this.brand.value;
    this.product.color = this.color.value;
    this.product.size = this.size.value;
    this.product.price = this.price.value;
    this.product.postby = this.postby.value;
    // this.product.postdate = this.postdate.value;
    this.product.description = this.description.value;
    this.product.image = this.image.value;

}


}
