import { EditUsersComponent } from './../../../../holaMundo/src/app/usuarios/edit-users/edit-users.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  f_login: FormGroup;
  e_mail: string = "";
  pass_w: string = "";
  error_log: string = "";
  datosOk: boolean = true;

  constructor(public cForm: FormBuilder, private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(){
    this.f_login = this.cForm.group({
      email:['',Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.f_login.valid) {
      this.datosOk = true;
      this.e_mail = this.f_login.value.email;
      this.pass_w = this.f_login.value.password;
      this.afAuth.signInWithEmailAndPassword(this.e_mail, this.pass_w)
      .then((usuario)=>{
        this.router.navigateByUrl('/persons');
      })
      .catch((error)=>{
        this.datosOk = false;
        this.error_log = error.message;
      });      
    }else{
      this.datosOk = false;
      this.error_log = "Por favor comprueba que los datos sean correctos.";
    }
  }
  
  logout() {
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }

}
