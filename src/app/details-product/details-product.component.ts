import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,} from '@angular/material/dialog';
import { ProductComponent } from '../product.component';
import { IProduct } from '../interfaces/iproduct';



@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styles:[
   '.product-div {text-align: center;}'
  
  ]
})
export class DetailsProductComponent  {
  product:IProduct;
  errorMessage:string="";
 constructor(public dialoRef:MatDialogRef<ProductComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  ){
    this.product=data.productData
  }

}