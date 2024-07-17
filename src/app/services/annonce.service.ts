import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annonce } from '../model/annonce';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
private baseurl='http://localhost:3000/annonce'
  constructor(private http: HttpClient) { }
  createannonce(annonce: FormData): Observable<Annonce> {
    return this.http.post<Annonce>(this.baseurl, annonce);
  }
 /* createannonce(annonce:Annonce):Observable<Annonce>
  {
    return this.http.post<Annonce>(this.baseurl,annonce).pipe(tap(data=>{console.log('createannonce()',data)}));
  }
  */
  deleteannonce(id:number):Observable<void>
  {
    return this.http.delete<void>(`${this.baseurl}/${id}`);
  }
  updateannonce(annonce:Annonce,id:number):Observable<Annonce>
  {
    return this.http.put<Annonce>(`${this.baseurl}/${id}`,annonce);
  }
  getannonce(id:number):Observable<Annonce>
  {
    return this.http.get<Annonce>(`${this.baseurl}/${id}`);
  }
  getlisteannonce():Observable<Annonce[]>
  {
    return this.http.get<Annonce[]>(this.baseurl);
  }

}

