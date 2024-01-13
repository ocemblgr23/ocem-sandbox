import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, tap } from 'rxjs';
import { ICommonResp, IProduct } from 'src/common';
import { handelError } from '../utils/common-error';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';
  // Inject HttpClient
  _http = inject(HttpClient);

  constructor() {}

  hello() {
    return 'Hello World App';
  }

  getProducts() {
    // tap log response in service level
    return this._http.get<ICommonResp>(this.apiUrl).pipe(
      tap((resp) => console.log(resp)),
      map((resp) => resp.products),
      catchError(handelError)
    );
  }
}
