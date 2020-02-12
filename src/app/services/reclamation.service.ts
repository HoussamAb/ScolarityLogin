import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamation } from '../Models/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private url="http://localhost:3000/reclamations";

  constructor(private http:HttpClient) { }
  
  findReclamation(type,etat){
    return this.http.get<Reclamation[]>(`${this.url}?type=${type}&siValide=${etat}`);
  }
  ValiderReclamation(recl){
    return this.http.put(`${this.url}/${recl.id}`,recl);
  }

  
}