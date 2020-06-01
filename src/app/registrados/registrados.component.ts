import { Component, OnInit } from '@angular/core';
import { ColPersonas } from '../models/collections/ColPersonas';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-registrados',
  templateUrl: './registrados.component.html',
  styleUrls: ['./registrados.component.scss']
})
export class RegistradosComponent implements OnInit {
  p: number = 1;
  personas: Array<ColPersonas> = new Array<ColPersonas>();
  usuario: User;

  constructor(
    public msjServ: MensajesService,
    private db: AngularFirestore, 
    private afAuth: AngularFireAuth, 
    private router: Router) {
    this.afAuth.user.subscribe((usuario)=>{
      this.usuario = usuario;
      if (!this.usuario) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  ngOnInit(){
    this.db.collection<any>('personas').get().subscribe((res)=>{
      this.personas.length = 0;
      res.docs.forEach((item)=>{
        let pers: any = item.data();
        pers.id = item.id;
        pers.ref = item.ref;
        this.personas.push(pers);
      });
    });
  }

  eliminarPersona(id: string){
    let re_load: boolean = true;
    this.db.doc('personas/' + id).delete().then((res)=>{
      this.msjServ.msjDelete("Atención", "Está a punto de eliminar un registro. Este proceso es irreversible.", re_load);
    })
    .catch((err)=>{
      this.msjServ.msjError("UPS!", "Ocurrió un problema. Intentelo nuevamente.");
    });
  }

}
