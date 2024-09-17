import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asistencia } from '../../shared/models/Asistencia';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private url= "http://localhost:3000/api/asistencia"
  constructor(private http: HttpClient) { }

  getAsistencias(){
    return this.http.get<Asistencia[]>(this.url)
  }

  registrarAsistencia(id: string){
    return this.http.post<any>(this.url,{id})
  }



}
