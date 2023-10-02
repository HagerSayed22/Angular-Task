import { Component,OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,} from '@angular/material/dialog';
import { ProductComponent } from '../product.component';
import { IProduct, Iproducts } from '../interfaces/Iproduct';



@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styles:[
   '.div-card {text-align: center;}'
  
  ]
})
export class DetailsProductComponent implements OnInit {
  product:IProduct;
  errorMessage:string="";
 constructor(public dialoRef:MatDialogRef<ProductComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  ){
    this.product=data.productData
  }
 ngOnInit(): void {


 }
}