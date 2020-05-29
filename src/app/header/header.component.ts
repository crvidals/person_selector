import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario: User;

  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.afAuth.user.subscribe((usuario)=>{
      this.usuario = usuario;
    });
  }

  ngOnInit(){}

  logOut(){
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }

}
