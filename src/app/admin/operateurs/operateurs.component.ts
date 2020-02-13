import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Etudiant } from '../../Models/Etudiant';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { filter } from 'minimatch';
import { Operateur } from '../../Models/operateur';
import { OperateurDialogComponent } from './operateur-dialog/operateur-dialog.component';
import { AccountOperateurService } from 'src/app/services/account-operateur.service';

@Component({
  selector: 'app-operateurs',
  templateUrl: './operateurs.component.html',
  styleUrls: ['./operateurs.component.css']
})
export class OperateursComponent implements OnInit {

  constructor(
    public dialog: MatDialog,    
    private service:AccountOperateurService,
    private route: Router, 
    public notification: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef) { }

    ////////////::::::::
    openDialog(): void {
      const dialogRef = this.dialog.open(OperateurDialogComponent, {
      width: '500px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.fetchElements();
      });
      this.fetchElements();
    
    }
    
  /////////////////////////:
  private dataSource: any=[];
  operateur:Operateur;
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
    if(confirm('Êtes-vous sûr de supprimer cette pièce?')){
      this.delete(id);
    }
  }
  
  delete(id){
    this.service.deleteOperateur(id).subscribe(()=>{
      this.notification.open('Etudiant supprimé ...','Fermer', {
        duration: 4000,
      });
      this.fetchElements();
      this.route.navigateByUrl('/operateurs');
    })
  
  }
  
  onEdit(row){
    this.service.populateform(row);
    this.openDialog();
    this.fetchElements();
  }
  

}
