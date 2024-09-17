import { Component } from '@angular/core';
import AlumnosTablaComponent from "../alumnos-tabla/alumnos-tabla.component";
import { RegistroAsistenciaComponent } from "../registro-asistencia/registro-asistencia.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AlumnosTablaComponent, RegistroAsistenciaComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}
