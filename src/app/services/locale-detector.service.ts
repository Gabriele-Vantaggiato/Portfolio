import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocaleDetectorService {
  constructor(private http: HttpClient) {}

  detectCountry(): Observable<string> {
    return this.http.get<any>('https://ipapi.co/json/').pipe(
      map(response => response.country || 'EN'),
      catchError(() => of('EN'))
    );
  }
}
