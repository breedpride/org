import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActionService } from '@bp/chromatin/services';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { ApiService } from '@breedpride/api';
import { ContextMenuComponent } from '@breedpride/menu';
import { injectPetPage, PageStore } from '@bh/page-store';
import { MediaStore } from '@bp/media-store';
import { PedigreeStore } from '@bp/pedigree-store';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { injectParams } from 'ngxtension/inject-params';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { PedigreeCardComponent } from '../pedigree-card/pedigree-card.component';
import { PedigreeFooterComponent } from '../pedigree-footer.component';
import { PedigreeHeaderComponent } from '../pedigree-header/pedigree-header.component';

@Component({

  providers: [DynamicDialogRef],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-pedigree-page',
  styles: [
    `
      .active {
        @apply relative z-10 hidden items-center border border-purple-300 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-400 md:inline-flex;
      }
      .inactive {
        @apply relative hidden items-center border  border-gray-200 bg-card-ground px-4 py-2 text-sm font-medium text-gray-500 md:inline-flex;
      }
      :host ::ng-deep {
        .p-inputtext {
          padding: 0.5rem 0.75rem 0.5rem 1rem;
        }
        .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
          padding: 0.5rem 0.75rem 0.5rem 1rem;
        }
      }
      .grid-pedigree {
        display: grid;
        grid-template-columns: repeat(
          auto-fill,
          minmax(250px, 1fr)
        ); /* Adjust the minmax values based on your design needs */
        gap: 10px; /* Space between grid items */
        padding: 20px; /* Padding around the grid */
      }
    `,
  ],
  template: `
    <!-- Navigation -->
    <div
      class="flex w-full"
      [ngClass]="{
        'flex-col md:flex-row':
          !showFullscreenButton &&
          pedigreeStore.isPedigreeMode() &&
          model() === 'Pet',
      }"
    >
      <!-- Generations selector -->
      <!-- <div
        class="flex items-center space-x-5 border border-red-500"
        [ngClass]="{
          'order-2 md:ml-auto md:mt-auto mt-2 ':
            !showFullscreenButton &&
            pedigreeStore.isPedigreeMode() &&
            model() === 'Pet'
        }">
        <span class="text-secondary font-medium">Select a generation</span>

        <p-dropdown
          [options]="displayCounts"
          [(ngModel)]="userDisplayCount"></p-dropdown>
        @if (showFullscreenButton() && pedigreeStore.isPedigreeMode()) {
          <button
            class="
              p-button-rounded p-button-outlined p-button-secondary p-button-sm
            "
            aria-label="Full screen view"
            pRipple
            pButton
            (click)="show()"
            type="button"
            pTooltip="Full screen view"
            icon="pi pi-window-maximize"></button>
        }
      </div> -->

      <!-- TODO Rework in Litter -->
      <!-- @if (
        !showFullscreenButton() &&
        pedigreeStore.isPedigreeMode() &&
        model() === 'Pet'
      ) {
        <div class="">
          <bp-pet-name
            class="order-1"
            [entityPage]="pedigreeStore.petPage()"
            viewMode="full" />
        </div>
      } -->

      @if (pedigreeStore.isMatingMode()) {
      <div class="ml-auto flex space-x-2">
        <button
          class="
              bp-small-button p-button-info
              sm:hidden
            "
          aria-label="Save"
          pRipple
          pButton
          (click)="saveToLitters()"
          [disabled]="!canSaveToLitters"
          type="button"
          pTooltip="Save mating in litters"
          icon="pi pi-save"
        ></button>
        <button
          class="
              bp-small-button hidden p-button-info
              sm:block
            "
          aria-label="Save"
          pRipple
          pButton
          (click)="saveToLitters()"
          [disabled]="!canSaveToLitters"
          type="button"
          label="Save mating in litters"
          pTooltip="Save mating in litters"
          icon="pi pi-save"
        ></button>
        <button
          aria-label="more options"
          pTooltip="More options"
          tooltipPosition="top"
          pButton
          pRipple
          type="button"
          icon="pi pi-ellipsis-v"
          (click)="menu.toggle($event)"
          class="p-button-secondary p-button-text bp-small-button"
        ></button>
        <bp-context-menu #menu [menuItems]="cardMenuItems()" />
      </div>
      }
    </div>

    <div class="mt-1 flex border-r pt-3">
      <!-- Pedigree -->
      <!-- <div class="grid-pedigree overflow-x-auto">
        <div
          *ngFor="let pet of flatPets(); let i = index"
          class="pedigree-card">
          <bp-pedigree-card
            [pet]="pet"
            [sex]="pet.Sex?.Code"
            [level]="i"
            [gen]="calculateGeneration(i)">
            {{ pet.Name }}
          </bp-pedigree-card>
        </div>
      </div> -->
      <div class="flex w-full flex-auto flex-col gap-3 overflow-x-auto">
        @for (pet of pedigreeGeneration()[current - 1]; track pet) {
        <bp-pedigree-card
          [pet]="pet"
          [sex]="pet.Sex?.Code"
          [level]="-1"
          [gen]="1"
        >
          {{ pet.Name }}
        </bp-pedigree-card>
        }
      </div>
    </div>
  `,
  imports: [
    CommonModule,
    PedigreeCardComponent,
    DropdownModule,
    FormsModule,
    ButtonModule,
    TooltipModule,
    ContextMenuComponent,
    MenuModule,
  ]
})
export class PedigreePageComponent {
  calculateGeneration(index: number): number {
    // Implement your logic to calculate generation based on index or other factors
    return Math.floor(index / 4); // Example: every 4 pets constitute a new generation
  }
  params = injectParams();
  pedigreeStore = inject(PedigreeStore);
  model = inject(PageStore).loadedModel;
  defaultOptions = {
    entityPage: injectPetPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;

  acionService = inject(ActionService);

  dialogService = inject(DialogService);
  media = inject(MediaStore);
  canSaveToLitters = this.pedigreeStore.canSaveToLitters;
  api = inject(ApiService);
  actionService = inject(ActionService);

  ref = inject(DynamicDialogRef);
  displayCounts: number[] = [...Array(6)].map((_, i) => i + 2); //[2..7]

  cardMenuItems: WritableSignal<MenuItem[]> = signal([
    this.acionService.ActionCopyMatingLink(),
  ]);

  // userDisplayCount = signal<number>(0);
  get userDisplayCount(): number {
    return this.generationsDisplayCount();
  }
  set userDisplayCount(value: number) {
    this.pedigreeStore.setGenerationsDisplayCount(value);
  }

  public current = 1;

  maxPedigreeHeight = computed(() =>
    this.media.lessThanSM() ? 'max-h-[100%]' : ''
  );

  maxPedigreeWidth = computed(() =>
    this.media.lessThanSM() ? 'max-w-[100%]' : 'max-w-[90%]'
  );
  inSeparatedUrl = input<boolean>(false);
  // TODO - computed
  showFullscreenButton = computed(
    () => !this.config.templates && !this.inSeparatedUrl()
  );
  pedigreeGeneration = this.pedigreeStore.pedigreeGeneration;
  flatPets = computed(() => {
    const initPet = this.pedigreeStore.pedigreePet();
    const pets: any[] = [];
    const filledPets = this.fillpets(pets, initPet);
    console.log(filledPets);
    return filledPets;
  });
  fillpets(pets: any[], pet: any) {
    if (!pet) return;
    pets.push(pet);
    this.fillpets(pets, pet.Mother);
    this.fillpets(pets, pet.Father);
    return pets;
  }
  generationsDisplayCount = this.pedigreeStore.generationsDisplayCount;
  constructor(public config: DynamicDialogConfig) {
    if (this.generationsDisplayCount() < 5)
      this.pedigreeStore.setGenerationsDisplayCount(5);

    effect(
      () => {
        console.log('PedigreeParams', this.params());
      },

    );
  }

  show(): void {
    this.ref = this.dialogService.open(PedigreePageComponent, {
      height: this.media.lessThanSM() ? '100%' : undefined,
      styleClass: this.maxPedigreeWidth() + ' ' + this.maxPedigreeHeight(),
      templates: {
        header: PedigreeHeaderComponent,
        footer: PedigreeFooterComponent,
      },
      width: this.media.lessThanSM() ? '100%' : undefined,
    });
  }

  saveToLitters(): void {
    // TODO - implement
  }
}
