import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Operateur } from '../Models/operateur';

@Injectable({
  providedIn: 'root'
})
export class AccountOperateurService {

  private Url = "http://localhost:3000/Operateurs"
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    cin:new FormControl('', Validators.required),
    nom:new FormControl('', Validators.required),
    prenom:new FormControl('', Validators.required),
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
      datenaissance:'',
      ville:'',
      Tel:'',
      password:'',
      email:'',
    });
  }
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Operateur>(this.Url);
  }

  addOperateur(operateur){
    return this.http.post<Operateur>(this.Url,operateur);
  }

  deleteOperateur(id){
    return this.http.delete(`${this.Url}/${id}`);
  }
  updateOperateur(operateur){
    return this.http.put(`${this.Url}/${operateur.id}`,operateur);
  }

  populateform(row){
    this.form.setValue(row);

  }
}
