import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
// import { ExternalLinkComponent } from '@breedpride/link';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { FieldsetModule } from 'primeng/fieldset';
import { injectKennelPage } from '@bh/page-store';

@Component({
  selector: 'bp-kennel-info',
  imports: [
    CommonModule,
    FieldsetModule,
    AngularSvgIconModule,
    // ExternalLinkComponent,
  ],
  hostDirectives: [ScrollableTabDirective],
  template: ` <!-- Address -->
    <p-fieldset legend="Info">
      <div
        class="flex flex-col"
        [ngClass]="{
          'lg:flex-row': fullscreen(),
        }"
      >
        <div class="info-grid grid w-full items-center gap-3 px-4 pb-2">
          <svg-icon name="contact"></svg-icon>
          <span class="text-secondary">Owner</span>
          <span>{{ entityPage()?.Owner?.Name }}</span>
          <i class="pi pi-globe text-secondary-400"></i>
          <span class="text-secondary">Federation</span>
          <span>{{ entityPage()?.Federation?.AlternativeName }}</span>
          <svg-icon name="place"></svg-icon>
          <span class="text-secondary">Country</span>
          <span>{{ entityPage()?.Country?.Name }}</span>
          <svg-icon name="city"></svg-icon>
          <span class="text-secondary">City</span>
          <span>{{ entityPage()?.City?.Name }}</span>
        </div>
        <p-divider
          layout="vertical"
          [ngClass]="{
            'lg:block': fullscreen(),
          }"
          class="hidden"
        ></p-divider>
        <div class="info-grid grid w-full items-center gap-3 px-4 pb-2">
          <svg-icon name="phone"></svg-icon>
          <span class="text-secondary">Phone</span>

          <!-- <div class="flex flex-wrap space-x-1">
            @if (entityPage().PhoneNumbers.length > 0) {
              <span>{{ entityPage().PhoneNumbers[0] }}</span>

              @for (
                phoneNumber of entityPage().PhoneNumbers.slice(1);
                track phoneNumber
              ) {
                <div class="flex space-x-1">
                  <span class="text-secondary">&bull;</span>
                  <span>{{ phoneNumber }}</span>
                </div>
              }
            }
          </div> -->
          <svg-icon name="mail"></svg-icon>
          <span class="text-secondary">Email</span>
          <!-- <div class="flex flex-wrap space-x-1">
            @if (entityPage().Emails.length > 0) {
              <span>{{ entityPage().Emails[0] }}</span>
              @for (email of entityPage().Emails.slice(1); track email) {
                <div class="flex space-x-1">
                  <span class="text-secondary">&bull;</span>
                  <span>{{ email }}</span>
                </div>
              }
            }
          </div> -->
        </div>
      </div>
    </p-fieldset>

    <!-- Social network -->
    <p-fieldset legend="Social network">
      <div
        class="flex flex-col"
        [ngClass]="{
          'md:flex-row': fullscreen(),
        }"
      >
        <div class="info-grid grid w-full gap-3 px-4 pb-2">
          <svg-icon name="facebook"></svg-icon>
          <span class="text-secondary">Facebook</span>
          <!-- <bp-external-link [text]="entityPage().FacebookLinks[0]" /> -->
          <svg-icon name="instagram"></svg-icon>
          <span class="text-secondary">Instagram</span>
          <!-- <bp-external-link [text]="entityPage().InstagramLinks[0]" /> -->
        </div>
      </div>
    </p-fieldset>`,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .info-grid {
      grid-template-columns: 16px 42px auto;
      /* grid-template-rows: 36px 36px; */

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

})
export class KennelInfoComponent {
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectKennelPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
