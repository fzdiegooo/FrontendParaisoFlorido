import { Component, OnInit } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { initFlowbite } from 'flowbite';
import CardIconComponent from "../../../shared/components/card-icon/card-icon.component";
import MisionVisionComponent from './mision-vision/mision-vision.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CarruselComponent, CardIconComponent, MisionVisionComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
