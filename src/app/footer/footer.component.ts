import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  usuario: User;

  constructor(private afAuth: AngularFireAuth) { 
    this.afAuth.user.subscribe((usuario)=>{
      this.usuario = usuario;
    });
  }
  ngOnInit(){
  }

}
