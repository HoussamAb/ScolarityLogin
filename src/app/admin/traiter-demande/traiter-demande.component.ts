import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'src/app/services/demande.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/Models/Etudiant';
import { PieceService } from 'src/app/services/piece.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-traiter-demande',
  templateUrl: './traiter-demande.component.html',
  styleUrls: ['./traiter-demande.component.css']
})
export class TraiterDemandeComponent implements OnInit {

  constructor(private Dservice:DemandeService,
              private Etdservice: EtudiantService,
              private PService:PieceService,
              public notification: MatSnackBar,

              ) { }

  private demandesG:  any= [] ;
  private demandes:  any = [] ;
  private id_etudiants: number[]=[];
  private etudiants:  any = [] ;
  private xx:  any = [] ;
  private pieces:  any = [] ;

  private IdEtudiants:  any = [] ;

    ngOnInit() {
      this.fetchDemandes();
    }
  
    Valider(demande):void {
      console.log(demande);

      demande.siValide=true;
      this.Dservice.ValiderDemande(demande).subscribe(()=>{
         this.notification.open('Demande Validé ...','Fermer', {
          duration: 4000,
        });
        this.fetchDemandes();
      })
  }

    fetchDemandes(){
      this.IdEtudiants="";
      this.Dservice.findALL(false).subscribe(
        res=>{
          if(!res) return ;
          this.demandes=res;
          for(let o of this.demandes){
            if (!this.IdEtudiants.includes(o.idEtudiant)){
              this.IdEtudiants+="id="+o.idEtudiant+"&";
            }    
          }
          this.IdEtudiants = this.IdEtudiants.slice(0, -1);
          this.getInfosEtudiant(this.IdEtudiants);
            
          console.log(this.demandes);
          
        }
      )
    }

    getInfosEtudiant(id:any){  
      let merged = [];
        this.Etdservice.getEtudiant(id).subscribe(
          res=>{
            if(!res) return ;
            console.log(res)
            this.etudiants=res;
            /*for(let i=0; i< res.length; i++){

              this.demandesG.push(res[i]);
              console.log("//////////////")

              console.log(this.demandesG[i].id)
              console.log("//////////////")
              let id=this.demandesG[i].id;
              for(let j=0; j< this.demandes.length; j++){
                console.log("second     ")

                if(this.demandes[j].idEtudiant == id){
                  
                  /*this.etudiants=this.demandes[j]+res[i];
                  var finalObj = this.demandesG.concat(this.demandes[j]);*/
                  
                  //console.log("******hgfddddd dd*****")
                  
                  /*merged.push({
                    ...res[i], 
                    ...(this.demandes[j])}
                   );*/
                   /*merged.push(
                    (this.demandesG[i])
                   );
                   this.etudiants=this.demandes[j];

                   this.xx.push(this.etudiants)

                }
              }*/

            }
          
        )


     }

}
