import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demande } from '../Models/Demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private url="http://localhost:3000/demandes";

  constructor(private http:HttpClient) { }
  findALL(etat){
    return this.http.get<Demande[]>(`${this.url}?siValide=${etat}`)
  }

  getDemandeEtd(idEtd){
    return this.http.get<Demande>(`${this.url}/${idEtd}`);
  }

  ValiderDemande(demande){
    return this.http.put(`${this.url}/${demande.id}`,demande);
  }

  findDate(etat,label){
    return this.http.get<Demande>(`${this.url}?idPiece=${label}&siValide=${etat}`);
  }
  
}
