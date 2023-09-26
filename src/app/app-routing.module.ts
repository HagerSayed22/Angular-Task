import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products.component';
import { ProductByIdComponent } from './product-by-id.component';

const routes: Routes = [{path:'allProducts',component:AllProductsComponent},
{path:'',component:AllProductsComponent},{path:'product/:id',component:ProductByIdComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
