import { Component, OnInit, Inject } from '@angular/core';
import { Professeur } from 'src/app/Models/Professeur';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { AccountProfesseurService } from 'src/app/services/account-professeur.service';

@Component({
  selector: 'app-professeur-dialog',
  templateUrl: './professeur-dialog.component.html',
  styleUrls: ['./professeur-dialog.component.css']
})
export class ProfesseurDialogComponent implements OnInit {
  private professeur:Professeur={
    cin:'',
    nom:'',
    prenom:'',
    module:[],
    datenaissance:'',
    ville:'',
    Tel:'',
    password:'',
    email:'',
};
disabled = false;
constructor(
public dialogRef: MatDialogRef<ProfesseurDialogComponent>,
@Inject(MAT_DIALOG_DATA) public data: Professeur,
private service:AccountProfesseurService, 
private router:Router
) { }

ngOnInit() {
}

onNoClick(): void {
this.dialogRef.close();
this.router.navigateByUrl('/professeurs');
}

onClear(){
this.service.initializeFormGroup();
this.service.form.reset();
}

add(){

this.service.addProfesseur(this.professeur)
.subscribe((professeur)=>{
});
}


onSubmit()
{
this.professeur = this.service.form.value;
this.service.updateProfesseur(this.professeur).subscribe();
if(this.service.form.valid){
 this.professeur = this.service.form.value;
 if(this.service.form.value.id==null){
   console.log(this.professeur);
   this.add();
   this.service.form.reset();
 } 
 else {
   console.log(this.professeur);
   this.update();
   this.service.form.reset();
 }
 this.service.initializeFormGroup();
}
this. onNoClick();


}
update(){
this.service.updateProfesseur(this.professeur).subscribe();
}

}
