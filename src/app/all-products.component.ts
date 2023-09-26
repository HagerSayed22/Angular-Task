import { Component ,OnInit} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { IProduct, Iproducts } from './Interfaces/Iproduct';
import { ProductService } from './Services/product.service';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card'
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ProductByIdComponent } from './product-by-id.component';
//import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule,FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,MatSelectModule,
    AsyncPipe,NgOptimizedImage,MatCardModule, MatDialogModule,],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products:any=[];
  productsBytitle:any=[];
  productsByBrand:any=[];
  errorMessage:string="";
  displayAllProducts=true;
  displayAllProductsBySearch=false;
  displayAllProductsByBrand=false;
  constructor(private productService:ProductService,private router:Router,public dialog: MatDialog){}
  myControl = new FormControl('');
 
   brands: any[] = [
    {value: 'Huawei', viewValue: 'Huawei'},
    {value: 'Apple', viewValue: 'Apple'},
    {value: 'Infinix', viewValue: 'Infinix'},
    {value: 'Royal_Mirage', viewValue: 'Royal_Mirage'},
    {value: 'Hemani Tea', viewValue: 'Hemani Tea'},
    {value: 'Samsung', viewValue: 'Samsung'},
    {value: 'Dermive', viewValue: 'Dermive'},
    {value: 'Saaf & Khaas', viewValue: 'Saaf & Khaas'},
    {value: 'fauji', viewValue: 'fauji'},
  ]; 

  ngOnInit() {
    this.displayAllProducts=true;
    this.displayAllProductsBySearch=false;
    this.displayAllProductsByBrand=false;
    this.productService.getAllProducts().subscribe({
      next:data=>this.products=data,
      error:error=>this.errorMessage=error
      })
  }

  FilterSearch(event:any){
    this.displayAllProductsBySearch=true;
    this.displayAllProducts=false;
    this.displayAllProductsByBrand=false;
      this.productsBytitle=this.products.products.filter(function(ele:any){
     return ele.title.startsWith(event.target.value);
    });
    console.log(this.productsBytitle)
   } 

   FilterDropDown(event:any){
    this.displayAllProducts=false;
    this.displayAllProductsBySearch=false;
    this.displayAllProductsByBrand=true;
    this.productsByBrand=this.products.products.filter(function(ele:any){
      return ele.brand===event.value;
     });
     console.log(event.value);
   }

   getProductById(product:any){
     //this.router.navigate(["/product",id]);
     this.dialog.open(ProductByIdComponent,{
      data:{
        id:product.id,
        title:product.title,
        description:product.description,
        price:product.price,
        discountPercentage:product.discountPercentage,
        rating:product.rating,
       stock:product.stock,
       brand:product.brand,
       category:product.category,
       images:product.images,
        
      }
     });
   }
}
