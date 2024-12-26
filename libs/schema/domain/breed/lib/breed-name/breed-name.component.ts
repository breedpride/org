import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectBreedPage } from '@bh/page-store';
import {
  LinkKennelComponent,
  LinkPatronComponent,
  LinkPetComponent,
} from '@breedpride/link';
import { DotComponent } from '@breedpride/shared';
import { NoteFlagButtonComponent } from '@breedpride/tissue/note';
import { mergeInputs } from 'ngxtension/inject-inputs';

@Component({
  imports: [
    CommonModule,
    LinkPetComponent,
    LinkKennelComponent,
    LinkPatronComponent,
    RouterModule,
    NoteFlagButtonComponent,
    DotComponent,
  ],
  selector: 'bp-breed-name',
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
    <div class="text-md mb-3">
      <span class="uppercase">
        {{ entityPage()?.ActualAchievent?.Name }}
      </span>
    </div>
    <div class="flex space-x-1.5">
      <div class="truncate py-0.5 text-3xl font-bold">
        <a [routerLink]="['/', entityPage()?.Url]">{{ entityPage()?.Name }} </a>
      </div>
      <bp-note-flag-button
        [entity]="entityPage"
        parentModel="Breed"
        mode="page"
        class="pr-7"
        [hasNotes]="entityPage()?.HasNotes || false"
      />
    </div>
    <div class="flex items-center">
      <div
        class="text-primary flex flex-wrap items-center space-x-2 font-medium"
      >
        <div class="bg-primary-100 size-4 rounded-full"></div>
        <bp-dot [dotNeeded]="false" [margin2]="true">
          <bp-link-pets
            [queryParams]="{
              Breed: entityPage()?.Url,
              PetType: entityPage()?.PetType?.Id,
            }"
            [displayName]="'Pet profiles - ' + entityPage()?.PetProfileCount"
            [hasActions]="false"
          />
        </bp-dot>
        <bp-dot
          [margin2]="true"
          class="
            hidden
            sm:flex
          "
        >
          <bp-link-kennel
            [queryParams]="{ Breed: entityPage()?.Url }"
            [displayName]="'Kennels - ' + entityPage()?.KennelCount"
            [hasActions]="false"
          />
        </bp-dot>
        <bp-dot [margin2]="true">
          <bp-link-patron
            [queryParams]="{ Breed: entityPage()?.Url }"
            [displayName]="'Patrons - ' + entityPage()?.PatronCount"
            [hasActions]="false"
          />
        </bp-dot>
      </div>
    </div>
  `,
})
export class BreedNameComponent {
  defaultOptions = {
    entityPage: injectBreedPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
