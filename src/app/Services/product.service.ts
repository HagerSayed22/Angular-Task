import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {Iproduct, Iproducts} from '../interfaces/iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Iproducts>{
    return this.http.get<Iproducts>(`https://dummyjson.com/products`).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'server error')
    }));
   }
 
 
 getProductById(id:number):Observable<Iproduct>{
   return this.http.get<Iproduct>(`https://dummyjson.com/products/${id}`).pipe(catchError((err)=>{
     return throwError(()=>err.message || 'server error')
   }));
 }
}
