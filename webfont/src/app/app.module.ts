import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { UserService } from './servies/user/user.service';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { WavesModule, TableModule } from 'angular-bootstrap-md';



// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';


// import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navbar/Navbar.component';
import { ProductComponent } from './components/product/product.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductService } from './servies/product/product.service';
import { RegisterComponent } from './components/user/Register/register/register.component';
import { LoginComponent } from './components/user/login/login/login.component';
import { AddproductComponent } from './components/addProduct/addproduct/addproduct.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails/productdetails.component';
import { AuthService } from './servies/user/auth/auth.service';
import { ProductTableComponent } from './components/ProductTable/ProductTable.component';




const appRoutes: Routes=[
  {path:'' , component: ProductlistComponent},
  {path:'user/login' , component:LoginComponent},
  {path:'user/register', component:RegisterComponent},
  {path:'add-product',component:AddproductComponent},
  {path:'product-details', component:ProductdetailsComponent},
  {path:'tables/product',component:ProductTableComponent},
  {path:'clothes' , component: ProductlistComponent},
  {path:'gadgets' , component: ProductlistComponent}
//  {path:'/clothes', component:ProductdetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    NavbarComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    AddproductComponent,
    ProductdetailsComponent,
    ProductTableComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TooltipModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    TabsModule.forRoot(),
    TableModule,
    WavesModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,

    ReactiveFormsModule,





    // MatButtonModule,
    // MatDividerModule,
    // MatIconModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatToolbarModule


  ],
  providers: [
    ProductService,
    UserService,
    AuthService,

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
