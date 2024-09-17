import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../../shared/models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private url = 'http://localhost:3000/api/alumnos'
  constructor(private httpClient: HttpClient) { }

  getAlumnos(filtroGrado: string='',filtroSeccion: string=''):Observable<Alumno[]>{
    let params: any = {};
    
    if (filtroGrado) params.grado = filtroGrado;
    if (filtroSeccion) params.seccion = filtroSeccion;

    return this.httpClient.get<Alumno[]>(this.url,{params})
  }
}
