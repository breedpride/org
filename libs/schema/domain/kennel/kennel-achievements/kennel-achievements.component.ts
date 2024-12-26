import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { injectKennelPage } from '@bh/page-store';
import { AComponent, LinkComponent } from '@breedpride/link';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { ChipModule } from 'primeng/chip';

@Component({
  imports: [CommonModule, LinkComponent, ChipModule, AComponent],
  selector: 'bp-kennel-achievements',
  styles: [],
  template: `
    @let page = entityPage(); @if (page) {
    <div card-achievements class="mb-6 mt-3">
      <div
        aria-label="pet titles"
        class="align-items-center text-md flex flex-wrap gap-2"
      >
        <bp-link routerLink="./" fragment="pets" [buttonStyle]="true">
          <p-chip label="Pets in kennel - {{ page.KennelPets.length }}">
          </p-chip>
        </bp-link>
        <bp-link routerLink="./" fragment="offsprings" [buttonStyle]="true">
          <p-chip label="Offsprings - {{ page.OffspringPets.length }}">
          </p-chip>
        </bp-link>
        <bp-a [routerLink]="['/', page.TopPet.Url]">
          <p-chip>
            <span class="sm:max-w-120 max-w-80 truncate">
              Top pet - {{ page.TopPet.Name }}</span
            >
          </p-chip>
        </bp-a>
      </div>
    </div>
    }
  `,
})
export class KennelAchievementsComponent {
  defaultOptions = {
    entityPage: injectKennelPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
