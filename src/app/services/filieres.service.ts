import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Filiere } from '../Models/Filiere';
import { Module } from '../Models/Module';

@Injectable({
  providedIn: 'root'
})
export class FilieresService {

  private Url = "http://localhost:3000/filieres"
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    idFiliere: new FormControl('', Validators.required),
    typeFiliere: new FormControl('', Validators.required),
    module: new FormControl('', Validators.required),
    titre: new FormControl('', Validators.required),
    departement: new FormControl('', Validators.required),
    chefdefiliere: new FormControl('', Validators.required),

  });

  initializeFormGroup() {
    this.form.setValue({
      id:null,
      idFiliere:"",
      typeFiliere: "",
      module:[],
      titre:"",
      departement:"",
      chefdefiliere:"",
    });
  }

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Filiere>(this.Url);
  }
  getModules(idf){
    return this.http.get<Module>(`${this.Url}/${idf}/module`);
  }
  addFilier(filiere){
    return this.http.post<Filiere>(this.Url,filiere);
  }

  deleteFilier(id){
    return this.http.delete(`${this.Url}/${id}`);
  }
  updateFilier(filiere){
    return this.http.put(`${this.Url}/${filiere.id}`,filiere);
  }

  populateform(row){
    this.form.setValue(row);

  }
}
