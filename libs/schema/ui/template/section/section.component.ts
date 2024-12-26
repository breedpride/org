import { Component } from '@angular/core';
import { SectionHeaderComponent } from './header/section-header.component';
import { SpaceScrollerComponent } from '@bh/collection-view-scroller';

@Component({
  selector: 'bh-section',
  imports: [SectionHeaderComponent, SpaceScrollerComponent],
  template: `
    <bh-section-header />
    <p>section works!</p>
    <bp-space-scroller />
  `,
  styles: ``
})
export class SectionComponent {}
