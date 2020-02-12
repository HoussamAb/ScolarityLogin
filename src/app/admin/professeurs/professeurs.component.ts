import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Etudiant } from '../../Models/Etudiant';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { filter } from 'minimatch';
import { Professeur } from '../../Models/Professeur';
import { ProfesseurDialogComponent } from 'src/app/admin/professeurs/professeur-dialog/professeur-dialog.component';
import { AccountProfesseurService } from 'src/app/services/account-professeur.service';

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent implements OnInit {

  constructor(
    public dialog: MatDialog,    
    private service:AccountProfesseurService,
    private route: Router, 
    public notification: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef) { }
///////////////////
openDialog(): void {
  const dialogRef = this.dialog.open(ProfesseurDialogComponent, {
  width: '500px'
});

dialogRef.afterClosed().subscribe(result => {
  this.fetchElements();
  });
  this.fetchElements();

}
  /////////////////////////:
  private dataSource: any=[];
  professeur:Professeur;
  //displayedColumns: string[] = ['id','nom', 'apogee', 'cin', 'prenom', 'datenaissance', 'ville', 'idFiliere', 'Tel', 'siValide', 'password', 'image', 'email', 'semestre', 'noteModule'];
  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.service.getAll().subscribe(res => {
      if (!res) { return; }
      console.log(res);
      this.dataSource = res;
      //this.changeDetectorRefs.detectChanges();

    });
  }

  onDelete(id){
    if(confirm('Êtes-vous sûr de supprimer ce Professeur?')){
      this.delete(id);
    }
  }
  
  delete(id){
    this.service.deleteProfesseur(id).subscribe(()=>{
      this.notification.open('Professeur supprimé ...','Fermer', {
        duration: 4000,
      });
      this.fetchElements();
    })
  
  }
  onEdit(row){
    this.service.populateform(row);
    this.openDialog();
    this.fetchElements();
  }
}
