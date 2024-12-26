import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectKennelPage } from '@bh/page-store';
import { LinkComponent } from '@breedpride/link';
import { DateYearPipe } from '@breedpride/pipes';
import { DotComponent, VerificationComponent } from '@breedpride/shared';
import { NoteFlagButtonComponent } from '@breedpride/tissue/note';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { mergeInputs } from 'ngxtension/inject-inputs';

@Component({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    DateYearPipe,
    LinkComponent,
    VerificationComponent,
    DotComponent,
    RouterModule,
    NoteFlagButtonComponent,
  ],
  selector: 'bp-kennel-name-block',
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
    @let page = entityPage(); @if (page) { @if (page.KennelBreeds.length > 0) {
    <div class="text-md mb-3 flex flex-wrap space-x-1">
      {{ page.Country?.Name }}
      <!-- <bp-link
          [routerLink]="['/', page.KennelBreeds[0].Url]"
          [displayName]="page.KennelBreeds[0].Name"
          [entityRole]="'breed'"
          [hasActions]="false" />
        @for (breed of page.KennelBreeds.slice(1); track breed) {
          <div class="flex space-x-1">
            <span class="text-primary">&bull;</span>
            <bp-link
              [routerLink]="['/', breed.Url]"
              [displayName]="breed.Name"
              [entityRole]="'breed'"
              [hasActions]="false" />
          </div>
        } -->
    </div>
    }
    <div class="flex space-x-1.5">
      <div class="truncate py-0.5 text-3xl font-bold">
        <a [routerLink]="['/', page.Url]">{{ page.Name }} </a>
      </div>
      <bp-verification
        [iconSize]="16"
        [verificationStatus]="page.VerificationStatus"
      />
      <bp-note-flag-button
        [entity]="page"
        mode="page"
        parentModel="Kennel"
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
          [margin2]="true"
          [ngClass]="{ 'hidden ': !page.Owner?.Name }"
          [dotNeeded]="false"
        >
          <bp-link
            [routerLink]="['/', page.Url]"
            [displayName]="page.Owner?.Name"
            [hasActions]="false"
          >
          </bp-link
        ></bp-dot>

        <bp-dot
          [margin2]="true"
          [ngClass]="{ 'hidden ': !page.Federation.AlternativeName }"
          >{{ page.Federation.AlternativeName }}</bp-dot
        >
        <bp-dot
          [margin2]="true"
          class="
            hidden
            sm:flex
          "
          [ngClass]="{ 'sm:hidden ': !page.CompanyFoundationDate }"
        >
          Since {{ page.CompanyFoundationDate | dateYear }}</bp-dot
        >
      </div>
    </div>
    }
  `,
})
export class KennelNameComponent {
  defaultOptions = {
    entityPage: injectKennelPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  editMode = input<boolean>(false);
}
