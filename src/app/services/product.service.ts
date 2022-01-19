import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products?size=100"

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {

    // pipe & map info => https://medium.com/angular-in-depth/reading-the-rxjs-6-sources-map-and-pipe-94d51fec71c2

    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    )
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}