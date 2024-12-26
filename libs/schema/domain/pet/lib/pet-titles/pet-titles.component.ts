import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { injectPetPage } from '@bh/page-store';
import { BPNavStore } from '@bh/nav-store';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    ButtonModule,
    ChipModule,
    TooltipModule,
  ],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-pet-titles',
  styles: [``],
  template: `
    @let page = petPage(); @if (page) {
    <div
      class=""
      [ngClass]="{
          hidden: page?.PetTitles?.length === 0,
          'block pt-3': page.PetTitles.length > 0,
          'block pb-6': componentMode() && page.PetTitles.length > 0,
        }"
    >
      <div
        aria-label="pet titles"
        class="align-items-center flex flex-wrap gap-2 font-medium"
      >
        @if (componentMode()) {
        <button
          class="
              border border-surface-600 dark:border-surface-400 text-surface-600 dark:text-surface-400 hover:bg-surface-50 hover:dark:bg-surface-700 flex h-full
              items-center justify-center rounded-full p-2
            "
          pTooltip="{{ buttonLabel() }}"
          tooltipPosition="top"
          [ngClass]="{ hidden: page.PetTitles.length < 6 }"
          (click)="changeDisplayTitlesCount()"
        >
          <i
            class="
                pi pi-angle-down rotate-0 transition-transform duration-150
              "
            [ngClass]="{ 'rotate-180': titleCount() > 5 }"
          ></i>
        </button>
        <!-- <button
          pButton
          pRipple
          pTooltip="{{ buttonLabel() }}"
          tooltipPosition="top"
          class=" size-[2.2rem] p-button-secondary p-button-rounded p-button-outlined"
          [ngClass]="{ hidden: page.PetTitles.length < 6 }"
          (click)="changeDisplayTitlesCount()"
        >
          <i
            class="
                pi pi-angle-down rotate-0 transition-transform duration-150
              "
            [ngClass]="{ 'rotate-180': titleCount() > 5 }"
          ></i>
        </button> -->
        @for ( title of page.PetTitles | slice: 0 : titleCount(); track title.Id
        ) {
        <p-chip
          сlass="bg-primary"
          [pTooltip]="toolTip(title)"
          tooltipPosition="top"
          label="{{ title.Name }} {{ title.CountryCode }}"
        ></p-chip>
        } } @else { @for (title of page.PetTitles; track title.Id) {
        <p-chip
          [pTooltip]="toolTip(title)"
          tooltipPosition="top"
          label="{{ title.Name }} {{ title.CountryCode }}"
        ></p-chip>
        } }
      </div>
    </div>
    }
  `,
})
export class PetTitlesComponent {
  navStore = inject(BPNavStore);
  defaultOptions = {
    mode: 'component',
    petPage: injectPetPage(),
    expanded: signal(false),
  };

  componentMode = computed(() => this.options().mode === 'component');

  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });

  petPage = this.options().petPage;

  expanded = this.options().expanded;

  titleCount = computed(() => {
    const lenght = this.petPage()?.PetTitles.length;
    return this.expanded() ? (lenght ? length : 5) : 5;
  });

  buttonLabel = computed(() => {
    return this.titleCount() === 5 ? 'Show all titles' : 'Show main titles';
  });

  changeDisplayTitlesCount() {
    if (this.titleCount() > 30) {
      this.navStore.changeFragment('titles');
    } else {
      this.expanded.set(!this.expanded());
    }
  }

  toolTip(title: any) {
    return title.Name + ' ' + title.Country;
  }
}
