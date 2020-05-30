import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { countries } from 'typed-countries';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  paises = countries;
  edades = [];
  fEdit: FormGroup;
  usuario: User;
  per: any;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(
    public cForm: FormBuilder, 
    private db: AngularFirestore, 
    private afAuth: AngularFireAuth,
    private actRoute: ActivatedRoute, 
    private router: Router) {
    this.afAuth.user.subscribe((usuario)=>{
      this.usuario = usuario;
      if (!this.usuario) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  ngOnInit(){
    let idPersona = this.actRoute.snapshot.params.id;

    this.fEdit = this.cForm.group({
      img: ["", Validators.required],
      nombre: ["", Validators.required],
      fecha_nac: ["", Validators.required],
      celular: ["", Validators.required],
      reg_est: ["", Validators.required],
      comuna: ["", Validators.required],
      direccion: ["", Validators.required]
    });

    this.per = this.db.doc<any>('personas/' + idPersona).valueChanges().subscribe((prsns)=>{
      this.fEdit.setValue({
        nombre: prsns.nombre,
        fecha_nac: prsns.fecha_nac,
        celular: prsns.celular,
        reg_est: prsns.reg_est,
        comuna: prsns.comuna,
        direccion: prsns.direccion
      });
    });

    for (let i = 1; i <= 150; i++) {
      this.edades.push(i);
    }
  }

  editarPersona(){

  }

}
