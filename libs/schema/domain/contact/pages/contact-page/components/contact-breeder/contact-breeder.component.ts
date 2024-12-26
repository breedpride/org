import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { LinkComponent } from '@breedpride/link';
import { PetCardComponent } from '@breedpride/pet';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DateYearPipe } from '@breedpride/pipes';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { injectContactPage } from '@bh/page-store';

@Component({
  imports: [
    CommonModule,
    FieldsetModule,
    AngularSvgIconModule,
    LinkComponent,
    DateYearPipe,
    DividerModule,
    PetCardComponent,
  ],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-contact-breeder',
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }
      .info-grid {
        grid-template-columns: 16px 42px auto;

        @screen sm {
          grid-template-columns: 22px 60px auto;
        }
      }
      svg {
        width: 16px;
        height: 16px;
        fill: rgb(var(--secondary-400));
      }
    `,
  ],
  template: `
    <!-- <div class="flex flex-col space-y-5"> -->
    <p-fieldset legend="Info"
      ><div
        class="flex flex-col"
        [ngClass]="{
          'lg:flex-row': fullscreen(),
        }"
      >
        <div class="info-grid grid w-full items-center gap-3 px-4 pb-2">
          <svg-icon name="kennel"></svg-icon>
          <span class="text-secondary">Kennel</span>
          <bp-link
            [routerLink]="['/', entityPage()?.Career?.Breeder[0]?.Account?.Url]"
            [displayName]="entityPage()?.Career?.Breeder[0]?.Account?.Name"
            [entityRole]="'kennel'"
          ></bp-link>

          <svg-icon name="calendar"></svg-icon>
          <span class="text-secondary flex flex-row">Since</span>
          <span>
            {{
              entityPage()?.Career?.Breeder[0]?.CompanyFoundationDate | dateYear
            }}
          </span>
          <svg-icon name="breed"></svg-icon>
          <span class="text-secondary flex flex-row">Breeds</span>
          @if (entityPage()?.Career?.Breeder[0]?.Breeds?.length > 0) {
          <div class="flex flex-wrap space-x-1 ">
            <bp-link
              [routerLink]="[
                '/',
                entityPage()?.Career?.Breeder[0]?.Breeds[0].Url
              ]"
              [displayName]="entityPage()?.Career?.Breeder[0]?.Breeds[0].Name"
              [entityRole]="'breed'"
              [hasActions]="false"
            />
            @for ( breed of entityPage()?.Career?.Breeder[0]?.Breeds.slice(1);
            track breed ) {
            <div class="flex space-x-1">
              <span class="text-primary">&bull;</span>
              <bp-link
                [routerLink]="['/', breed.Url]"
                [displayName]="breed.Name"
                [entityRole]="'breed'"
                [hasActions]="false"
              />
            </div>
            }
          </div>
          }
        </div>
        <!-- <p-divider
          layout="vertical"
          [ngClass]="{
            'lg:block': fullscreen()
          }"
          class="hidden"></p-divider> -->
      </div>
    </p-fieldset>
    <div class="flex w-full items-center space-x-1">
      <span class="font-bold text-secondary">Offsprings</span>
      <div class="bg-secondary-200 h-[1px] w-full"></div>
    </div>
    <div
      class="mt-3 grid gap-3 sm:grid-cols-2"
      [ngClass]="{
        'lg:grid-cols-3 xxl:grid-cols-4': fullscreen(),
      }"
    >
      @for (pet of entityPage()?.Career?.Breeder[0]?.OffspringPets; track pet) {
      <bp-pet-card [pet]="pet" />
      }
    </div>
    <!-- </div> -->
  `,
})
export class ContactBreederComponent {
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectContactPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
