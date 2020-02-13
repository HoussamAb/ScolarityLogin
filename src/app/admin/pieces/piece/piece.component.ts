import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, ThemePalette } from '@angular/material';
import { Demande } from 'src/app/Models/Demande';
import { PieceService } from 'src/app/services/piece.service';
import { Router } from '@angular/router';
import { Piece } from 'src/app/Models/Piece';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  checked = false;
  disabled = false;
  constructor(
    public dialogRef: MatDialogRef<PieceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Piece,
    private service:PieceService, 
    private router:Router) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/piece');

  }

  ngOnInit() {
  }

  private piece: Piece = {
    
    label: '',
    nbr_demande_par_jour: 0,
    nbr_total:0,
    nbr_total_par_jour: 0,
    siCache: true,
    date_prochain_rdv: "", 
  };

  onClear(){
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  add(){
    this.service.addPiece(this.piece)
    .subscribe((piece)=>{
    });
  }


 onSubmit()
 {

   if(this.service.form.valid){
     this.piece = this.service.form.value;
     if(this.service.form.value.id==null){
       console.log(this.piece);
       this.add();
       this.service.form.reset();
     } 
     else {

       console.log(this.piece);
       this.update();
       this.service.form.reset();
     }
     this.service.initializeFormGroup();
   }
  this. onNoClick();
  this.router.navigateByUrl('/piece');


 }
 update(){
  this.service.updatePiece(this.piece).subscribe();
  this.router.navigateByUrl('/piece');

}
 
}
