import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {IProduct, IProducts} from '../interfaces/iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<IProducts>{
    return this.http.get<IProducts>(`https://dummyjson.com/products`).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'server error')
    }));
   }
 
 
 getProductById(id:number):Observable<IProduct>{
   return this.http.get<IProduct>(`https://dummyjson.com/products/${id}`).pipe(catchError((err)=>{
     return throwError(()=>err.message || 'server error')
   }));
 }
}
