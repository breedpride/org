import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageStore } from '@bh/page-store';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'bp-page-achievements-outlet',
  imports: [CommonModule, RouterOutlet, SkeletonModule],
  template: `
    @if (isLoading()) {
    <div class="flex items-center space-x-2 pt-3 pb-7">
      <p-skeleton width="6rem" height="2rem" styleClass="rounded-full" />
      <p-skeleton width="6rem" height="2rem" styleClass="rounded-full" />
      <p-skeleton width="6rem" height="2rem" styleClass="rounded-full" />
    </div>
    } @else {
    <router-outlet name="achievements"></router-outlet>
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class PageAchievementsOutletComponent {
  isLoading = inject(PageStore).isLoading;
  // isLoading = loadingWithLag(1000);
}
