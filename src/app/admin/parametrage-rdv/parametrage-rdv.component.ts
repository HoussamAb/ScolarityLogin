import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { Piece } from 'src/app/Models/Piece';
import { PieceService } from 'src/app/services/piece.service';
import { Router } from '@angular/router';
import { PieceComponent } from '../pieces/piece/piece.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-parametrage-rdv',
  templateUrl: './parametrage-rdv.component.html',
  styleUrls: ['./parametrage-rdv.component.css']
})
export class ParametrageRDVComponent implements OnInit {

  dataSource = new MatTableDataSource<Piece>();
  displayedColumns: string[] = ['id', 'label', 'siCache','nbr_total','nbr_total_par_jour','nbr_demande_par_jour','date_prochain_rdv'];

  private d: Date;

  public date_rdv="2020-02-15";
  private demandes:  any = [] ;
  private pieces: any=[];

  
  constructor(public dialog: MatDialog,     
    private service:PieceService,
    private route: Router, 
    private Dservice:DemandeService,
    public notification: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef
) {}

  ngOnInit() {
    this.fetchElements();
    //this.GetDate();
    //this.DateRDV();

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  DateRDV(){
    
    var gsDayNames = [
      7,
      1,
      2,
      3,
      4,
      5,
      6
    ];
    
   /* let s=this.d.toDateString;
    let dd = new Date("2020/02/13");

    let str2: string = 'TypeScript';

   // const day1 = this.d.getDay();
    // Sunday - Saturday : 0 - 6
    console.log("Date = " );

    console.log(s);
    let dayName = gsDayNames[dd.getDay()];
    console.log("Date = " + dayName);

    console.log("Date = " + dayName);*/

   /* if(  this.d.getDay()==5){
      this.d.setDate(this.d.getDate() + 3);

    }
    else
      this.d.setDate(this.d.getDate() + 1);*/
    console.log(this.d);
  }
  private piece: Piece = {
    
    label: '',
    nbr_demande_par_jour: 0,
    nbr_total:0,
    nbr_total_par_jour: 0,
    siCache: true,
    date_prochain_rdv:"",
  };

  Nb_jour = new FormGroup({   
    'm-etat': new FormControl(0),
    'nbjour': new FormControl(0,Validators.required),
  });

  public etat =-1;

  cliquer(i): void{
    this.changer(i) ;
  }
  changer(i) : void{
    let id=this.Nb_jour.get('nbjour').value;

    this.etat=i;
  }

  GetDate(label){
    this.Dservice.findDate(false,label).subscribe(
      res=>{
        if(!res) return ;
        this.demandes=res;
        console.log(res);

       //this.d=this.demandes[0].date_prochain_rdv;

        for(let o of this.demandes){
          console.log(o.date_recuperation);
          if (this.d < (o.date)){
            this.d=o.date_recuperation;
          }    
        }
        console.log(this.d);
        
      }
    )
  }

/////////////

fetchElements() {
  this.service.getAll().subscribe(res   => {
    if (!res) { return; }
      console.log(res);
      this.dataSource = new MatTableDataSource(res as any);
      this.changeDetectorRefs.detectChanges();
      this.pieces=res;

      for(let o of this.pieces){
        console.log(o.label);
        this.GetDate(o.label);
      }
      
      
    });
  }

  Update(row){
    let id=this.Nb_jour.get('nbjour').value;
    if (id){
      console.log(id);
      row.nbr_total_par_jour=id;
      console.log(row);

      this.service.updatePiece(row).subscribe();
  
      this.changeDetectorRefs.detectChanges();
      this.etat=-1;

    }
   
    console.log(id);

  }

}
