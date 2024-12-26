import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { ButtonModule } from 'primeng/button';
import { CoverTemplateComponent } from './cover-template.component';

@Component({
  imports: [CommonModule, CoverTemplateComponent, ButtonModule],
  selector: 'bp-default-cover',
  styles: `
    .p-button.p-button-secondary.p-button-outlined {
      color: white;
    }
  `,
  template: `
    <bp-cover-template [coverImg]="coverImg()" [needGradient]="true">
      <div
        class="z-10 mt-1 mb-3 ml-auto flex size-full flex-col justify-between sm:my-2 sm:w-auto"
      >
        <!-- Patrons -->
        <div>
          <div
            class="text-md text-end uppercase text-white sm:text-lg md:text-2xl lg:text-3xl"
          >
            Become a patron of your
            <br class="hidden md:block" />favorite breed
          </div>
          @if (fullscreen()) {
          <div class="mt-5 hidden text-end text-white sm:block">
            Make a contribution to the development of your favorite breed
          </div>
          }
        </div>

        <!-- Call to action -->
        <div class="flex items-end">
          <button
            class=" p-button-rounded p-button-outlined p-button-secondary p-button-sm ml-auto"
            aria-label="Become a breed patron"
            pRipple
            pButton
            type="button"
          >
            <span class="text-white">Become a patron</span>
          </button>
        </div>
      </div>
    </bp-cover-template>
  `,
})
export class DefaultCoverComponent {
  fullscreen = injectFullscreen();
  coverImg = input.required();
}
