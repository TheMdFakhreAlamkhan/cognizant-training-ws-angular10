import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';
import { IStock } from '../model/IStock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private httpClient: HttpClient) {}

  //getAllStock
  public getAllStocks(): Observable<IStock[]> {
    let dataUrl: string =
      'https://gist.githubusercontent.com/Aliza-alam/af97d2cdcc00dc542a0ea930c018754e/raw/6c2b58588d1a9e02d7a65b1551bcd17bb659a31f/stock-04052021.json';

    return this.httpClient
      .get<IStock[]>(dataUrl)
      .pipe(retry(1), catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      //client error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      //server error
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
