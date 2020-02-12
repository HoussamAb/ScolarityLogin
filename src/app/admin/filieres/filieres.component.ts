import { Component, OnInit } from '@angular/core';
import { Filiere } from '../../Models/Filiere';
import { Module } from '../../Models/Module';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Professeur } from '../../Models/Professeur';
import { AccountProfesseurService } from 'src/app/services/account-professeur.service';
import { FilieresService } from 'src/app/services/filieres.service';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.css']
})
export class FilieresComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
/////////
  test:String;
  typesF = ['Licence Pro', 'Licence', 'Master Spé', 'Master Rech', 'Doctorat'];
  departements = ['Informatique', 'Mathématique', 'Langues Etrangères Appliquées', 'Littérature Générale et Comparée',
        'Economique', 'Physique', 'Chimie'];
  prof: any=[];
  nbrS:number=0;
  idFiliere:String;
  module:Module[]=[];
  titre:String;
  departement:String;
  chefdefiliere:String;
  idModule:String;
  titreModule:String;
  typeFiliere:String;

  private filiereAdd:Filiere={
    idFiliere:"",
    typeFiliere:"",
    module:[],
    titre:"",
    departement:"",
    chefdefiliere:"",
  };

  private moduleAdd:Module={
    idModule: "",
    titre: "",
    idfiliere: 0,
    Chargehoraire: 0,
    idprof: "",
    anneValidation: "",
    session: "",
  };
  
  semesters:String[];
  
  constructor(private _formBuilder: FormBuilder, private service: FilieresService,
          private srviceProf:AccountProfesseurService) 
                {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      idFiliere: "",
      typeFiliere: "",
      titre:["",Validators.required],
      departement:["",Validators.required],
      chefdefiliere:["",Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      idModule1: ["", Validators.required],
      titre1: ["", Validators.required],
      idModule2: ["", Validators.required],
      titre2: ["", Validators.required],
      idModule3: ["", Validators.required],
      titre3: ["", Validators.required],
      idModule4: ["", Validators.required],
      titre4: ["", Validators.required],
      idModule5: ["", Validators.required],
      titre5: ["", Validators.required],
      idModule6: ["", Validators.required],
      titre6: ["", Validators.required],
    });
    
    this.srviceProf.getAll().subscribe(res => {
      if (!res) { return; }
      console.log(res);
      this.prof = res; 
    });
  }
  show(){
    if(this.firstFormGroup.controls.typeFiliere.value === 'Licence Pro' || 
    this.firstFormGroup.controls.typeFiliere.value ===  'Licence' ){
      this.semesters = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];
      this.nbrS = 6;
    }else if( this.firstFormGroup.controls.typeFiliere.value ===  'Master Spé' || 
      this.firstFormGroup.controls.typeFiliere.value ===  'Master Rech' ){
        this.semesters = ['S1', 'S2', 'S3', 'S4'];
        this.nbrS = 4;
    }else if( this.firstFormGroup.controls.typeFiliere.value ===  'Doctorat'){
      this.semesters = [];
      this.nbrS = 0;
    }
    this.idFiliere=this.firstFormGroup.controls.idFiliere.value;
    this.titre=this.firstFormGroup.controls.typeFiliere.value;
    this.typeFiliere=this.firstFormGroup.controls.titre.value;
    this.departement=this.firstFormGroup.controls.departement.value;
    this.chefdefiliere=this.firstFormGroup.controls.chefdefiliere.value;

    this.filiereAdd.idFiliere = this.idFiliere.toString();
    this.filiereAdd.titre = this.titre.toString();
    this.filiereAdd.typeFiliere = this.typeFiliere.toString();
    this.filiereAdd.departement = this.idFiliere.toString();
    this.filiereAdd.chefdefiliere = this.idFiliere.toString();
 
  }

  filieres:Filiere[]=[];

  addmodule(){
    console.log("hellooooooo!!!!!!");
    this.idModule = this.secondFormGroup.controls.idModule1.value;
    this.titreModule = this.secondFormGroup.controls.titre1.value;
    this.moduleAdd.idModule = this.idModule.toString();
    this.moduleAdd.titre = this.titreModule.toString();
    console.log(this.moduleAdd);
    this.module.push(this.moduleAdd);
    this.idModule = this.secondFormGroup.controls.idModule2.value;
    this.titreModule = this.secondFormGroup.controls.titre2.value;
    this.moduleAdd.idModule = this.idModule.toString();
    this.moduleAdd.titre = this.titreModule.toString();
    console.log(this.moduleAdd);
    this.module.push(this.moduleAdd);
    this.idModule = this.secondFormGroup.controls.idModule3.value;
    this.titreModule = this.secondFormGroup.controls.titre3.value;
    this.moduleAdd.idModule = this.idModule.toString();
    this.moduleAdd.titre = this.titreModule.toString();
    console.log(this.moduleAdd);
    this.module.push(this.moduleAdd);
    this.idModule = this.secondFormGroup.controls.idModule4.value;
    this.titreModule = this.secondFormGroup.controls.titre4.value;
    this.moduleAdd.idModule = this.idModule.toString();
    this.moduleAdd.titre = this.titreModule.toString();
    console.log(this.moduleAdd);
    this.module.push(this.moduleAdd);
    this.idModule = this.secondFormGroup.controls.idModule5.value;
    this.titreModule = this.secondFormGroup.controls.titre5.value;
    this.moduleAdd.idModule = this.idModule.toString();
    this.moduleAdd.titre = this.titreModule.toString();
    console.log(this.moduleAdd);
    this.module.push(this.moduleAdd);
    this.idModule = this.secondFormGroup.controls.idModule6.value;
    this.titreModule = this.secondFormGroup.controls.titre6.value;
    this.moduleAdd.idModule = this.idModule.toString();
    this.moduleAdd.titre = this.titreModule.toString();
    console.log(this.moduleAdd);
    this.module.push(this.moduleAdd);

    this.filiereAdd.module = this.module;

    console.log(this.filiereAdd);
    

  }
  addF(){
    this.filiereAdd.module = this.module;
    console.log(this.filiereAdd);
    this.service.addFilier(this.filiereAdd)
        .subscribe((etudiantAdd)=>{
          this.filieres=[etudiantAdd,...this.filieres]
      });
  }

}
