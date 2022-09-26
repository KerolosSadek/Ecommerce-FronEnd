import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return  this.http.get("http://localhost:3000/product/showProducts")
  }
  getSingleProduct(_id:any):Observable<any>{
    return this.http.get(`http://localhost:3000/product/singleProduct/${_id}`)
  }
}
