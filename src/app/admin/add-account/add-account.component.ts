import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Etudiant } from '../../Models/Etudiant';
import { DatePipe } from '@angular/common';
import { Professeur } from '../../Models/Professeur';
import { Operateur } from '../../Models/operateur';
import { AccountOperateurService } from 'src/app/services/account-operateur.service';
import { AccountService } from 'src/app/services/account.service';
import { AccountProfesseurService } from 'src/app/services/account-professeur.service';
import { FilieresService } from 'src/app/services/filieres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  datePipe = new DatePipe('en-US');

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  etudiant: boolean=false;
  professeur: boolean=false;
  operateur: boolean=false;

  nom:String;
  prenom:String;
  CIN:String;
  DN:String;
  ville:String;
  tel:String;
  typeOfAcc:String;
  email:String;
  filier:String;
  modules:String;
  nAppogee:String;
  test:String;
  listFs:any=[];

  private etudiantAdd:Etudiant={
    nom: "" ,
    apogee: "",
    cin: "",
    prenom: "",
    datenaissance: "",
    ville: "",
    idFiliere: "",
    Tel: "",
    siValide: true,
    password: "",
    image: "",
    email: "",
    semestre: [12],
    noteModule: 12,
  };

  private professeurAdd:Professeur={
    cin: "",
    nom: "",
    prenom: "",
    module: [],
    datenaissance: "",
    ville: "",
    Tel: "",
    password: "",
    email: "",
  };
  private operateurAdd:Operateur={
    cin: "",
    nom: "",
    prenom: "",
    datenaissance: "",
    ville: "",
    Tel: "",
    password: "",
    email: "",
  };
  
  constructor(private _formBuilder: FormBuilder, private service: AccountService,
                private serviceoperateur:AccountOperateurService, 
                private serviceprof:AccountProfesseurService,
                private serviceFiliere:FilieresService,
                private router:Router
              ) 
                {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      ctrlNom: ['', Validators.required],
      ctrlPrenom: ['', Validators.required],
      ctrlCIN: ['', Validators.required],
      ctrlDN: ['', Validators.required],
      ctrlVille: ['', Validators.required],
      ctrlTel: ['', Validators.required],
      ctrlTyptOfAcc:['', Validators.required],
      
    });
    this.secondFormGroup = this._formBuilder.group({
      ctrlEmail: '',
      ctrlFilier: '',
      ctrlModules: '',
      ctrlNAppogee: '',
    });

    this.serviceFiliere.getAll().subscribe(res => {
      if (!res) { return; }
      console.log(res);
      this.listFs = res;
    });
  }
  show(){
    this.nom = this.firstFormGroup.controls.ctrlNom.value; 
    this.prenom = this.firstFormGroup.controls.ctrlPrenom.value; 
    this.CIN = this.firstFormGroup.controls.ctrlCIN.value ;
    this.DN = this.firstFormGroup.controls.ctrlDN.value; 
    this.DN = this.datePipe.transform(this.DN.toString(), 'dd/MM/yyyy');
    console.log(this.DN);
    this.ville = this.firstFormGroup.controls.ctrlVille.value; 
    this.tel = this.firstFormGroup.controls.ctrlTel.value; 
    this.typeOfAcc = this.firstFormGroup.controls.ctrlTyptOfAcc.value;
    if (this.typeOfAcc === "etudiant"){
        this.etudiant=true;
        this.professeur=false;
        this.operateur=false;
        
    }else if(this.typeOfAcc === "professeur"){
        this.professeur=true;
        this.etudiant=false;
        this.operateur=false;
    }else if(this.typeOfAcc === "operateur"){
      this.operateur=true;
      this.etudiant=false;
      this.professeur=false;
    }
    console.log(this.firstFormGroup.controls.ctrlTyptOfAcc.value)
  }

showInputData(){
console.log("hello !!!!!!!!")
    if (this.typeOfAcc === "etudiant"){
      this.email = this.secondFormGroup.controls.ctrlEmail.value; 
      this.filier = this.secondFormGroup.controls.ctrlFilier.value;  
      this.nAppogee = this.secondFormGroup.controls.ctrlNAppogee.value;

      this.etudiantAdd.nom=this.nom.toString() ;
      this.etudiantAdd.apogee=this.nAppogee.toString();
      this.etudiantAdd.cin=this.CIN.toString();
      this.etudiantAdd.prenom=this.prenom.toString();
      this.etudiantAdd.datenaissance = this.DN.toString();
      this.etudiantAdd.ville=this.ville.toString();
      this.etudiantAdd.Tel=this.tel.toString();
      this.etudiantAdd.siValide= false;
      this.etudiantAdd.password=this.DN.toString();
      this.etudiantAdd.image="aaaa";
      this.etudiantAdd.email=this.email.toString();
      this.etudiantAdd.semestre= [];
      this.etudiantAdd.noteModule= 0;
      
    }else if(this.typeOfAcc === "professeur"){
      this.email = this.secondFormGroup.controls.ctrlEmail.value;  
      this.modules = this.secondFormGroup.controls.ctrlModules.value; 

      this.professeurAdd.cin= this.CIN.toString();
      this.professeurAdd.nom= this.nom.toString();
      this.professeurAdd.prenom= this.prenom.toString();
      this.professeurAdd.datenaissance= this.DN.toString();
      this.professeurAdd.ville= this.ville.toString();
      this.professeurAdd.Tel= this.tel.toString();
      this.professeurAdd.password= this.CIN.toString();
      this.professeurAdd.email= this.email.toString();

    }else if(this.typeOfAcc === "operateur"){
      this.email = this.secondFormGroup.controls.ctrlEmail.value;  

      this.operateurAdd.cin= this.CIN.toString();
      this.operateurAdd.nom= this.nom.toString();
      this.operateurAdd.prenom= this.prenom.toString();
      this.operateurAdd.datenaissance= this.DN.toString();
      this.operateurAdd.ville= this.ville.toString();
      this.operateurAdd.Tel= this.tel.toString();
      this.operateurAdd.password= this.CIN.toString();
      this.operateurAdd.email= this.email.toString();
    }
   
  }
  etudiants:Etudiant[]=[];
  professeurs:Professeur[]=[];
  operateurs:Operateur[]=[];
  addAcc(){
    if(this.typeOfAcc === "etudiant"){
      this.service.addEtudiant(this.etudiantAdd)
        .subscribe((etudiantAdd)=>{
          this.etudiants=[etudiantAdd,...this.etudiants]
      });
      
    }if(this.typeOfAcc === "professeur"){
      this.serviceprof.addProfesseur(this.professeurAdd)
        .subscribe((professeurAdd)=>{
          this.professeurs=[professeurAdd,...this.professeurs]
      });
      
    }else if(this.typeOfAcc === "operateur"){
      this.serviceoperateur.addOperateur(this.operateurAdd)
      .subscribe((operateurAdd)=>{
        this.operateurs=[operateurAdd,...this.operateurs]
      });
     
    }
    this.router.navigateByUrl('/'+this.typeOfAcc+'s');
  }

}
