import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bp-one-space-outlet',
  providers: [],
  imports: [CommonModule, RouterOutlet],
  template: ` <router-outlet /> `,
  styles: `
    :host {
      // display: block;
    }
  `,

})
export class EmptyOutletComponent {}
