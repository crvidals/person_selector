import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  msjOk(titulo: string, msj: string){
    Swal.fire({
      title: titulo,
      text: msj,
      icon: "success"
    });
  }

  msjAlert(titulo: string, msj: string){
    Swal.fire({
      title: titulo,
      text: msj,
      icon: "warning"
    });
  }

  msjError(titulo: string, msj: string){
    Swal.fire({
      title: titulo,
      text: msj,
      icon: "error",
      confirmButtonText: "Volver a intentar"
    });
  }

  msjDelete(titulo: string, msj: string, re_load: boolean){
    Swal.fire({
      title: titulo,
      text: msj,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No, no estoy seguro.',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, continuar.'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Registro Eliminado',
          'El registro fue eliminado correctamente.'
        )
        if (re_load) {
          setTimeout(()=>{
            window.location.reload();
          }, 1000);
        }
      }
    })
  }

}
