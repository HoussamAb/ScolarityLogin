import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-traiter-reclamation-pedagogique',
  templateUrl: './traiter-reclamation-pedagogique.component.html',
  styleUrls: ['./traiter-reclamation-pedagogique.component.css']
})
export class TraiterReclamationPedagogiqueComponent implements OnInit {

      constructor(private service:ReclamationService,
        private Etdservice: EtudiantService,
        public notification: MatSnackBar,

    ) { }

    private reclamations:  any = [] ;
    private IdEtudiants:  any = [] ;
    private etudiants:  any = [] ;

    ngOnInit() {
    this.fetchReclamations();
    }

    Valider(recl):void {

      recl.siValide=true;
      this.service.ValiderReclamation(recl).subscribe(()=>{
         this.notification.open('Réclamation Validé ...','Fermer', {
          duration: 4000,
        });
        this.fetchReclamations();
      })
      
    }


    fetchReclamations(){
      this.IdEtudiants ="";
      this.service.findReclamation("pedagogique",false).subscribe(
      res=>{
      if(!res) return ;
      this.reclamations=res;
      for(let o of this.reclamations){
      if (!this.IdEtudiants.includes(o.etudiant)){
      this.IdEtudiants+="id="+o.etudiant+"&";
      }    
    }
    this.IdEtudiants = this.IdEtudiants.slice(0, -1);
    console.log(this.IdEtudiants);

    this.getInfosEtudiant(this.IdEtudiants);
    });
    }


    getInfosEtudiant(id:any){  
      this.Etdservice.getEtudiant(id).subscribe(
      res=>{
      if(!res) return ;
      console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrr")
      console.log(res)
      this.etudiants=res;
      });
}

}
