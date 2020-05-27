import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persons } from '../models/persons/persons';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  ruta: string = "https://randomuser.me/api/?results=50";

  constructor(public http: HttpClient) { }

  readPersons(): Observable<Persons[]>{
    return this.http.get<Persons[]>(this.ruta);
  }

}
