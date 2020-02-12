import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/Models/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-traiter-reclamation-note',
  templateUrl: './traiter-reclamation-note.component.html',
  styleUrls: ['./traiter-reclamation-note.component.css']
})
export class TraiterReclamationNoteComponent implements OnInit {

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
      this.IdEtudiants="";
      this.service.findReclamation("note",false).subscribe(
      res=>{
      if(!res) return ;
      this.reclamations=res;
      for(let o of this.reclamations){
        if (!this.IdEtudiants.includes(o.etudiant)){
          this.IdEtudiants+="id="+o.etudiant+"&";
        }    
      }
      this.IdEtudiants = this.IdEtudiants.slice(0, -1);
      this.getInfosEtudiant(this.IdEtudiants);
        
      console.log(this.reclamations);
      
    });
    }
  

  getInfosEtudiant(id:any){  
    let merged = [];
      this.Etdservice.getEtudiant(id).subscribe(
        res=>{
          if(!res) return ;
          console.log(res)
          this.etudiants=res;
        });
  }
}
