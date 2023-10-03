import { Component ,OnInit} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgFor, AsyncPipe} from '@angular/common';
import {IProduct } from './interfaces/Iproduct';
import { ProductService } from './services/product.service';
import {MatDialog} from '@angular/material/dialog';
import { DetailsProductComponent } from './details-product/details-product.component';
import { SharedModule } from './shared/shared/shared.module';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgOptimizedImage,ReactiveFormsModule,SharedModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products:IProduct[]=[];
  productsFromFilterByTitle:IProduct[]=[];
  productsFromFilterByBrand:IProduct[]=[];
  errorMessage:string="";
  displayAllProducts=true;
  displayAllProductsBySearch=false;
  displayAllProductsByBrand=false;
  constructor(private productService:ProductService,public dialog: MatDialog){}
  inputSearch = new FormControl('');
 
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
    this.getAllProducts();
  }

  getAllProducts(){
    this.displayAllProducts=true;
    this.displayAllProductsBySearch=false;
    this.displayAllProductsByBrand=false;
    this.productService.getAllProducts().subscribe({
      next:data=>this.products=data.products,
      error:error=>this.errorMessage=error
      })
  }

  filterByTitle(event:any){
    this.displayAllProductsBySearch=true;
    this.displayAllProducts=false;
    this.displayAllProductsByBrand=false;
      this.productsFromFilterByTitle=this.products.filter(function(ele:any){
     return ele.title.startsWith(event.target.value);
    });
    
   } 

   filterByBrand(event:any){
    this.displayAllProducts=false;
    this.displayAllProductsBySearch=false;
    this.displayAllProductsByBrand=true;
    this.productsFromFilterByBrand=this.products.filter(function(ele:any){
      return ele.brand===event.value;
     });
   }

   getProductById(product:IProduct){
     this.dialog.open(DetailsProductComponent,{
      data:{
        productData:product
      }
     });
   }
    
}

