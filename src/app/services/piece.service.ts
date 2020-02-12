import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Piece } from '../Models/Piece';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  constructor(private http:HttpClient, private router: Router) { }

  private url="http://localhost:3000/Pieces";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    label: new FormControl('', Validators.required),
    siCache: new FormControl('false',),
    nbr_total:new FormControl(0),
    nbr_total_par_jour:new FormControl(0),
    nbr_demande_par_jour:new FormControl(0),
    date_prochain_rdv:new FormControl(""),
  });

  initializeFormGroup() {
    this.form.setValue({
      id:null,
      label: '',
      siCache: false,
      nbr_demande_par_jour:0,
      nbr_total:0,
      nbr_total_par_jour:0,
      date_prochain_rdv:""
    });
  }
    getPieces(){
      return this.http.get<Piece[]>(this.url)
    }
    addPiece(piece){
      return this.http.post<Piece>(this.url,piece);
    }
    deletePiece(id){
      return this.http.delete(`${this.url}/${id}`);
    }
    updatePiece(piece){
      return this.http.put(`${this.url}/${piece.id}`,piece);
    }

    populateform(row){
      this.form.setValue(row);

    }
    getAll() {
      return this.http.get<Piece>(this.url);
    }


}
