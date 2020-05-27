import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { Persons } from '../models/persons/persons';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-verpersonas',
  templateUrl: './verpersonas.component.html',
  styleUrls: ['./verpersonas.component.scss']
})

export class VerpersonasComponent implements OnInit {

  public show_load: boolean;
  loading: string = "assets/img/dots.gif";
  allPersons: Array<Persons> = new Array<Persons>();

  constructor(public PrsIny: PersonsService) {
    this.show_load = true;
  }

  ngOnInit(){
    this.PrsIny.readPersons().subscribe((artsDesdeApi)=>{
      this.allPersons = artsDesdeApi['results'];
      console.log(this.allPersons);
    });
    this.show_load = false;
  }

  page_size: number = 6;
  page_number: number = 1;
  pageSizeOptions = [6, 12, 24, 50];

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

}