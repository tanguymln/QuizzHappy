import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  private url: string = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) {}

  public get(params: {
    amount: number;
    category: number;
    difficulty: string;
    type: string;
    encode: string;
  }) {
    const httpParams = new HttpParams({
      fromObject: {
        amount: params.amount.toString(),
        category: params.category,
        difficulty: params.difficulty,
        type: params.type,
        encode: 'base64',
      },
    });

    return this.http.get(this.url, { params: httpParams });
  }
}
