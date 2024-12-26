import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectContactPage } from '@bh/page-store';
import { DotComponent, VerificationComponent } from '@breedpride/shared';
import { NoteFlagButtonComponent } from '@breedpride/tissue/note';
import { mergeInputs } from 'ngxtension/inject-inputs';

@Component({
  imports: [
    CommonModule,
    VerificationComponent,
    RouterModule,
    NoteFlagButtonComponent,
    DotComponent,
  ],
  selector: 'bp-contact-name',
  styles: [
    `
      :host {
        display: block;
        // margin-top: 0.75rem;
        padding-bottom: 0.75rem;
        background-color: rgb(var(--card-ground));
        cursor: default;
        caret-color: transparent;
      }
    `,
  ],
  template: `
    @let page = entityPage(); @if (page) {
    <span class="text-md mb-3 uppercase">
      {{ page.Country?.Name }}
    </span>
    <div class="flex space-x-1.5">
      <div class="truncate py-0.5 text-3xl font-bold">
        <a [routerLink]="['/', page.Url]">{{ page.Name }} </a>
      </div>
      <bp-verification
        [iconSize]="16"
        [verificationStatus]="page.VerificationStatus"
      />
      <bp-note-flag-button
        mode="page"
        [entity]="entityPage"
        parentModel="Contact"
        class="pr-7"
        [hasNotes]="page.HasNotes"
      />
    </div>
    <div class="flex items-center">
      <div
        class="text-secondary flex flex-wrap items-center space-x-2 font-medium"
      >
        <div class="bg-primary-100 size-4 rounded-full"></div>

        <bp-dot
          [ngClass]="{ 'hidden ': page.Career.Breeder.length === 0 }"
          [dotNeeded]="false"
        >
          Breeder</bp-dot
        >
        @if ( page.Career.Breeder.length !== 0 && page.Career.Judge.length !== 0
        ) {
        <span class="mr-2">&bull;</span>
        }

        <bp-dot
          [dotNeeded]="false"
          [ngClass]="{ 'hidden ': page.Career.Judge.length === 0 }"
          >Judge</bp-dot
        >
      </div>
    </div>
    }
  `,
})
export class ContactNameComponent {
  defaultOptions = {
    entityPage: injectContactPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  editMode = input<boolean>(false);
}
