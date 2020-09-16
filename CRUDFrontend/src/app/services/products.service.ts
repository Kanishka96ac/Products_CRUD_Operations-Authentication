import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import {Products} from '../models/products.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  selectedProduct : Products;
  products : Products[];

  readonly baseURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  postProduct(newProducts: Products) {
    return this.http.post(this.baseURL, newProducts);
  }

  getProductList() {
    return this.http.get(this.baseURL);
  }

  putProduct(newProducts: Products) {
    return this.http.put(this.baseURL + `/${newProducts._id}`, newProducts);
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
