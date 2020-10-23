import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StartComponent } from './core/start/start.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { RechargeCardComponent } from './core/recharge-card/recharge-card.component';
import { PurchasedProductsComponent } from './core/purchased-products/purchased-products.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartComponent,
    ProductCardComponent,
    RechargeCardComponent,
    PurchasedProductsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
