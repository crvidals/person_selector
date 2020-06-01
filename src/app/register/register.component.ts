import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  registrarUsuario(){
    console.log("Entró");
    if (this.f_login.valid) {
      this.datosOk = true;
      this.e_mail = this.f_login.value.email;
      this.pass_w = this.f_login.value.password;
      console.log("e_mail" + this.e_mail);
      console.log("pass_w" + this.pass_w);
      this.afAuth.createUserWithEmailAndPassword(this.e_mail, this.pass_w)
      .then((usuario)=>{
        this.router.navigateByUrl('/persons/agregarpersona');
      })
      .catch((error)=>{
        console.log("Error = " + error.message);
        this.datosOk = false;
        this.error_log = error.message;
      });  
    }else{
      this.datosOk = false;
      this.error_log = "Por favor comprueba que los datos sean correctos.";
    }
  }

}
