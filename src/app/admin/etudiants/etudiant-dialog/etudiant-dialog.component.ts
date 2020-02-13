import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Etudiant } from '../../../Models/Etudiant';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-etudiant-dialog',
  templateUrl: './etudiant-dialog.component.html',
  styleUrls: ['./etudiant-dialog.component.css']
})
export class EtudiantDialogComponent implements OnInit {

  private etudiant:Etudiant={
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
};
disabled = false;
constructor(
  public dialogRef: MatDialogRef<EtudiantDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Etudiant,
  private service:AccountService, 
  private router:Router
) { }

ngOnInit() {
}

onNoClick(): void {
  this.dialogRef.close();
  this.router.navigateByUrl('/etudiants');
}

onClear(){
  this.service.initializeFormGroup();
  this.service.form.reset();
}

add(){
  
  this.service.addEtudiant(this.etudiant)
  .subscribe((etudiant)=>{
  });
}


onSubmit()
{
this.etudiant = this.service.form.value;
this.service.updateEtudiant(this.etudiant).subscribe();
 if(this.service.form.valid){
   this.etudiant = this.service.form.value;
   if(this.service.form.value.id==null){
     console.log(this.etudiant);
     this.add();
     this.service.form.reset();
   } 
   else {
     console.log(this.etudiant);
     this.update();
     this.service.form.reset();
   }
   this.service.initializeFormGroup();
   
 }
this. onNoClick();


}
update(){
this.service.updateEtudiant(this.etudiant).subscribe();
}


}
