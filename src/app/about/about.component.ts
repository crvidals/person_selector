import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  usuario: User;
  
  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.afAuth.user.subscribe((usuario)=>{
      this.usuario = usuario;
      if (!this.usuario) {
        this.router.navigateByUrl('/login');
      }
    });
  }

  ngOnInit(): void {
  }

}
