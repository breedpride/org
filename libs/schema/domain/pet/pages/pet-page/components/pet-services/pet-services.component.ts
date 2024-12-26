import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { injectPetPage } from '@bh/page-store';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { providePageTab } from '@bp/page-tab-store';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { petServiceTransform } from '@breedpride/shared';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { ServiceFeaturesComponent } from '../../../../lib/service-features/service-features.component';
import { PetChildrenComponent } from '../pet-children/pet-children.component';

@Component({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    PetChildrenComponent,
    ServiceFeaturesComponent,
  ],
  providers: [providePageTab()],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-pet-services',
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
    <div class="flex flex-col space-y-8 cursor-default caret-transparent">
      @if (childrenForSale().length > 0) {
      <div>
        <div class="flex items-center space-x-2">
          <svg-icon name="children-for-sale"></svg-icon>
          <span class="font-bold">Children available for sale</span>
        </div>
        <bp-pet-children
          [bgColor]="'rgb(var(--even-card-ground))'"
          [options]="{
              children: childrenForSale(),
              pet: entityPage(),
            }"
        />
      </div>
      }
      <div
        class="grid grid-cols-2 gap-3"
        [ngClass]="{
          'grid-cols-2': fullscreen(),
          'grid-cols-1': !fullscreen(),
        }"
      >
        @for (service of services().slice(1); track service) {
        <div
          class="
            card flex flex-auto items-center space-x-5 p-6
            lg:px-8 bg-even-card-ground
          "
        >
          <svg-icon name="{{ service.IconName }}" class=""></svg-icon>
          <span class="font-bold">{{ service.ServiceType?.Name }}</span>
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
        }
      </div>
      @if (serviceFatures().length > 0) {
      <bp-service-features [ServiceFeatures]="serviceFatures()" />
      }
    </div>
  `,
})
export class PetServicesComponent {
  route = inject(ActivatedRoute);
  fullscreen = injectFullscreen();
  defaultOptions = {
    mode: 'component',
    entityPage: injectPetPage,
  };

  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });

  entityPage = this.options().entityPage();

  serviceFatures = computed(() => {
    const entityPage = this.entityPage();
    return entityPage && entityPage.ServiceFeatures
      ? entityPage.ServiceFeatures
      : [];
  });
  childrenForSale = computed(() => {
    return this.entityPage()?.Children?.filter((e) => e.AvailableForSale) || [];
  });
  services = computed(() =>
    this.entityPage()?.Services
      ? petServiceTransform(this.entityPage()?.Services || [])
      : []
  );

  // pageTabStore = inject(PAGE_TAB, { optional: true });
  // injectResize$ = injectResize(scollableOptions).pipe(
  //   takeUntilDestroyed(),
  //   tap(e => {
  //     console.log('!!!!!PETSERVICES ', e);
  //   })
  // );
}
