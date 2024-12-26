import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectPetPage } from '@bh/page-store';
import { LinkComponent } from '@breedpride/link';
import { DateLocalePipe, ToDatePipe } from '@breedpride/pipes';
import { DotComponent, VerificationComponent } from '@breedpride/shared';
import { NoteFlagButtonComponent } from '@breedpride/tissue/note';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { PetAvatarSmallComponent } from '../pet-avatar-small.component';
import { PetSexMarkComponent } from '../pet-sex-mark/pet-sex-mark.component';
@Component({
  selector: 'bp-pet-name',
  styles: [],
  template: `
    @let page = entityPage(); @if (page) {
    <!-- Name -->
    <div
      class="z-30 bg-card-ground cursor-default caret-transparent"
      [ngClass]="{
          'pb-3': viewMode === 'simple',
        }"
    >
      @if (page.Breed && viewMode === 'simple') {
      <div class="text-md mb-3 max-w-72 sm:max-w-full flex">
        <bp-link
          class="truncate"
          [routerLink]="['/', page.Breed.Url]"
          [displayName]="page.Breed.Name"
          [entityRole]="'breed'"
          mode="line"
        />
      </div>
      }
      <div
        class="items-center"
        [ngClass]="{
            flex: viewMode !== 'simple',
          }"
      >
        @if (viewMode === 'full') {
        <bp-pet-avatar-small
          [entity]="page"
          class="
                mr-4 hidden
                md:block
              "
        />
        }
        <!-- Name -->
        <div>
          <div
            class="flex space-x-1.5"
            [ngClass]="{
                'max-w-[calc(100vw-40px)]': viewMode !== 'simple',
              }"
          >
            <div class="truncate py-0.5 text-3xl font-bold">
              <a [routerLink]="['/', page.Url]">
                {{ page.Name }}
              </a>
            </div>
            <!-- <div class="border"> -->
            <bp-verification
              [iconSize]="16"
              [verificationStatus]="page.VerificationStatus"
            />
            <bp-note-flag-button
              mode="page"
              [entity]="page"
              parentModel="Pet"
              class="pr-7"
              [hasNotes]="page.HasNotes"
            />
            <!-- </div> -->
          </div>
          <!-- Additional info -->
          <div class="flex items-center">
            <div
              class="
                  text-secondary flex flex-wrap items-center space-x-2
                  font-medium
                "
            >
              <bp-pet-sex-mark
                [sex]="page.Sex?.Code"
                class="shrink-0"
                [style]="'round'"
              />
              <bp-dot
                [ngClass]="{ 'hidden ': !page.PetStatus?.Name }"
                [dotNeeded]="false"
                [margin2]="true"
                >{{ page.PetStatus?.Name }}</bp-dot
              >

              <bp-dot
                [margin2]="true"
                [ngClass]="{ 'hidden ': !page.DateOfBirth }"
                >{{ page.DateOfBirth | toDate | appDateLocale }}</bp-dot
              >

              <bp-dot
                [margin2]="true"
                [ngClass]="{ 'sm:hidden ': !page.COI }"
                class="
                    hidden
                    sm:flex
                  "
                >COI - {{ page.COI }}</bp-dot
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    }
  `,
  imports: [
    CommonModule,
    LinkComponent,
    PetSexMarkComponent,
    ToDatePipe,
    DateLocalePipe,
    DotComponent,
    RouterModule,
    VerificationComponent,
    PetAvatarSmallComponent,
    NoteFlagButtonComponent,
  ],
})
export class PetNameComponent {
  defaultOptions = {
    entityPage: injectPetPage(),
    viewMode: 'simple',
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });

  entityPage = this.options().entityPage;
  editMode = input<boolean>(false);
  viewMode = this.options().viewMode;
}
