import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alumno } from '../../../shared/models/Alumno';
import { AlumnosService } from '../../../core/services/alumnos.service';
import TableComponent from '../../../shared/components/table/table.component';

@Component({
  selector: 'app-alumnos-tabla',
  standalone: true,
  imports: [FormsModule,TableComponent],
  templateUrl: './alumnos-tabla.component.html',
  styleUrl: './alumnos-tabla.component.css'
})
export default class AlumnosTablaComponent implements OnInit {
  title:string = 'Alumnos';
  columnas:string[]=["id","nombre","gradoId", "seccion.nombre"]
  alumnos: Alumno[] = [];
  filtroNombre: string = '';
  filtroGrado: string = '';
  filtroSeccion: string = '';

  nombreColumnas = {
    'id': 'Id',
    'nombre': 'Nombre Completo',
    'gradoId': 'Grado',
    'edad': 'Edad',
    'grado.nombre': 'Grado',
    'seccion.nombre': 'Sección'
  };

  constructor(private alumnoService: AlumnosService) { }

  ngOnInit(): void {
    // Cargar todos los alumnos al iniciar
    this.obtenerAlumnos();
  }

  // Método para obtener alumnos con filtro
  obtenerAlumnos(): void {
    this.alumnoService.getAlumnos(this.filtroGrado, this.filtroSeccion).subscribe(
      (data) => {
        this.alumnos = data;
      },
      (error) => {
        console.error('Error al obtener alumnos:', error);
      }
    );
  }

  // Método para aplicar el filtro
  aplicarFiltro(): void {
    this.obtenerAlumnos();
  }
}
