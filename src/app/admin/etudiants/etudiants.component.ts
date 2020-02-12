import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Etudiant } from '../../Models/Etudiant';
import { Router } from '@angular/router';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { EtudiantDialogComponent } from './etudiant-dialog/etudiant-dialog.component';
import { filter } from 'minimatch';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  constructor( 
    public dialog: MatDialog,    
    private service:AccountService,
    private route: Router, 
    public notification: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef
) {}

openDialog(): void {
  const dialogRef = this.dialog.open(EtudiantDialogComponent, {
  width: '500px'
});

dialogRef.afterClosed().subscribe(result => {
  this.fetchElements();
  });
  this.fetchElements();

}

/////////////
private dataSource: any=[];
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
etudiant:Etudiant;
applyFilter(filterValue: string) {
  //this.dataSource.filter = filterValue.trim().toLowerCase();
  /*if(!filterValue){
    this.fetchElements();
    console.log(this.dataSource);
    console.log(filter+" 111111");
  }else if(filterValue.trim().toLowerCase() != "" || filterValue.trim().toLowerCase() != null){
    this.fetchElements();
    this.dataSource = this.dataSource.filter(etudiant => etudiant.nom === filterValue.trim().toLowerCase());
    console.log(this.dataSource);
    console.log(filter +" 2222");
  }*/
  this.dataSource.filter = filterValue.trim().toLowerCase();
  this.dataSource = this.dataSource.filter;
}


onDelete(id){
  if(confirm('Êtes-vous sûr de supprimer cette pièce?')){
    this.delete(id);
  }
}

delete(id){
  this.service.deleteEtudiant(id).subscribe(()=>{
    this.notification.open('Etudiant supprimé ...','Fermer', {
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
