import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from './service';

@Component({
  selector: 'bp-app-logo',
  imports: [CommonModule, RouterLink],
  template: `
    <div class="layout-sidebar">
      <a aria-label="Main page" [routerLink]="['/']" class="app-logo">
        <img
          class="h-9"
          [src]="'assets/images/logo/logo-text.svg'"
          alt="breedpride logo"
        />
        <button
          class="layout-sidebar-anchor p-link"
          type="button"
          aria-label="goto main"
          (click)="anchor()"
        ></button>
      </a>
    </div>
  `,
  styles: ``,

})
export class AppLogoComponent {
  layoutService = inject(LayoutService);

  anchor(): void {
    this.layoutService.state.anchored = !this.layoutService.state.anchored;
  }
}
