import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bp-app-footer',
  imports: [CommonModule],
  template: `Breedhub © 2024`,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class AppFooterComponent {
  @HostBinding('class') class =
    'px-8 py-2 text-white z-10 cursor-default caret-transparent';
}
