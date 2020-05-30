import { Component, OnInit } from '@angular/core';
import { ColPersonas } from '../models/collections/ColPersonas';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Component({
  selector: 'app-registrados',
  templateUrl: './registrados.component.html',
  styleUrls: ['./registrados.component.scss']
})
export class RegistradosComponent implements OnInit {
  p: number = 1;
  personas: Array<ColPersonas> = new Array<ColPersonas>();
  usuario: User;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
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

  }

}
