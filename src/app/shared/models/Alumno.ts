interface Grado {
  nombre: string;
}

interface Seccion {
  nombre: string;
}

export interface Alumno {
  id: string;
  nombre: string;
  documento: string;
  sexo: string; 
  edad: number;
  correo: string | null;
  password: string | null;
  gradoId: number;
  seccionId: number;
  RolId: number;
  grado: Grado;
  seccion: Seccion;
}
