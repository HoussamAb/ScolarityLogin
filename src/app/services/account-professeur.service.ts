import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Professeur } from '../Models/Professeur';

@Injectable({
  providedIn: 'root'
})
export class AccountProfesseurService {

  private Url = "http://localhost:3000/Professeurs"
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    cin: new FormControl('', Validators.required),
    nom:new FormControl('', Validators.required),
    prenom:new FormControl('', Validators.required),
    module:new FormControl([]),
    datenaissance:new FormControl('', Validators.required),
    ville:new FormControl('', Validators.required),
    Tel:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required),
    email:new FormControl('', Validators.required),
    

  });

  initializeFormGroup() {
    this.form.setValue({
      id:'',
      cin:'',
      nom:'',
      prenom:'',
      module:[],
      datenaissance:'',
      ville:'',
      Tel:'',
      password:'',
      email:'',
      
    });
  }

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Professeur>(this.Url);
  }

  addProfesseur(professeur){
    return this.http.post<Professeur>(this.Url,professeur);
  }

  deleteProfesseur(id){
    return this.http.delete(`${this.Url}/${id}`);
  }
  updateProfesseur(professeur){
    return this.http.put(`${this.Url}/${professeur.id}`,professeur);
  }

  populateform(row){
    this.form.setValue(row);

  }
}
