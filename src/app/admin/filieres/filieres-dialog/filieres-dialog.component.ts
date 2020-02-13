import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Filiere } from 'src/app/Models/Filiere';
import { FilieresService } from 'src/app/services/filieres.service';
import { AccountProfesseurService } from 'src/app/services/account-professeur.service';

@Component({
  selector: 'app-filieres-dialog',
  templateUrl: './filieres-dialog.component.html',
  styleUrls: ['./filieres-dialog.component.css']
})
export class FilieresDialogComponent implements OnInit {

  private filiere:Filiere={
    idFiliere:null,
    typeFiliere:"",
    module:[],
    titre:"",
    departement:"",
    chefdefiliere:"",
  };
  typesF = ['Licence Pro', 'Licence', 'Master Spé', 'Master Rech', 'Doctorat'];
  departements = ['Informatique', 'Mathématique', 'Langues Etrangères Appliquées', 'Littérature Générale et Comparée',
        'Economique', 'Physique', 'Chimie'];
  disabled = false;
  prof: any=[];
  constructor(
    public dialogRef: MatDialogRef<FilieresDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Filiere,
    private service:FilieresService, 
    private router:Router,
    private srviceProf:AccountProfesseurService,
  ) { }

  ngOnInit() {
    this.srviceProf.getAll().subscribe(res => {
      if (!res) { return; }
      console.log(res);
      this.prof = res; 
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/list-filieres');
  }

  onClear(){
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  add(){
    
    this.service.addFilier(this.filiere)
    .subscribe((filiere)=>{
    });
  }

  onSubmit()
 {
  this.filiere = this.service.form.value;
  this.service.updateFilier(this.filiere).subscribe();
   if(this.service.form.valid){
     this.filiere = this.service.form.value;
     if(this.service.form.value.id==null){
       console.log(this.filiere);
       this.add();
       this.service.form.reset();
     } 
     else {
       console.log(this.filiere);
       this.update();
       this.service.form.reset();
     }
     this.service.initializeFormGroup();
     
   }
  this. onNoClick();
  this.router.navigateByUrl('/list-filieres');
 }

 update(){
  this.service.updateFilier(this.filiere).subscribe();
}

}

