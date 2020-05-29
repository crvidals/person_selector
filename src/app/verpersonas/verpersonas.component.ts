import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { Persons } from '../models/persons/persons';
import { PageEvent } from '@angular/material/paginator';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Component({
  selector: 'app-verpersonas',
  templateUrl: './verpersonas.component.html',
  styleUrls: ['./verpersonas.component.scss']
})

export class VerpersonasComponent implements OnInit {

  public show_load: boolean = true;
  allPersons: Array<Persons> = new Array<Persons>();
  usuario: User;

  constructor(public PrsIny: PersonsService, private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.user.subscribe((usuario)=>{
      this.usuario = usuario;
      if (!this.usuario) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  ngOnInit(){
    this.PrsIny.readPersons().subscribe((artsDesdeApi)=>{
      this.allPersons = artsDesdeApi['results'];
      this.show_load = false;
    });
  }

  page_size: number = 6;
  page_number: number = 1;
  pageSizeOptions = [6, 12, 24, 50];

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

}