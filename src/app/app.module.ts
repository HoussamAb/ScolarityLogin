import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {IconsModule} from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddAccountComponent } from './admin/add-account/add-account.component';
import { TraiterDemandeComponent } from './admin/traiter-demande/traiter-demande.component';
import { MaterialModule } from './material/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { DemandeService } from './services/demande.service';
import { EtudiantService } from './services/etudiant.service';
import { PieceService } from './services/piece.service';
import { ParametrageRDVComponent } from './admin/parametrage-rdv/parametrage-rdv.component';
import { PieceComponent } from './admin/pieces/piece/piece.component';
import { ListPieceComponent } from './admin/pieces/list-piece/list-piece.component';
import { PiecesComponent } from './admin/pieces/pieces.component';
import { TraiterReclamationNoteComponent } from './admin/traiter-reclamation-note/traiter-reclamation-note.component';
import { TraiterReclamationPedagogiqueComponent } from './admin/traiter-reclamation-pedagogique/traiter-reclamation-pedagogique.component';
import { ValiderAvisComponent } from './admin/valider-avis/valider-avis.component';
import { EtudiantsComponent } from './admin/etudiants/etudiants.component';
import { EtudiantDialogComponent } from './admin/etudiants/etudiant-dialog/etudiant-dialog.component';
import { FilieresComponent } from './admin/filieres/filieres.component';
import { ListFilieresComponent } from './admin/filieres/list-filieres/list-filieres.component';
import { FilieresDialogComponent } from './admin/filieres/filieres-dialog/filieres-dialog.component';
import { OperateursComponent } from './admin/operateurs/operateurs.component';
import { ProfesseursComponent } from './admin/professeurs/professeurs.component';
import { OperateurDialogComponent } from './admin/operateurs/operateur-dialog/operateur-dialog.component';
import { ProfesseurDialogComponent } from './admin/professeurs/professeur-dialog/professeur-dialog.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarComponent } from './main-layout/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddAccountComponent,
    TraiterDemandeComponent,
    PieceComponent,
    ListPieceComponent,
    PiecesComponent,
    ParametrageRDVComponent,
    TraiterReclamationNoteComponent,
    TraiterReclamationPedagogiqueComponent,
    ValiderAvisComponent,
    EtudiantsComponent,
    EtudiantDialogComponent,
    FilieresComponent,
    ListFilieresComponent,
    FilieresDialogComponent,
    OperateursComponent,
    ProfesseursComponent,
    EtudiantDialogComponent, 
    OperateurDialogComponent, 
    ProfesseurDialogComponent, MainLayoutComponent, SidebarComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    IconsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [DemandeService,EtudiantService,PieceService],
  bootstrap: [AppComponent],
  entryComponents: [PieceComponent,
    EtudiantDialogComponent, 
    OperateurDialogComponent, 
    ProfesseurDialogComponent, 
    FilieresDialogComponent]

})
export class AppModule { }
