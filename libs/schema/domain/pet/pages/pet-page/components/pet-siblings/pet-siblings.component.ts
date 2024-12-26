import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { trackByFn } from '@bh/list';
import { injectPetPage } from '@bh/page-store';
import { PublicPet } from '@bh/types';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { LinkComponent } from '@breedpride/link';
import { DateLocalePipe, correctDate } from '@breedpride/pipes';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { PetSexMarkComponent } from '../../../../lib/pet-sex-mark/pet-sex-mark.component';

class ChildGroup {
  anotherParent!: PublicPet;
  date!: Date;
  pets: PublicPet[] = [];
}

@Component({

  imports: [CommonModule, PetSexMarkComponent, DateLocalePipe, LinkComponent],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-pet-siblings',
  styles: [
    `
      :host {
        display: block;
        cursor: default;
        caret-color: transparent;
      }
      .siblings-grid {
        grid-template-columns: 28px auto;

        @screen sm {
          grid-template-columns: 72px auto;
        }

        @screen md {
          grid-template-columns: 82px auto;
        }
      }

      .siblings-grid-full {
        grid-template-columns: 82px auto;

        @screen lg {
          grid-template-columns: 64px auto;
        }

        /* @screen xl {
          grid-template-columns: 82px auto;
        } */
      }
    `,
  ],
  template: `
    @if (siblingGroups && siblingGroups.length > 0) {
    <div
      class="mt-3 grid flex-col-reverse gap-3"
      [ngClass]="{
          'lg:grid-cols-2': fullscreen(),
        }"
    >
      <!-- Header -->
      @for ( siblingGroup of siblingGroups; track trackByFn($index,
      siblingGroup) ) {
      <!-- <ng-container *ngIf="siblingGroups[0]"> -->
      <div class="card flex flex-auto flex-col p-6 md:px-10">
        <div
          class=" grid gap-3 border-b border-surface-border px-6 py-3 font-semibold lg:px-8"
        >
          <div>{{ siblingGroup.date | appDateLocale }}</div>
        </div>

        <!-- Rows -->
        <!-- <ng-container *ngFor="let sibling of siblingGroups[0].pets; trackBy: trackByFn"> -->
        @for ( sibling of siblingGroup.pets; track trackByFn($index, sibling) )
        {
        <div
          class="grid items-center gap-3 px-6 py-2 lg:px-8"
          [ngClass]="{
                  'siblings-grid-full': fullscreen(),
                  'siblings-grid': !fullscreen(),
                }"
        >
          <!-- Sex -->
          <div class="flex flex-row items-center space-x-2.5">
            <bp-pet-sex-mark
              [sex]="sibling.Sex?.Code"
              [style]="petSexMarkStyle()"
            />

            <div class="hidden sm:block">
              {{ sibling.Sex?.Name }}
            </div>
          </div>
          <!-- Pet name -->
          <bp-link
            [routerLink]="['/', sibling.Url]"
            [displayName]="sibling.Name"
            entityRole="pet"
          ></bp-link>
        </div>
        }
      </div>
      }
    </div>
    } @else {
    <div class="card mt-5 flex flex-auto flex-col p-6 lg:px-8">
      <span class="text-secondary p-8 text-center  font-medium">
        There are no siblings!
      </span>
    </div>
    }
  `
})
export class PetSiblingsComponent {
  fullscreen = injectFullscreen();
  petSexMarkStyle = computed(() =>
    window.screen.width < 600 ? 'round' : 'vertical'
  );
  defaultOptions = {
    entityPage: injectPetPage(),
  };

  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });

  siblings = computed(() => {
    return this.options().entityPage()?.Siblings;
  });

  //input.required<PublicPet[]>();

  trackByFn = trackByFn;

  get siblingGroups(): ChildGroup[] {
    const grouped: ChildGroup[] = [];
    const siblings = this.siblings();
    if (siblings) {
      siblings
        .map((pet) => {
          return {
            ...pet,
            DateOfBirth: pet.DateOfBirth
              ? new Date(pet.DateOfBirth)
              : undefined,
          };
        })
        .sort((a: PublicPet, b: PublicPet) =>
          a.DateOfBirth && b.DateOfBirth && correctDate(a.DateOfBirth)
            ? a.DateOfBirth < b.DateOfBirth
              ? 1
              : -1
            : 1
        )
        .forEach((pet: PublicPet) => {
          const group = grouped.find((v: ChildGroup) =>
            correctDate(pet.DateOfBirth)
              ? v.date?.getTime() === pet.DateOfBirth?.getTime()
              : !correctDate(v.date)
          );
          if (group) {
            group.pets.push(pet);
          } else {
            const newGroup = new ChildGroup();
            if (pet.DateOfBirth) {
              newGroup.date = new Date(pet.DateOfBirth);
            }
            newGroup.pets.push(pet);
            grouped.push(newGroup);
          }
        });
      grouped.forEach((e) =>
        e.pets.sort((a: PublicPet, b: PublicPet) =>
          b?.Sex?.Code === 'male' ? 1 : -1
        )
      );
      grouped.sort((a, b) =>
        a.date && b.date && correctDate(a.date)
          ? a.date < b.date
            ? 1
            : -1
          : -1
      );
    }
    return grouped;
  }
}
