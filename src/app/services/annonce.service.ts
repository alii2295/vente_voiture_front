import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../model/annonce';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private baseurl = 'http://localhost:3000/annonces';

  constructor(private http: HttpClient) { }

  createAnnonce(annonce: any): Observable<Annonce> {
    return this.http.post<Annonce>(this.baseurl, annonce);
  }
  
  getListeAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.baseurl);
  }

  getAnnonce(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(`${this.baseurl}/${id}`);
  }

  updateAnnonce(annonce: Annonce, id: number): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.baseurl}/${id}`, annonce);
  }

  deleteAnnonce(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseurl}/${id}`);
  }
}
