import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  inject,
  input,
  Signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { trackByFn } from '@bh/list';
import { injectPetPage } from '@bh/page-store';
import { PetPage, PublicPedigreePet } from '@bh/types';
import { scollableOptions } from '@bp/core/consts';
import { PAGE_TAB, providePageTab } from '@bp/page-tab-store';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { LinkComponent } from '@breedpride/link';
import { DateLocalePipe, groupChildren } from '@breedpride/pipes';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { injectResize } from 'ngxtension/resize';
import { TooltipModule } from 'primeng/tooltip';
import { PetSexMarkComponent } from '../../../../lib/pet-sex-mark/pet-sex-mark.component';
export type ChildrenOptions = {
  entityPage: Signal<null | PetPage>;
  children: PublicPedigreePet[] | null;
  pet: null | PublicPedigreePet;
};
@Component({

  imports: [
    CommonModule,
    PetSexMarkComponent,
    DateLocalePipe,
    LinkComponent,
    AngularSvgIconModule,
    TooltipModule,
  ],
  selector: 'bp-pet-children',
  providers: [providePageTab()],
  styles: [
    `
      :host {
        display: block;
        cursor: default;
        caret-color: transparent;
      }
      .children-grid {
        grid-template-columns: 52px auto;

        @screen sm {
          grid-template-columns: 100px auto;
        }

        @screen md {
          grid-template-columns: 110px auto;
        }
      }

      .children-grid-full {
        grid-template-columns: 110px auto;

        @screen lg {
          grid-template-columns: 115px auto;
        }

        @screen xl {
          grid-template-columns: 130px auto;
        }
      }
    `,
  ],
  template: `
    @if (childGroups() && childGroups().length > 0) {
    <div
      class="mt-3 grid gap-3"
      [ngClass]="{
          'lg:grid-cols-2': fullscreen(),
        }"
    >
      <!-- Header -->
      @for ( childGroup of childGroups(); track trackByFn($index, childGroup) )
      {
      <div
        class="card flex flex-auto flex-col p-6 lg:px-8"
        [ngStyle]="{
              background: bgColor(),
            }"
      >
        <div
          class="grid gap-3 border-b border-surface-border px-6 py-3 font-semibold md:px-8"
          [ngClass]="{
                'children-grid-full': fullscreen(),
                'children-grid': !fullscreen(),
              }"
        >
          <div class="flex flex-col">
            <div>{{ childGroup.date | appDateLocale }}</div>
            <p class="text-secondary hidden text-sm font-light sm:block">DOB</p>
          </div>
          <div class="flex flex-col">
            <bp-link
              [routerLink]="['/', childGroup.anotherParent?.Url]"
              [displayName]="childGroup.anotherParent?.Name"
              [entityRole]="'pet'"
            ></bp-link>
            <p class="text-secondary text-sm font-light">
              {{ anotherParentRole() }}
            </p>
          </div>
        </div>
        <!-- Rows -->
        @for (child of childGroup.pets; track trackByFn($index, child)) {
        <div
          class="grid items-center gap-3 px-6 py-2 lg:px-8"
          [ngClass]="{
                  'children-grid-full': fullscreen(),
                  'children-grid': !fullscreen(),
                }"
        >
          <!-- Sex -->
          <div class="flex flex-row items-center space-x-2.5">
            <bp-pet-sex-mark
              [sex]="child.Sex?.Code"
              [style]="petSexMarkStyle()"
            />

            <div class="hidden sm:block">
              {{ child.Sex?.Name }}
            </div>
            @if (child?.AvailableForSale) {
            <svg-icon
              name="sale"
              [svgStyle]="{
                        width: '16px',
                        fill: 'rgb(var(--secondary-400))',
                      }"
              pTooltip="Sale"
              tooltipPosition="bottom"
              class="ml-1.5"
            ></svg-icon>
            }
          </div>
          <!-- Pet name -->
          <!-- <div class="truncate"> {{child.name}}</div> -->
          <bp-link
            [routerLink]="['/', child.Url]"
            [displayName]="child.Name"
            [entityRole]="'pet'"
          ></bp-link>
        </div>
        }
      </div>
      }
    </div>
    } @else {
    <div class="card mt-5 flex flex-auto flex-col p-6 lg:px-8">
      <span class="text-secondary p-8 text-center  font-medium">
        There are no children!
      </span>
    </div>
    }
  `
})
// TODO - set true children
export class PetChildrenComponent {
  bgColor = input<string>();
  fullscreen = injectFullscreen();
  defaultOptions: ChildrenOptions = {
    entityPage: injectPetPage(),
    children: null,
    pet: null,
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });

  entityPage = this.options().entityPage;
  children = computed(() => {
    return this.options().children || this.entityPage()?.Children || [];
  });

  petSexMarkStyle = computed(() =>
    window.screen.width < 600 ? 'round' : 'vertical'
  );
  trackByFn = trackByFn;
  anotherParentRole = computed(() =>
    this.entityPage()?.Sex?.Code === 'male' ? 'Mother' : 'Father'
  );
  childGroups = computed(() => {
    const pet = this.options().pet || this.entityPage();

    return pet ? groupChildren(this.children(), pet) : [];
  });

  // TODO - 2 different windows

  pageTabStore = inject(PAGE_TAB, { optional: true, self: true });
  injectResize$ = injectResize(scollableOptions).pipe(takeUntilDestroyed());

  constructor() {
    afterNextRender(() => {
      if (!this.options().pet) {
        this.pageTabStore?.observeBodyVisibility(this.injectResize$);
      }
    });
  }
}
