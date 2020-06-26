import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { productUrl } from 'src/app/config/api';
 // const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //  products: Product[] = [
  //     new Product(1, 'Product 1', 'This is description for Product 1. This product is really Cool', 100 ),
  //     new Product(2, 'Product 2', 'This is description for Product 2. This product is really Cool', 50 ),
  //     new Product(3, 'Product 3', 'This is description for Product 3. This product is really Cool', 150 ),
  //     new Product(4, 'Product 4', 'This is description for Product 4. This product is really Cool', 200 ),
  //     new Product(5, 'Product 5', 'This is description for Product 5. This product is really Cool', 250 ),
  //     new Product(6, 'Product 6', 'This is description for Product 6. This product is really Cool', 300 ),
  //     new Product(7, 'Product 7', 'This is description for Product 7. This product is really Cool', 350 ),
  //     new Product(8, 'Product 8', 'This is description for Product 8. This product is really Cool', 400 )
  //  ]
  constructor(private http:HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(productUrl);
  }
}
