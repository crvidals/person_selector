import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { countries } from 'typed-countries';
import Swal from "sweetalert2";
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  per_array = {};
  paises = countries;
  edades = [];
  fEdit: FormGroup;
  usuario: User;
  per: any;
  idPersona: string = this.actRoute.snapshot.params.id;

  constructor(
    public msjServ: MensajesService,
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

    this.fEdit = this.cForm.group({
      nombre: ["", Validators.required],
      fecha_nac: ["", Validators.required],
      celular: ["", Validators.required],
      reg_est: ["", Validators.required],
      comuna: ["", Validators.required],
      edad: ["", Validators.required],
      pais: ["", Validators.required],
      img: ["", Validators.required],
      direccion: ["", Validators.required]
    });

    this.per = this.db.doc<any>('personas/' + this.idPersona).valueChanges().subscribe((prsns)=>{

      this.per_array = {img: prsns.img, pais: prsns.pais, edad: prsns.edad};

      this.fEdit.setValue({
        nombre: prsns.nombre,
        fecha_nac: prsns.fecha_nac,
        celular: prsns.celular,
        reg_est: prsns.reg_est,
        comuna: prsns.comuna,
        direccion: prsns.direccion,
        img: this.per_array['img'],
        pais: this.per_array['pais'],
        edad: this.per_array['edad']
      });
    });

    for (let i = 1; i <= 150; i++) {
      this.edades.push(i);
    }
  }

  editarPersona(){
    let edad = (<HTMLSelectElement>document.getElementById('edad')).value;
    let pais = (<HTMLSelectElement>document.getElementById('pais')).value;
    let fields = this.fEdit.value;
    fields.edad = edad;
    fields.pais = pais;
    this.db.doc('personas/' + this.idPersona).update(fields).then((res)=>{
      this.msjServ.msjOk("Editado correctamente", "El usuario fue editado correctamente.");
      window.location.reload();
    })
    .catch((err)=>{
      this.msjServ.msjError("UPS!", "Hubo un problema con la edición. Intentelo nuevamente.");
    });
  }

}
