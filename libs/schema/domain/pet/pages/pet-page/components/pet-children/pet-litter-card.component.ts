import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { trackByFn } from '@bh/list';
import { PetPage } from '@bh/types';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { LinkComponent } from '@breedpride/link';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DateLocalePipe } from '@breedpride/pipes';
import { TooltipModule } from 'primeng/tooltip';
import { PetSexMarkComponent } from '../../../../lib/pet-sex-mark/pet-sex-mark.component';

@Component({
  selector: 'pet-pet-litter-card',
  imports: [
    CommonModule,
    PetSexMarkComponent,
    DateLocalePipe,
    LinkComponent,
    AngularSvgIconModule,
    TooltipModule,
  ],
  template: `
    <div class="card flex flex-auto flex-col p-6 lg:px-8">
      <div
        class="grid gap-3 border-b px-6 py-3 font-semibold md:px-8"
        [ngClass]="{
          'children-grid-full': fullscreen(),
          'children-grid': !fullscreen(),
        }">
        <div class="flex flex-col">
          <div>{{ childGroup().date | appDateLocale }}</div>
          <p class="text-secondary hidden text-sm font-light sm:block">DOB</p>
        </div>
        <div class="flex flex-col">
          <bp-link
            [routerLink]="['/', childGroup().anotherParent?.Url]"
            [displayName]="childGroup().anotherParent?.Name"
            [entityRole]="'pet'"></bp-link>
          <p class="text-secondary text-sm font-light">
            {{ anotherParentRole() }}
          </p>
        </div>
      </div>
      <!-- Rows -->
      @for (child of childGroup().pets; track trackByFn($index, child)) {
        <div
          class="grid items-center gap-3 px-6 py-2 lg:px-8"
          [ngClass]="{
            'children-grid-full': fullscreen(),
            'children-grid': !fullscreen(),
          }">
          <!-- Sex -->
          <div class="flex flex-row items-center space-x-2.5">
            <bp-pet-sex-mark
              [sex]="child.Sex?.Code"
              [style]="petSexMarkStyle()" />
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
                class="ml-1.5"></svg-icon>
            }
          </div>
          <!-- Pet name -->
          <!-- <div class="truncate"> {{child.name}}</div> -->
          <bp-link
            [routerLink]="['/', child.Url]"
            [displayName]="child.Name"
            [entityRole]="'pet'"></bp-link>
        </div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
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

})
export class PetLitterCardComponent {
  childGroup = input.required<any>();
  pet = input.required<PetPage>();
  trackByFn = trackByFn;
  fullscreen = injectFullscreen();
  anotherParentRole = computed(() =>
    this.pet().Sex?.Code === 'male' ? 'Mother' : 'Father'
  );
  petSexMarkStyle = input<string>(
    window.screen.width < 600 ? 'round' : 'vertical'
  );
}
