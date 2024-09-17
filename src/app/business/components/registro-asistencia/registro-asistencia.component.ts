import { Component, OnDestroy, OnInit } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { AsistenciaService } from '../../../core/services/asistencia.service';

@Component({
  selector: 'app-registro-asistencia',
  standalone: true,
  imports: [],
  templateUrl: './registro-asistencia.component.html',
  styleUrl: './registro-asistencia.component.css'
})
export class RegistroAsistenciaComponent implements OnInit, OnDestroy  {
  html5QrCodeScanner: Html5QrcodeScanner | null = null;
  
  constructor(private asistenciaService: AsistenciaService){}

  ngOnInit(): void {
    // Inicializa el escáner QR en el inicio del componente
    this.html5QrCodeScanner = new Html5QrcodeScanner(
      "reader", 
      { fps: 10, qrbox: 250 }, 
      /* verbose= */ false
    );

    this.html5QrCodeScanner.render(
      this.onScanSuccess.bind(this), 
      this.onScanFailure.bind(this)
    );
  }

  ngOnDestroy(): void {
    // Detener el escaneo al destruir el componente
    if (this.html5QrCodeScanner) {
      this.html5QrCodeScanner.clear().catch(error => console.error(error));
    }
  }

  onScanSuccess(decodedText: string, decodedResult: any) {
    this.registrarAsistencia(decodedText);
    console.log(`Código QR detectado: ${decodedText}`);
    // Puedes manejar el resultado aquí
    // Por ejemplo, si deseas detener el escáner después de la primera detección:
    
  }

  onScanFailure(error: any) {
    // Se ejecuta si la detección falla o no encuentra un QR
    console.log(`Escaneo fallido: ${error}`);
  }

  registrarAsistencia(id: string){
    this.asistenciaService.registrarAsistencia(id).subscribe(
      {
        next:(response)=>{
          console.log("Asistencia registrada con exito: ", response);
          
        },
        error:(error)=>{
          console.log("Error: ",error);
          
        }

      }
    )
  }

}
