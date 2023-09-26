import { Component ,OnInit,Inject} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from './Services/product.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef,} from '@angular/material/dialog';
import { AllProductsComponent } from './all-products.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'
@Component({
  selector: 'app-product-by-id',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatFormFieldModule,MatCardModule,NgOptimizedImage,
    MatInputModule,
    FormsModule,
    MatButtonModule,],
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.scss']
})
export class ProductByIdComponent implements OnInit {
  product:any;
  errorMessage:string="";
 constructor(public dialoRef:MatDialogRef<AllProductsComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
  ){
    this.product=data
    
  }
 ngOnInit(): void {


 }
}
