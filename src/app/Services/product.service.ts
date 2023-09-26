import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IProduct } from '../Interfaces/Iproduct';
import { Iproducts } from '../Interfaces/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Iproducts[]>{
   return this.http.get<Iproducts[]>(`https://dummyjson.com/products`).pipe(catchError((err)=>{
     return throwError(()=>err.message || 'server error')
   }));
  }


getProductById(id:number):Observable<IProduct>{
  return this.http.get<IProduct>(`https://dummyjson.com/products/${id}`).pipe(catchError((err)=>{
    return throwError(()=>err.message || 'server error')
  }));
}
}
