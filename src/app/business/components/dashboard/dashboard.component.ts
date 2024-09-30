import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, SidebarComponent, NavbarComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent implements OnInit {
  estado: boolean = true;

  constructor(private auth:AuthService){}

  ngOnInit(): void {
      initFlowbite();
  }

  cambiarBool(valor:boolean){
    this.estado = valor;
  }

  valorBoolean(){
    console.log(this.estado);
    
  }

  cerrarSesion(){
    this.auth.logout();
  }
  

}
