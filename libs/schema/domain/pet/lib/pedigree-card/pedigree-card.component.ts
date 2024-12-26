import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { Router } from '@angular/router';
import { EntitySelectorService } from '@bh/editing';
import { Pet } from '@bh/entity/config';

import { nullId, FilterFn } from '@bh/superfield';
import { MATING } from '@bh/space-url';
import { PublicPedigreePet } from '@bh/types';
import { ActionService } from '@bp/chromatin/services';
import { PedigreeStore } from '@bp/pedigree-store';
import { LinkComponent } from '@breedpride/link';
import { DateYearPipe, PetAvatarPipe } from '@breedpride/pipes';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TooltipModule } from 'primeng/tooltip';
import { SPACE_CONFIG_PET } from '../../pages/pet-page/pet-space';
import { PetSexMarkComponent } from '../pet-sex-mark/pet-sex-mark.component';

export function unknownPetFn(
  value: PublicPedigreePet | Pet | undefined
): PublicPedigreePet {
  return value ? value : unknownPet;
}
export const unknownPet = { Id: nullId, Name: 'Unknown' };
@Component({
  imports: [
    CommonModule,
    PetSexMarkComponent,
    PetAvatarPipe,
    TooltipModule,
    LinkComponent,
    ButtonModule,
    DateYearPipe,
  ],
  selector: 'bp-pedigree-card',
  styles: [
    `
      .box-extra-large {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 32;
        overflow: hidden;
      }
      .box-large {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 16;
        overflow: hidden;
      }
      .box-two-rows {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .box-three-rows {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .box-five-rows {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
      }
      :host {
        display: block;
        cursor: default;
        caret-color: transparent;
      }
      :host::ng-deep {
        .p-tooltip .p-tooltip-text {
          font-size: 0.75rem;
        }
      }
      .zoro-level {
        position: -webkit-sticky; // for safari
        position: sticky;
        left: 0px;
      }
      .float-content {
        position: -webkit-sticky; // for safari
        position: sticky;
        /* left: 0; */
      }
      .pet-template {
        border-radius: 99999px;
        background-color: rgb(var(--pet-template));
      }
      .pet-template-name {
        @extend .pet-template;
        width: 100%;
        padding: 0.5rem;
      }
      .pet-template-title {
        @extend .pet-template;
        padding: 0.375rem;
      }
      .pet-template-additional {
        @extend .pet-template;
        width: 33.333333%;
        padding: 0.25rem;
      }
    `,
  ],
  template: `
    <ng-template #selectPet let-name="name">
      @if (canSelectPet()) {
      <button
        [ngClass]="{
            'mt-4': level() === 0,
            'my-3': level() === 1,
            'my-0': level() > 1,
          }"
        (click)="selectPetParent()"
        class="bg-secondary-200 dark:bg-secondary-700 rounded-full px-2.5 hover:bg-secondary-300 dark:hover:bg-secondary-600"
      >
        {{
          isTestMating()
            ? sex() === 'male'
              ? (name || 'Select') + ' father'
              : (name || 'Select') + ' mother'
            : 'Select pet'
        }}
      </button>
      }
    </ng-template>

    @if (pet()) {
    <div class=" flex w-full flex-row space-x-3 ">
      @switch (level()) { @case (-1) {
      <div
        class="card min-w-10 max-w-10 flex-col items-center justify-center rounded-full sm:p-4 gap-3 bg-even-card-ground"
      >
        <div class="rotate-180 font-medium" style="writing-mode: vertical-lr">
          {{ pet().Name }}
        </div>
        <bp-pet-sex-mark [sex]="sex()" [style]="'round'" />
      </div>
      }
      <!-- 2 -->
      @case (0) {
      <div
        [style.width.%]="columnPersent"
        class="card flex  min-w-72 max-w-72 w-full flex-col items-center justify-center px-6 py-3 min-h-[403px] bg-even-card-ground"
      >
        <bp-pet-sex-mark
          [sex]="sex()"
          [style]="'horizontal'"
          class="top-0 mb-4 w-44"
        />
        <div
          class="flex size-44 items-center justify-center overflow-hidden rounded-xl border border-surface-border relative"
        >
          <img
            class="w-[100%] h-auto max-h-[200%] absolute inset-0 m-auto"
            src="{{ pet() | petAvatar }}"
            alt="Card cover image"
          />
        </div>
        @if (!emptyPet()) {
        <bp-link
          [routerLink]="['/', pet().Url]"
          [displayName]="pet().Name"
          [entityRole]="'pet'"
          [rows]="2"
          class="mt-4 flex min-h-10 w-full items-center justify-center text-center sm:mt-6"
        ></bp-link>
        <ng-container
          *ngTemplateOutlet="
                    selectPet;
                    context: {
                      name: 'Change',
                    }
                  "
        ></ng-container>
        <div
          class="h-20 mt-3 w-full border-t border-surface-border  sm:mt-4 pt-3 flex flex-col overflow-hidden"
          [ngClass]="{
                    'h-auto': predmaxLimit2gen() || maxLimitBefore4gen(),
                    'h-28': !isTestMating(),
                  }"
        >
          <em class=" text-secondary mb-1 text-center text-sm">
            {{ pet().CountryOfBirth?.Code }}
            {{ pet().DateOfBirth | dateYear }}
          </em>
          <div
            aria-label="pet titles"
            pTooltip=" {{ pet().TrimTitles }}"
            tooltipPosition="bottom"
            class=" text-center text-base leading-[1.6rem] "
            [ngClass]="{
                      'box-extra-large': maxLimitBefore4gen(),
                      'box-large': predmaxLimit2gen(),
                      'box-two-rows': !(
                        predmaxLimit2gen() || maxLimitBefore4gen()
                      ),
                      'box-three-rows': !(
                        (predmaxLimit2gen() || maxLimitBefore4gen()) &&
                        !isTestMating()
                      ),
                    }"
          >
            {{ pet().TrimTitles }}
          </div>
        </div>
        } @else {
        <ng-container *ngTemplateOutlet="selectPet"></ng-container>
        <div
          class="mt-3 flex w-full flex-col items-center border-t border-surface-border sm:mt-4 "
        >
          <div class="pet-template-additional mb-1.5 mt-3"></div>
          @for (n of numSequence(3); track n; let i = $index) {
          <div class="pet-template-title my-1.5 w-full"></div>
          }
        </div>
        }
      </div>
      }
      <!-- 3 -->
      @case (1) {
      <div
        [style.width.%]="columnPersent"
        class="card flex  min-w-72 max-w-72 flex-col items-center px-6 py-3 min-h-[196.25px] bg-even-card-ground"
      >
        <bp-pet-sex-mark [sex]="sex()" [style]="'horizontal'" class="w-44" />

        @if (!emptyPet()) {
        <bp-link
          [routerLink]="['/', pet().Url]"
          [displayName]="pet().Name"
          [entityRole]="'pet'"
          [rows]="2"
          class="flex min-h-10  justify-center w-full  text-center"
        ></bp-link>
        }

        <ng-container *ngTemplateOutlet="selectPet"></ng-container>

        @if (emptyPet() && !canSelectPet()) {
        <div class="pet-template-name my-3"></div>
        }

        <div class="flex w-full items-center h-full">
          <div
            class="h-26 w-26 min-w-26 flex items-center justify-center overflow-hidden rounded-xl border border-surface-border relative"
          >
            <img
              class="w-[100%] h-auto max-h-[200%] absolute inset-0 m-auto"
              src="{{ pet() | petAvatar }}"
              alt="Card cover image"
            />
          </div>
          @if (!emptyPet()) {
          <div
            aria-label="pet titles"
            pTooltip=" {{ pet().TrimTitles }}"
            tooltipPosition="bottom"
            class="box-five-rows ml-3 text-base leading-[1.6rem]"
          >
            {{ pet().TrimTitles }}
          </div>
          } @else {
          <div class="m-3 w-full space-y-4">
            @for (n of numSequence(3); track n; let i = $index) {
            <div class="pet-template-title my-1.5 w-full"></div>
            }
          </div>
          }
        </div>
        @if (!emptyPet()) {
        <em class="text-secondary  text-center text-sm mt-auto">
          {{ pet().CountryOfBirth?.Code }}
          {{ pet().DateOfBirth | dateYear }}
        </em>
        } @else {
        <div class="pet-template-additional mt-3"></div>
        }
      </div>
      }
      <!-- 4 -->
      @case (2) {
      <div
        [style.width.%]="columnPersent"
        class="card min-w-72 max-w-72 p-3 flex min-h-[92.88px] bg-even-card-ground"
      >
        <div
          class="size-16 min-w-16 overflow-hidden self-center rounded-xl border border-surface-border relative"
        >
          <img
            class="w-[100%] h-auto max-h-[200%] absolute inset-0 m-auto"
            src="{{ pet() | petAvatar }}"
            alt="Card cover image"
          />
        </div>
        <div class="ml-2 flex w-full flex-col items-center">
          <bp-pet-sex-mark
            [sex]="sex()"
            [style]="'horizontal'"
            class="mx-auto w-36"
          />

          @if (!emptyPet()) {
          <bp-link
            [routerLink]="['/', pet().Url]"
            [displayName]="pet().Name"
            [entityRole]="'pet'"
            [rows]="2"
            class="flex min-h-10 items-center justify-center text-center"
          ></bp-link>
          <div class="h-6 w-44 overflow-hidden">
            <div
              aria-label="pet titles"
              pTooltip=" {{ pet().TrimTitles }}"
              tooltipPosition="bottom"
              class="truncate text-base"
            >
              {{ pet().TrimTitles }}
            </div>
          </div>
          } @else {
          <div class=" flex size-full flex-col items-center space-y-5 pt-5">
            @if (!canSelectPet()) {
            <div class="pet-template-name"></div>
            }
            <ng-container *ngTemplateOutlet="selectPet"></ng-container>
            <div class="pet-template-title w-1/2"></div>
          </div>
          }
        </div>
      </div>
      }
      <!-- 5 -->
      @case (3) {
      <div
        [style.width.%]="columnPersent"
        class="card flex min-w-72 max-w-72 flex-row items-center rounded-full py-[0.65rem]  pl-3 pr-5 bg-even-card-ground"
      >
        <bp-pet-sex-mark
          [sex]="sex()"
          class="mr-3 w-4 shrink-0"
          [style]="'round'"
        />

        @if (!emptyPet()) {
        <bp-link
          [routerLink]="['/', pet().Url]"
          [displayName]="pet().Name"
          [entityRole]="'pet'"
          class="  max-w-60 shrink-0 truncate"
          [pTooltip]="toolTip"
          tooltipPosition="bottom"
          mode="line"
        ></bp-link>
        }
        <div class="flex w-full justify-center">
          <ng-container *ngTemplateOutlet="selectPet"></ng-container>

          @if (emptyPet() && !canSelectPet()) {
          <div class="pet-template-name my-1"></div>
          }
        </div>
      </div>
      } } @if (needDrowChild()) {
      <div class="flex flex-auto flex-col gap-3">
        <bp-pedigree-card
          [pet]="pet().Father"
          [sex]="'male'"
          [level]="nextLevel()"
          [child]="pet()"
          [gen]="gen() + 1"
        />
        <bp-pedigree-card
          [pet]="pet().Mother"
          [sex]="'female'"
          [level]="nextLevel()"
          [child]="pet()"
          [gen]="gen() + 1"
        />
      </div>
      }
    </div>
    }
  `,
})
export class PedigreeCardComponent {
  private router = inject(Router);
  // dialogService = inject(DialogService);
  pedigreeStore = inject(PedigreeStore);
  isTestMating = this.pedigreeStore.isMatingMode;
  limit = computed(() => this.pedigreeStore.generationsDisplayCount() - 1);
  gen = input.required<number>();
  level = input.required<number>();

  pet = input.required({ transform: unknownPetFn });

  child = input<PublicPedigreePet>();
  actionService = inject(ActionService);
  ref = inject(DynamicDialogRef);
  sex = input.required<string | undefined>();
  entitySelector = inject(EntitySelectorService);

  get toolTip() {
    return this.pet().Name + '\n' + this.pet().TrimTitles;
  }

  canSelectPet = computed(() =>
    this.isTestMating()
      ? this.gen() === 2
      : this.emptyPet() && this.child()?.Id !== nullId
  );
  get columnPersent(): number {
    return this.needDrowChild() ? 100 / (this.limit() - this.gen() + 2) : 100;
  }
  emptyPet = computed(() => this.pet()?.Id === nullId);
  needDrowChild = computed(() => this.gen() <= this.limit());
  nextLevel = computed(() => {
    if (this.limit() >= 5) {
      const value = this.gen() - this.limit() + 3;
      return value > 0 ? value : 0;
    } else {
      // const value = this.gen - this.limit;
      return this.gen() - 1;
    }
  });

  maxLimitBefore4gen = computed(() => this.gen() < 4 && this.limit() === 6);
  predmaxLimit2gen = computed(() => this.gen() === 2 && this.limit() === 5);
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  selectPetParent() {
    console.log(this.sex());
    console.log(this.pet);
    // TODO - prepare config for mather and father
    // TODO - sex filter
    // TODO - breed Filter (simple breed) difficult breed
    const filterFn: FilterFn<any> = (additional) => {
      if (additional) {
        console.log('RECORD for Selection', additional);
      }

      return null;
    };
    const newConfig = { ...SPACE_CONFIG_PET, filterFn };
    this.entitySelector.selectEntity(newConfig).then((ref) => {
      if (this.isTestMating()) {
        ref.onClose.subscribe((result) => {
          if (result) {
            console.log(result);
            const Father =
              this.sex() === 'male' ? result.Id : this.child()?.Father?.Id;
            const Mother =
              this.sex() === 'female' ? result.Id : this.child()?.Mother?.Id;
            console.log(Father, Mother);
            this.router.navigate(['/', MATING], {
              queryParams: {
                Father: Father,
                Mother: Mother,
              },
            });
          }
        });
      } else {
        // TODO - parent set to child (think about public page reloading)
        ref.onClose.subscribe((result) => {
          if (result) {
            // TODO confirmation
            console.log(result);
            const Father =
              this.sex() === 'male' ? result.Id : this.child()?.Father?.Id;
            const Mother =
              this.sex() === 'female' ? result.Id : this.child()?.Mother?.Id;
            console.log(Father, Mother);
            this.router.navigate(['/', MATING], {
              queryParams: {
                Father: Father,
                Mother: Mother,
              },
            });
          }
        });
      }
    });
  }
}
