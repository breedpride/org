import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectBreedPage } from '@bh/page-store';
import { AComponent, LinkComponent } from '@breedpride/link';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { ChipModule } from 'primeng/chip';

@Component({
  imports: [CommonModule, ChipModule, LinkComponent, RouterLink, AComponent],
  selector: 'bp-breed-achievements',
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        margin-top: 0.75rem;
      }
    `,
  ],
  template: `
    @let page = entityPage(); @if (page) { @if (page.TopKennel) {
    <bp-link [routerLink]="['/', page.TopKennel.Url]" [buttonStyle]="true">
      <p-chip label="Top kennel - {{ page.TopKennel.Name }}"> </p-chip>
    </bp-link>
    } @if (page.MajorPatron) {
    <bp-link [routerLink]="['/', page.MajorPatron.Url]" [buttonStyle]="true">
      <p-chip>
        <span
          class="
            max-w-80 truncate
            sm:max-w-120
          "
        >
          Major patron - {{ page.MajorPatron.Name }}</span
        >
      </p-chip>
    </bp-link>
    } @if (page.TopPet) {
    <bp-a [routerLink]="['/', page.TopPet.Url]">
      <p-chip>
        <span
          class="
            max-w-80 truncate
            sm:max-w-120
          "
        >
          Top pet - {{ page.TopPet.Name }}</span
        >
      </p-chip>
    </bp-a>
    } }
  `,
})
export class BreedAchievementsComponent {
  defaultOptions = {
    entityPage: injectBreedPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
