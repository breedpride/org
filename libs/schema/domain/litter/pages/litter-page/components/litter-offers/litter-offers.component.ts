import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { SalePetCardComponent } from '@breedpride/pet';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { petServiceTransform } from '@breedpride/shared';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { injectLitterPage } from '@bh/page-store';

@Component({
  imports: [CommonModule, SalePetCardComponent, AngularSvgIconModule],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-litter-offers',
  styles: [
    `
      svg {
        width: 16px;
        height: 16px;
        fill: rgb(var(--secondary-400));
      }
    `,
  ],
  template: `
    <div class="mt-3 flex flex-col space-y-8">
      @for (service of services(); track service) {
      <div class="card flex flex-auto items-center space-x-5 p-6 lg:px-8">
        <svg-icon name="{{ service.IconName }}" class=""></svg-icon>
        <span class="font-bold text-secondary">{{
          service.ServiceType?.Name
        }}</span>
        <div class="flex space-x-2">
          <span>Price: </span>
          @if (service.Price && service.Price > 0) {
          <span class="font-semibold">{{ service.Price }} </span>
          <span>{{ service.Currency?.Name }} </span>
          } @if (!service.Price) {
          <span>is not specified</span>
          }
        </div>
      </div>
      } @for (pet of entityPage()?.PetsForSale; track pet) {
      <bp-sale-pet-card [pet]="pet" />
      }
    </div>
  `,
})
export class LitterOffersComponent {
  defaultOptions = {
    entityPage: injectLitterPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  services = computed(() => petServiceTransform(this.entityPage()?.Services));
  fullscreen = injectFullscreen();
}
