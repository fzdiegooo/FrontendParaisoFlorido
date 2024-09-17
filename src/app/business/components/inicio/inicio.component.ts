import { Component, OnInit } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
