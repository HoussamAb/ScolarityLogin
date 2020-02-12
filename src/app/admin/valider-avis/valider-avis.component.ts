import { Component, OnInit } from '@angular/core';
import { AvisService } from 'src/app/services/avis.service';
import { ProfesseurService } from 'src/app/services/professeur.service';
import { Professeur } from 'src/app/Models/Professeur';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-valider-avis',
    templateUrl: './valider-avis.component.html',
    styleUrls: ['./valider-avis.component.css']
  })
export class ValiderAvisComponent implements OnInit {

    constructor(private service:AvisService,
      private Profservice:ProfesseurService,
      public notification: MatSnackBar,
 
  ) { }

  private avis:  any = [] ;
  private IdProfs:  any = [] ;

  private professeurs:  any = [] ;

  ngOnInit() {
  this.fetchAvis();
  }

  Valider(avis):void {

    avis.siValide=true;
    this.service.ValiderAvis(avis).subscribe(()=>{
       this.notification.open('Avis Validé ...','Fermer', {
        duration: 4000,
      });
      this.fetchAvis();
    })
    
  }
  fetchAvis(){
      this.IdProfs ="";

      this.service.getdALL(false).subscribe(
      res=>{
      if(!res) return ;
      this.avis=res;
      for(let o of this.avis){
      if (!this.IdProfs.includes(o.idprof)){
      this.IdProfs+="id="+o.idprof+"&";
      }    
    }
    this.IdProfs = this.IdProfs.slice(0, -1);
    this.getInfosProf(this.IdProfs);

    console.log(this.avis);

    });
    }


  getInfosProf(id:any){  
    this.Profservice.getProf(id).subscribe(
    res=>{
    if(!res) return ;
    console.log(res)
    this.professeurs=res;
    });
  }
}
