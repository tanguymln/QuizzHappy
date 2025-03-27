import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'https://opentdb.com/api.php';
  private urlCategory: string = 'https://opentdb.com/api_category.php';

  constructor(private http: HttpClient) {}

  public get(params: {
    amount: number;
    category: string;
    difficulty: string;
  }): Observable<any> {
    const httpParams = new HttpParams({
      fromObject: {
        amount: params.amount.toString(),
        category: params.category,
        difficulty: params.difficulty,
        type: '',
        encode: 'base64',
      },
    });

    return this.http.get<string>(this.url, { params: httpParams });
  }

  public getCategory(): Observable<any> {
    return this.http.get<string>(this.urlCategory);
  }
}
