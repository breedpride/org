import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { nullId } from '@bh/identifying';
import { trackByFn } from '@bh/list';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { ScrollerModule } from 'primeng/scroller';
import { childrenShahArpilin } from './pet-chilren-values';
import { PetLitterCardComponent } from './pet-litter-card.component';
import { TabHeaderComponent } from '@breedpride/page-template';
import { PageContentStore } from '@bp/page-content-store';
import { NAME_BLOCK_HEIGHT } from '@bh/utils';
import { PageTabStore } from '@bp/page-tab-store';
import { SectionComponent } from '@breedpride/page-template';

@Component({
  selector: 'pet-dinamic-children',
  imports: [
    CommonModule,
    PetLitterCardComponent,
    ScrollerModule,
    TabHeaderComponent,
    SectionComponent,
  ],
  template: `
    <!-- <p-virtualscroller
      scrollHeight="100vh"
      [itemSize]="600"
      [items]="getFirst"
      [lazy]="false"
      [showLoader]="true">
      <ng-template
        let-row
        #item
        let-options>
        <pet-pet-litter-card
          [childGroup]="row"
          [pet]="pet" /> </ng-template
    ></p-virtualscroller> -->
    <bh-section />
    <section class="relative">
      @let t = tabStore(); @if (t) {
      <bp-tab-header
        [i]="0"
        [tab]="t"
        class="sticky z-10"
        [ngStyle]="{
                    top: tabFragmentTop() + 'px',
                  }"
      />
      } @if (getFirst && getFirst.length > 0) {
      <div
        class="mt-3 grid gap-3"
        [ngClass]="{
          'lg:grid-cols-2': fullscreen(),
        }"
      >
        @for (childGroup of getFirst; track trackByFn($index, childGroup)) {
        <pet-pet-litter-card
          class="flex flex-auto flex-col "
          [childGroup]="childGroup"
          [pet]="pet"
        />
        }
      </div>
      }
    </section>
  `,
  styles: `
    .children-grid {
      grid-template-columns: 52px auto;

      @screen sm {
        grid-template-columns: 100px auto;
      }

      @screen md {
        grid-template-columns: 110px auto;
      }
    }

    .children-grid-full {
      grid-template-columns: 110px auto;

      @screen lg {
        grid-template-columns: 115px auto;
      }

      @screen xl {
        grid-template-columns: 130px auto;
      }
    }
  `,

})
export class DinamicChildrenComponent {
  tab = input();
  tabStore = signal<null | PageTabStore>(null);
  trackByFn = trackByFn;
  fullscreen = injectFullscreen();
  constructor() {
    const store = new PageTabStore();
    effect(
      () => {
        this.tabStore.set(store);
      },

    );
  }
  groups = childrenShahArpilin;
  pet = {
    Id: '0aa8fbf9-b1e9-4ece-add6-921dcc683236',
    HasNotes: false,
    PetIdentifiers: [],
    PetTitles: [],
    VerificationStatus: { Id: nullId, Name: 'adsfasdf' },
    Sex: {
      Id: '71513fb2-19bb-4812-86d4-2e6986297e4b',
      Name: 'Male',
      Code: 'male',
    },
  };
  getFirst = childrenShahArpilin.map((e) => {
    return {
      anotherParent: e.Mother,
      date: new Date(e.DateOfBirth),
      pets: e.Children,
    };
  });
  nameOnTop = inject(PageContentStore).nameOnTop;
  tabFragmentTop = computed(() => NAME_BLOCK_HEIGHT);
  // anotherParentRole = computed(() =>
  //   this.pet().Sex?.Code === 'male' ? 'Mother' : 'Father'
  // );
}
