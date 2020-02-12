import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Avis } from '../Models/Avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  private url="http://localhost:3000/Avis";
  
  constructor(private http:HttpClient) { }
  getdALL(etat){
    return this.http.get<Avis[]>(`${this.url}?siValide=${etat}`)
  }

  ValiderAvis(avis){
    return this.http.put(`${this.url}/${avis.id}`,avis);
  }

}
