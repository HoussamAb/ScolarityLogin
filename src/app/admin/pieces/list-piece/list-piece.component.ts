import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { Piece } from 'src/app/Models/Piece';
import { PieceService } from 'src/app/services/piece.service';
import { Router } from '@angular/router';
import { PieceComponent } from '../piece/piece.component';

@Component({
  selector: 'app-list-piece',
  templateUrl: './list-piece.component.html',
  styleUrls: ['./list-piece.component.css']
})
export class ListPieceComponent implements OnInit {

  constructor(public dialog: MatDialog,     
      private service:PieceService,
      private route: Router, 
      public notification: MatSnackBar,
      private changeDetectorRefs: ChangeDetectorRef
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PieceComponent, {
    width: '500px'
  });

  dialogRef.afterClosed().subscribe(result => {
    this.fetchElements();
    this.changeDetectorRefs.detectChanges();

    });
    this.fetchElements();
    this.changeDetectorRefs.detectChanges();


  }

  /////////////
  dataSource = new MatTableDataSource<Piece>();
  displayedColumns: string[] = ['id', 'label', 'siCache','nbr_total','nbr_total_par_jour','nbr_demande_par_jour','actions'];


  ngOnInit() {
    this.fetchElements();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fetchElements() {
    this.service.getAll().subscribe(res => {
      if (!res) { return; }
      console.log(res);
      this.dataSource = new MatTableDataSource(res as any);
      this.changeDetectorRefs.detectChanges();

    });
  }

 


  onDelete(id){
    if(confirm('Êtes-vous sûr de supprimer cette pièce?')){
      this.delete(id);
    }
  }

  delete(id){
    this.service.deletePiece(id).subscribe(()=>{
      this.notification.open('Pièce supprimée ...','Fermer', {
        duration: 4000,
      });
      this.fetchElements();
    })

  }

  onEdit(row){
    this.service.populateform(row);
    this.openDialog();
  }
}
