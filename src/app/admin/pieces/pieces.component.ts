import { Component, OnInit } from '@angular/core';
import { PieceService } from 'src/app/services/piece.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSnackBar } from '@angular/material';
import { PieceComponent } from './piece/piece.component';
import { Piece } from 'src/app/Models/Piece';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.css']
})

export class PiecesComponent implements OnInit {
  

  constructor(public dialog: MatDialog,     
              private service:PieceService,
              private route: Router, 
              public notification: MatSnackBar
    ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PieceComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.id = result;
    });
  }

    /////////////
    dataSource = new MatTableDataSource<Piece>();
    displayedColumns: string[] = ['id', 'label', 'siCache','actions'];
  
  
    ngOnInit() {
      this.fetchElements();
    }
  
    fetchElements() {
      this.service.getAll().subscribe(res => {
        if (!res) { return; }
        console.log(res);
        this.dataSource = new MatTableDataSource(res as any);
      });
    }
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
  
    /*onDelete(id){
      if(confirm('Are you sure?')){
        this.delete(id);
      }
    }
  
    delete(id){
      this.service.delete(id).subscribe(()=>{
        this.notification.open('Succes Delete ...');
        this.fetchElements();
      })
    }*/
  
    onEdit(row){
      this.service.populateform(row);
      this.route.navigateByUrl('/add');
    }
  

  
}
