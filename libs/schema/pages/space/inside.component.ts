import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bp-inside',
  imports: [CommonModule],
  template: `<p>inside works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class InsideComponent {}
