import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../Models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private url="http://localhost:3000/Etudiants";

  constructor(private http:HttpClient) { }
  
  getEtudiant(id){
    return this.http.get<Etudiant[]>(`${this.url}?${id}`);
  }

}

