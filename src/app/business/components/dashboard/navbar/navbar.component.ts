import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isVisible = true;
  @Output() boolean = new EventEmitter<boolean>();

  toggleSidebar(){
    this.isVisible = !this.isVisible
    this.boolean.emit(this.isVisible);
  }

}
