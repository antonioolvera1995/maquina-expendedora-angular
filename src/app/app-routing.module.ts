import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchasedProductsComponent } from './core/purchased-products/purchased-products.component';
import { RechargeCardComponent } from './core/recharge-card/recharge-card.component';
import { StartComponent } from './core/start/start.component';

const routes: Routes = [
  { path: '', component: PurchasedProductsComponent },
  { path: '', component: RechargeCardComponent },
  { path: '', component: StartComponent , pathMatch: 'full' },
  { path: '**', component: StartComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
