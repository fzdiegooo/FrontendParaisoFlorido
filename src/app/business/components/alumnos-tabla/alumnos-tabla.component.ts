import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alumno } from '../../../shared/models/Alumno';
import { AlumnosService } from '../../../core/services/alumnos.service';
import TableComponent from '../../../shared/components/table/table.component';
import { SelectComponent } from "../../../shared/components/select/select.component";
import TableActionComponent from "../../../shared/components/table-action/table-action.component";
import { Accion } from '../../../shared/models/Tabla';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-tabla',
  standalone: true,
  imports: [FormsModule, TableComponent, SelectComponent, TableActionComponent],
  templateUrl: './alumnos-tabla.component.html',
  styleUrl: './alumnos-tabla.component.css'
})
export default class AlumnosTablaComponent implements OnInit {
  title:string = 'Lista de alumnos';
  columnas:string[]=["nombre","apellido","documento","edad","gradoId", "seccion.nombre",]
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
  idAlumno: string ="";


  constructor(private alumnoService: AlumnosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

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

  aplicarFiltro(): void {
    this.obtenerAlumnos();
  }

  onAction(accion: Accion) {
    if (accion.accion == 'Editar') {
     this.editar(accion.fila)
   } else if (accion.accion == 'Eliminar') {
     this.eliminar(accion.fila)
   }
 }

  editar(objeto:any){
    this.idAlumno = objeto.id
    this.router.navigate(["/dashboard/lista-alumnos",this.idAlumno]);
  }

  eliminar(objeto:any){
    console.log("eliminar",objeto)
  }
}
