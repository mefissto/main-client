import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class BaseApiService {
  private readonly baseApiUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);

  get<Response>(url: string): Observable<Response> {
    return this.http.get<Response>(this.getFullUrl(url));
  }

  post<Response, Body>(url: string, payload: Body): Observable<Response> {
    return this.http.post<Response>(this.getFullUrl(url), payload);
  }

  patch<Response, Body>(url: string, payload: Body): Observable<Response> {
    return this.http.patch<Response>(this.getFullUrl(url), payload);
  }

  put<Response>(url: string, payload: Body): Observable<Response> {
    return this.http.put<Response>(this.getFullUrl(url), payload);
  }

  delete<Response>(url: string): Observable<Response> {
    return this.http.delete<Response>(this.getFullUrl(url));
  }

  private getFullUrl(url: string): string {
    return `${this.baseApiUrl}/${url}`;
  }
}
