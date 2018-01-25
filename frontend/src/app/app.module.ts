import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { DenimComponent } from './denim/denim.component';
import { FootwearComponent } from './footwear/footwear.component';
import { JeansComponent } from './jeans/jeans.component';
import { OuterwearComponent } from './outerwear/outerwear.component';
import { PantsComponent } from './pants/pants.component';
import { CartComponent } from './cart/cart.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { ShortsComponent } from './shorts/shorts.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductdetailComponent,
    AccesoriesComponent,
    DenimComponent,
    FootwearComponent,
    JeansComponent,
    OuterwearComponent,
    PantsComponent,
    CartComponent,
    ShirtsComponent,
    TshirtsComponent,
    ShortsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'accessories',component:AccesoriesComponent},
      {path:'cart',component:CartComponent},
      {path:'denim',component:DenimComponent},
      {path:'footwear',component:FootwearComponent},
      {path:'jeans',component:JeansComponent},
      {path:'outerwear',component:OuterwearComponent},
      {path:'pants',component:PantsComponent},
      {path:'shirts',component:ShirtsComponent},
      {path:'tshirts',component:TshirtsComponent},
      {path:'shorts',component:ShortsComponent},
      {path:'productdetail/:id',component:ProductdetailComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
