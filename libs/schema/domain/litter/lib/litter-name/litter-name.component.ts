import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectLitterPage } from '@bh/page-store';
import { LinkComponent } from '@breedpride/link';
import { DotComponent } from '@breedpride/shared';
import { NoteFlagButtonComponent } from '@breedpride/tissue/note';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { mergeInputs } from 'ngxtension/inject-inputs';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    DotComponent,
    LinkComponent,
    AngularSvgIconModule,
    NoteFlagButtonComponent,
  ],
  selector: 'bp-litter-name-block',
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
      svg {
        width: 16px;
        height: 16px;
        fill: rgb(var(--primary-500));
      }
    `,
  ],
  template: `
    @let page = entityPage(); @if (page) { @if (page.LitterBreeds.length > 0) {
    <div class="text-md mb-3 flex flex-wrap space-x-1">
      <bp-link
        [routerLink]="['/', page.LitterBreeds[0].Url]"
        [displayName]="page.LitterBreeds[0].Name"
        [entityRole]="'breed'"
        [hasActions]="false"
      />
      @for (breed of page.LitterBreeds.slice(1); track breed) {
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
    <div class="flex space-x-1.5">
      <div class="truncate py-0.5 text-3xl font-bold">
        <a [routerLink]="['/', page.Url]">{{ page.Name }} </a>
      </div>
      <bp-note-flag-button
        [entity]="entityPage"
        parentModel="Litter"
        mode="page"
        class="pr-7"
        [hasNotes]="page.HasNotes"
      />
    </div>
    <div class="flex items-center">
      <div
        class="text-secondary flex flex-wrap items-center space-x-2 font-medium"
      >
        <div class="bg-primary-300 dark:bg-surface-400 size-4 rounded-full"></div>
        <bp-dot
          [ngClass]="{ 'hidden ': !page.Status?.Name }"
          [dotNeeded]="false"
        >
          {{ page.Status?.Name }}
        </bp-dot>

        <bp-dot [ngClass]="{ 'hidden ': !page.Kennel?.Name }" [margin2]="true">
          <bp-link
            [routerLink]="['/', page.Kennel?.Url]"
            [displayName]="page.Kennel?.Name"
            [hasActions]="false"
          >
          </bp-link>
        </bp-dot>
        <bp-dot
          [ngClass]="{ 'hidden ': !page.Federation?.AlternativeName }"
          [margin2]="true"
        >
          {{ page.Federation?.AlternativeName }}
        </bp-dot>
        <!-- <bp-dot
          [ngClass]="{ 'hidden ': !page.Father?.Name }"
          ><svg-icon name="male"></svg-icon>
          <bp-link
            [routerLink]="['/', page.Father?.Url]"
            [displayName]="page.Father?.Name">
          </bp-link
        ></bp-dot>
        <bp-dot
          [ngClass]="{ 'hidden ': !page.Mother?.Name }">
          <svg-icon name="female"></svg-icon>
          <bp-link
            [routerLink]="['/', page.Mother?.Url]"
            [displayName]="page.Mother?.Name">
          </bp-link
        ></bp-dot> -->

        <!-- <bp-dot
          [ngClass]="{ 'hidden ': !entityPage.Country?.Name }"
          >{{ entityPage.Country?.Name }}</bp-dot
        > -->
      </div>
    </div>
    }
  `,
})
export class LitterNameComponent {
  defaultOptions = {
    entityPage: injectLitterPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;

  editMode = input<boolean>(false);
}
