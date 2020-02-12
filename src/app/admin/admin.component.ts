import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }


  @ViewChild('drawer', { static: false }) 
  drawer: MatSidenav;

  ngOnInit(): void {
  }
}
