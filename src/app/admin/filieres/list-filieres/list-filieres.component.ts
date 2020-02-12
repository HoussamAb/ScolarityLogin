import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Module } from '../../../Models/Module';
import { FilieresDialogComponent } from '../filieres-dialog/filieres-dialog.component';
import { FilieresService } from 'src/app/services/filieres.service';

@Component({
  selector: 'app-list-filieres',
  templateUrl: './list-filieres.component.html',
  styleUrls: ['./list-filieres.component.css']
})
export class ListFilieresComponent implements OnInit {

  constructor(
    public dialog: MatDialog,    
    private service:FilieresService,
    private route: Router, 
    public notification: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}
//////////////::::::
openDialog(): void {
const dialogRef = this.dialog.open(FilieresDialogComponent, {
width: '1000px'
});

dialogRef.afterClosed().subscribe(result => {
this.fetchElements();
});
this.fetchElements();

}
//////////:
private dataSource: any=[];

dataModules = new MatTableDataSource<Module>();
displayedColumns: string[] = ['idModule', 'titre', "idfiliere", "Chargehoraire", "idprof","anneValidation", "session"];
//displayedColumns: string[] = ['id','nom', 'apogee', 'cin', 'prenom', 'datenaissance', 'ville', 'idFiliere', 'Tel', 'siValide', 'password', 'image', 'email', 'semestre', 'noteModule'];
ngOnInit() {
this.fetchElements();
}

fetchElements() {
this.service.getAll().subscribe(res => {
if (!res) { return; }
console.log(res);
this.dataSource = res;
//this.dataModules = new MatTableDataSource(res.module as any);
//this.changeDetectorRefs.detectChanges();


});
}

showModule(event, idF){
/*if(event == 1){
  this.service.getModules(idF).subscribe(res => {
    if (!res) { return; } 
    console.log(res);
  //this.dataModules = res;
  });
}
console.log(event);
console.log("idF :::: "+event);
console.log(this.dataModules);*/
}

delete(id){
this.service.deleteFilier(id).subscribe(()=>{
  this.notification.open('Filiere supprimé ...','Fermer', {
    duration: 4000,
  });
  this.fetchElements();
})
}

onDelete(id){
  if(confirm('Êtes-vous sûr de supprimer cette filiere?')){
    this.delete(id);
  }
}

onEdit(row){
  this.service.populateform(row);
  this.openDialog();
  this.fetchElements();
  
}

}
