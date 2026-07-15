import { Injectable } from '@angular/core';
import { Observable } from 'node_modules/rxjs/dist/types/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Epi } from './epi.model';

@Injectable({
  providedIn: 'root',
})
export class EpiService {
private apiUrl = "http://localhost:3000/epis";
constructor (private http: HttpClient) {}

listar(): Observable <Epi[]>{
  return this.http.get<Epi[]>(this.apiUrl);
}

cadastrar(epi: Omit<Epi, 'id'>): Observable<Epi> {
  return this.http.post<Epi>(this.apiUrl, epi);
  }
}