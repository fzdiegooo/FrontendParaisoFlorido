import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alumno } from '../../../shared/models/Alumno';
import { AlumnosService } from '../../../core/services/alumnos.service';
import TableComponent from '../../../shared/components/table/table.component';
import { SelectComponent } from "../../../shared/components/select/select.component";

@Component({
  selector: 'app-alumnos-tabla',
  standalone: true,
  imports: [FormsModule, TableComponent, SelectComponent],
  templateUrl: './alumnos-tabla.component.html',
  styleUrl: './alumnos-tabla.component.css'
})
export default class AlumnosTablaComponent implements OnInit {
  title:string = 'Alumnos';
  columnas:string[]=["nombre","apellido","documento","edad","gradoId", "seccion.nombre"]
  alumnos: Alumno[] = [];
  filtroNombre: string = '';
  filtroGrado: string = '';
  filtroSeccion: string = '';

  nombreColumnas = {
    'nombre': 'Nombre',
    'apellido':'Apellido',
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
