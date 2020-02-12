import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TraiterDemandeComponent } from './admin/traiter-demande/traiter-demande.component';
import { ParametrageRDVComponent } from './admin/parametrage-rdv/parametrage-rdv.component';
import { PiecesComponent } from './admin/pieces/pieces.component';
import { TraiterReclamationNoteComponent } from './admin/traiter-reclamation-note/traiter-reclamation-note.component';
import { TraiterReclamationPedagogiqueComponent } from './admin/traiter-reclamation-pedagogique/traiter-reclamation-pedagogique.component';
import { ValiderAvisComponent } from './admin/valider-avis/valider-avis.component';

import { AddAccountComponent } from './admin/add-account/add-account.component';
import { EtudiantsComponent } from './admin/etudiants/etudiants.component';
import { OperateursComponent } from './admin/operateurs/operateurs.component';
import { ProfesseursComponent } from './admin/professeurs/professeurs.component';
import { FilieresComponent } from './admin/filieres/filieres.component';
import { ListFilieresComponent } from './admin/filieres/list-filieres/list-filieres.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'admin', component:AdminComponent},
  {path:'traiterDemande', component:TraiterDemandeComponent},
  {path:'piece', component:PiecesComponent},
  {path:'RDV', component:ParametrageRDVComponent},
  {path:'reclamationNote', component:TraiterReclamationNoteComponent},
  {path:'reclamation', component:TraiterReclamationPedagogiqueComponent},
  {path:'avis', component:ValiderAvisComponent},

  {path:'addaccount', component:AddAccountComponent},
  {path:'etudiants', component:EtudiantsComponent},
  {path:'operateurs', component:OperateursComponent},
  {path:'professeurs', component:ProfesseursComponent},
  {path:'filieres', component:FilieresComponent},
  {path:'list-filieres', component:ListFilieresComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
