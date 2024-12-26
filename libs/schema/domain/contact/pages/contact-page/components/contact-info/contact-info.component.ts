import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { ExternalLinkComponent } from '@breedpride/link';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { injectContactPage } from '@bh/page-store';

@Component({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    FieldsetModule,
    DividerModule,
    ExternalLinkComponent,
  ],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-contact-info',
  styles: [
    `
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
  ],
  template: `
    @let page = entityPage(); @if (page) {
    <!-- Address -->
    <p-fieldset legend="info">
      <div
        class="flex flex-col"
        [ngClass]="{
          'lg:flex-row': fullscreen(),
        }"
      >
        <div class="info-grid grid w-full items-center gap-3 px-4 pb-2">
          <svg-icon name="place"></svg-icon>
          <span class="text-secondary">Country</span>
          <span>{{ page.Country?.Name }}</span>
          <svg-icon name="city"></svg-icon>
          <span class="text-secondary">City</span>

          <span>{{ page.City?.Name }}</span>
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

          <div class="flex flex-wrap space-x-1">
            @if (page.PhoneNumbers.length > 0) {
            <span>{{ page.PhoneNumbers[0] }}</span>

            @for ( phoneNumber of page.PhoneNumbers.slice(1); track phoneNumber
            ) {
            <div class="flex space-x-1">
              <span class="text-secondary">&bull;</span>
              <span>{{ phoneNumber }}</span>
            </div>
            } }
          </div>
          <svg-icon name="mail"></svg-icon>
          <span class="text-secondary">Email</span>
          <div class="flex flex-wrap space-x-1">
            @if (page.Emails.length > 0) {
            <span>{{ page.Emails[0] }}</span>
            @for (email of page.Emails.slice(1); track email) {
            <div class="flex space-x-1">
              <span class="text-secondary">&bull;</span>
              <span>{{ email }}</span>
            </div>
            } }
          </div>
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
          <bp-external-link [text]="page.FacebookLinks[0]" />
          <svg-icon name="instagram"></svg-icon>
          <span class="text-secondary">Instagram</span>
          <bp-external-link [text]="page.InstagramLinks[0]" />
        </div>
      </div>
    </p-fieldset>

    <!-- Languages-->
    <p-fieldset legend="Languages" class="">
      <div
        class="flex items-center space-x-5 px-4 pb-2"
        [ngClass]="{
          'md:grid-cols-2': fullscreen(),
        }"
      >
        <svg-icon name="translate"></svg-icon>
        @if (page.Languages.length > 0) {
        <div class="flex flex-wrap space-x-1">
          <span>{{ page.Languages[0].Name }}</span>
          @for (language of page.Languages.slice(1); track language) {
          <div class="flex space-x-1">
            <span class="text-secondary">&bull;</span>
            <span>{{ language.Name }}</span>
          </div>
          }
        </div>
        }
      </div>
    </p-fieldset>
    }
  `,
})
export class ContactInfoComponent {
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectContactPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
