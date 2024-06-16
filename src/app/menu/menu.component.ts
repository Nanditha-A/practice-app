import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  dropdownOpen = false;
  constructor() { }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
