import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Operateur } from '../../../Models/operateur';
import { AccountOperateurService } from 'src/app/services/account-operateur.service';

@Component({
  selector: 'app-operateur-dialog',
  templateUrl: './operateur-dialog.component.html',
  styleUrls: ['./operateur-dialog.component.css']
})
export class OperateurDialogComponent implements OnInit {

  private operateur:Operateur={
      cin:'',
      nom:'',
      prenom:'',
      datenaissance:'',
      ville:'',
      Tel:'',
      password:'',
      email:'',
};
disabled = false;
constructor(
  public dialogRef: MatDialogRef<OperateurDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Operateur,
  private service:AccountOperateurService, 
  private router:Router
) { }

ngOnInit() {
}

onNoClick(): void {
  this.dialogRef.close();
  this.router.navigateByUrl('/operateurs');
}

onClear(){
  this.service.initializeFormGroup();
  this.service.form.reset();
}

add(){
  
  this.service.addOperateur(this.operateur)
  .subscribe((Operateur)=>{
  });
}


onSubmit()
{
this.operateur = this.service.form.value;
this.service.updateOperateur(this.operateur).subscribe();
 if(this.service.form.valid){
   this.operateur = this.service.form.value;
   if(this.service.form.value.id==null){
     console.log(this.operateur);
     this.add();
     this.service.form.reset();
   } 
   else {
     console.log(this.operateur);
     this.update();
     this.service.form.reset();
   }
   this.service.initializeFormGroup();
 }
this. onNoClick();


}
update(){
this.service.updateOperateur(this.operateur).subscribe();

}

}