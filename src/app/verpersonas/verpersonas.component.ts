import { MensajesService } from './../services/mensajes.service';
import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { Persons } from '../models/persons/persons';
import { PageEvent } from '@angular/material/paginator';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Event } from '@angular/router';
import { User } from 'firebase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { countries, Country } from "typed-countries";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-verpersonas',
  templateUrl: './verpersonas.component.html',
  styleUrls: ['./verpersonas.component.scss']
})

export class VerpersonasComponent implements OnInit {

  fSave: FormGroup;
  show_load: boolean = true;
  allPersons: Array<Persons> = new Array<Persons>();
  usuario: User;
  edades = [];
  paises = countries;
  person: Array<Persons> = new Array<Persons>();
  modal: boolean = false;

  constructor(
    public cForm: FormBuilder, 
    public msjServ: MensajesService,
    public PrsIny: PersonsService, 
    private afAuth: AngularFireAuth, 
    private router: Router, 
    private db: AngularFirestore) {
    
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

    this.fSave = this.cForm.group({
      img: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha_nac: ['', Validators.required],
      celular: ['', Validators.required],
      pais: ['', Validators.required],
      reg_est: ['', Validators.required],
      comuna: ['', Validators.required],
      direccion: ['', Validators.required],
    });

    for (let i = 1; i <= 150; i++) {
      this.edades.push(i);
    }
  }

  abrirModal(c: Array<Persons> = new Array<Persons>()){
    this.person = c;
    this.modal = true;
    this.fSave = this.cForm.group({
      img: [c['picture']['large'], Validators.required],
      nombre: [c['name']['title']+" "+c['name']['first']+" "+c['name']['last'], Validators.required],
      fecha_nac: [c['dob']['date'].slice(0, 10), Validators.required],
      celular: [c['cell'], Validators.required],
      reg_est: [c['location']['state'], Validators.required],
      comuna: [c['location']['city'], Validators.required],
      direccion: [c['location']['street']['name']+", "+c['location']['street']['number'], Validators.required],
    });
  }

  guardarPersona(){
    let edad = (<HTMLSelectElement>document.getElementById('edad')).value;
    let pais = (<HTMLSelectElement>document.getElementById('pais')).value;
    let fields = this.fSave.value;
    fields.edad = edad;
    fields.pais = pais;

    this.db.collection('personas').add(fields)
    .then((user_ok)=>{
      console.log("aers");
      this.msjServ.msjOk("Ingresado correctamente", "El usuario fue ingresado correctamente.");
      setTimeout(()=>{  
        window.location.reload();
      }, 1000);
    })
    .catch((error)=>{
      this.msjServ.msjError("UPS!", "Hubo un problema, intentelo nuevamente.");
    });
  }

  buscarPais(pais: string){
    const pais_usuario: Country = countries.find(c => c.iso === pais);
    return pais_usuario.name;
  }

  page_size: number = 6;
  page_number: number = 1;
  pageSizeOptions = [6, 12, 24, 50];

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

}