import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice-app';
  iconRotation = 90;
  color: string = '#5B0888';
  colors = [
    {
      css: '#FDE767',
      name: 'Yellow'
    },
    {
      css: '#FE7A36',
      name: 'Orange'
    },
    {
      css: '#910A67',
      name: 'Magenta'
    },
    {
      css: '#D63484',
      name: 'Pink'
    },
    {
      css: '#5B0888',
      name: 'Default'
    }

  ]
  rotateIconRight() {
    this.iconRotation = this.iconRotation + 90;
    this.iconRotation = this.iconRotation > 360 ? this.iconRotation - 360 : this.iconRotation;
  }
  rotateIconLeft() {
    console.log('rotateIconLeft()');
    this.iconRotation = this.iconRotation - 90;
    this.iconRotation = this.iconRotation < 360 ? this.iconRotation + 360 : this.iconRotation;
  }

  changeColor(newColor) {
    this.color = newColor;
  }

}

