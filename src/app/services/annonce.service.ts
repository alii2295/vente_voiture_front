import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../model/annonce';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
//decorateur 
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private baseurl = 'http://localhost:3000/annonces';//API 192;66;90;1

  constructor(private http: HttpClient) { }

  createAnnonce(annonce: any): Observable<Annonce> {
    return this.http.post<Annonce>(this.baseurl, annonce);
  }
  
  getListeAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.baseurl);
  }

  getAnnonce(id: string): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseurl}?id=${id}`);
  }

  getAnnonceByMatricule(matricule: string): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseurl}?matricule=${matricule}`);
  }

  updateAnnonce(annonce: Annonce,id:string): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.baseurl}/${id}`, annonce);
  }

  deleteAnnonce(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseurl}/${id}`);
  }

}
