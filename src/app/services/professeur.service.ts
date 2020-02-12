import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professeur } from '../Models/Professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  private url="http://localhost:3000/Professeurs";

  constructor(private http:HttpClient) { }
  
  getProf(id){
    return this.http.get<Professeur[]>(`${this.url}?${id}`);
  }
}
