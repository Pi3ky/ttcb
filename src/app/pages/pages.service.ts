import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  urlApi = 'https://fakestoreapi.com';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.urlApi}/products`);
  }

  filterCategory(param: any): Observable<any> {
    return this.http.get(`${this.urlApi}/products/category/${param}`)
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.urlApi}/products/categories`)
  }

  getUserCart(id: any): Observable<any>{
    return this.http.get(`${this.urlApi}/carts/user/${id}`)
  }
}
