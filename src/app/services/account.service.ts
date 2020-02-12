import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Etudiant } from '../Models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private Url = "http://localhost:3000/Etudiants"
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl('',Validators.required),
    apogee: new FormControl('',Validators.required),
    cin: new FormControl('',Validators.required),
    prenom: new FormControl('',Validators.required),
    datenaissance: new FormControl('',Validators.required),
    ville: new FormControl('',Validators.required),
    idFiliere: new FormControl('',Validators.required),
    Tel: new FormControl('',Validators.required),
    siValide:new FormControl('false',),
    password: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    semestre: new FormControl([]),
    noteModule: new FormControl([]),

  });

  initializeFormGroup() {
    this.form.setValue({
      id:null,
      nom: "",
      apogee: "",
      cin: "",
      prenom: "",
      datenaissance: "",
      ville: "",
      idFiliere: "",
      Tel: "",
      siValide: false,
      password: "",
      image: "",
      email: "",
      semestre: [],
      noteModule: [],
    });
  }

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Etudiant>(this.Url);
  }

  addEtudiant(etudiant){
    return this.http.post<Etudiant>(this.Url,etudiant);
  }

  deleteEtudiant(id){
    return this.http.delete(`${this.Url}/${id}`);
  }
  updateEtudiant(etudiant){
    return this.http.put(`${this.Url}/${etudiant.id}`,etudiant);
  }

  populateform(row){
    this.form.setValue(row);

  }
}
