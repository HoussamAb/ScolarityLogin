import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EtudiantService } from '../Service/etudiant.service';
import { MenuItems } from 'src/app/Models/MenuItems';
import {MatDialog} from '@angular/material/dialog';
import { DemandePieceComponent } from '../demande-piece/demande-piece.component';
import { Demande } from 'src/app/Models/Demande';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit{
  
  ngOnInit(){
    this.createMenu();
  }
 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    menu : MenuItems[]=[]
    liste : Map<String, MenuItems[]> = new Map<String, MenuItems[]>();
    inote : boolean=false
    ipeda : boolean=false
    idemande: boolean=false
    ireclamation: boolean=false
    ihome : boolean =true


  constructor(private breakpointObserver: BreakpointObserver, private service : EtudiantService,
    public dialog: MatDialog ) {
      
  }
  createMenu(){
    this.service.findAllitems().subscribe(value => 
      {
        this.menu = value
        let items : MenuItems[]=[];
    this.menu.forEach(element => {
      if (this.liste.get(element.categorie)==null){
          if (!element.cachee){
          items.push(element)
          this.liste.set(element.categorie,items);
          items=[];}
      }
      else {
        if (!element.cachee){
        items = this.liste.get(element.categorie)
        items.push(element);
        this.liste.set(element.categorie,items)
        items=[]}
      }
    });
  });

  }
  home(){
      this.ipeda=false
      this.inote=false
      this.idemande=false
      this.ireclamation=false
      this.ihome=true
  }
  action(i:MenuItems ){
    if(i.titre =="demander pièces"){

    const dialogRef = this.dialog.open(DemandePieceComponent, {
      width: '500px',
      height:'350px'  
    });
    }
    if (i.titre == "Réclamation Note"){
      this.ipeda=false
      this.ihome=false
      this.inote=true
      this.idemande=false
      this.ireclamation=false
    }
    if (i.titre == "Réclamation Pédagogique"){
      this.inote=false
      this.ihome=false
      this.ipeda=true
      this.idemande=false
      this.ireclamation=false
    }
    if (i.titre == "Mes demandes"){
      this.inote=false
      this.ihome=false
      this.ipeda=false
      this.idemande=true
      this.ireclamation=false
         }
    if (i.titre =="Mes Réclamations"){
      this.inote=false
      this.ihome=false
      this.ipeda=false
      this.idemande=false
      this.ireclamation=true
    }
  }
  }


