import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../../shared/models/Alumno';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private url = environment.apiUrl+'/api/alumnos'
  constructor(private httpClient: HttpClient) { }

  getAlumnos(filtroGrado: string='',filtroSeccion: string=''):Observable<Alumno[]>{
    let params: any = {};
    
    if (filtroGrado) params.grado = filtroGrado;
    if (filtroSeccion) params.seccion = filtroSeccion;

    return this.httpClient.get<Alumno[]>(this.url,{params})
  }
}
