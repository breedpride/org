import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { injectFiltersStore } from '@bh/collection-filtration';
import { trackByFn } from '@bh/list';
import { chunkArray } from '@breedpride/api';
import { EntitiesCounterComponent } from '@bh/counter';
import { CardMode } from '@bh/types';
import { SpaceScrollerComponent } from '@bh/collection-view-scroller';
import { MediaStore } from '@bp/media-store';
import { toObservableSignal } from 'ngxtension/to-observable-signal';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ScrollerModule } from 'primeng/scroller';
import { SkeletonModule } from 'primeng/skeleton';
import { debounceTime, EMPTY, switchMap, tap } from 'rxjs';
import { injectSpaceStore, EntityListStore } from '@bh/collection-store';


@Component({
  imports: [
    CommonModule,
    ScrollerModule,
    SkeletonModule,
    ReactiveFormsModule,
    ButtonModule,
    SpaceScrollerComponent,
    EntitiesCounterComponent,
  ],
  providers: [],
  selector: 'bp-entity-selector',
  styles: [],
  template: `
    <div class="">
      <div class="flex w-full items-center justify-between">
        <span class="text-4xl font-extrabold ">
          {{ naming?.title }}
        </span>
        <bp-entities-counter
          [entitiesCount]="spaceStore.EntitiesCount()"
          [isLoading]="spaceStore.isLoading()"
          [total]="spaceStore.total()"
        />
        <!-- <bp-view-changer [spaceStore]="spaceStore" /> -->
      </div>

      <!-- Search -->
      <div class="mb-6 mt-1 flex-auto">
        <span class="bp-search p-input-icon-left min-w-50 w-full ">
          <i class="pi pi-search"></i>
          <input
            type="text"
            pinputtext=""
            placeholder="{{ naming?.searchPlaceholder }}"
            [formControl]="searchInputControl"
            class="p-inputtext p-component p-element w-full"
          />
        </span>
      </div>
      <div class="border-t">
        <bp-space-scroller [mode]="mode" [scrollHeight]="scrollHeight()" />
      </div>
      <!-- Action buttons -->
      <div class="mt-6 grid grid-cols-2 gap-3">
        <button
          pButton
          label="Cancel"
          class="p-button-text p-button-secondary  bg-secondary-100 hover:bg-secondary-200 focus:bg-secondary-300"
          (click)="ref.close()"
        ></button>
        <button
          pButton
          pRipple
          [disabled]="!spaceStore.SelectedId()"
          type="button"
          label="Select"
          (click)="spaceStore.completeSelect()"
          class="p-button-text bg-primary-50 hover:bg-primary-100 focus:bg-primary-200"
        ></button>
      </div>
    </div>
  `,
})
export class EntitySelectorComponent implements OnInit {
  filterStore = injectFiltersStore();
  spaceStore = injectSpaceStore();
  destroyRef = inject(DestroyRef);
  naming;
  searchInputControl: UntypedFormControl = new UntypedFormControl();
  trackByFn = trackByFn;
  mode: CardMode = 'select';
  media = inject(MediaStore);
  items = computed(() => {
    return chunkArray(
      { array: this.spaceStore.Entities(), n: 1 } // this.spaceStore.grid() ? this.columnsPerRow() : 1
    );
  });
  realEntities: any[] = [];
  a = toObservableSignal(this.items);
  constructor(
    public dialogConfig: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {
    this.a
      .pipe(
        tap((entities) => {
          this.realEntities = entities;
        }),
        debounceTime(100)
      )
      .subscribe((entities) => {
        const newHeight = this.scrollHeight() === '300px' ? '301px' : '300px';
        this.scrollHeight.set(newHeight);
      });
    if (this.dialogConfig.data) {
      this.spaceStore.setDefaults(this.dialogConfig.data.spaceConfig);
      this.spaceStore.setRef(ref);
      // TODO - use filterFn in from config
      // this.spaceStore.setParams({});
      this.filterStore.setFilterParams({});
      this.naming = this.dialogConfig.data.spaceConfig.naming;
    }
    // TODO - spaceStore SelectionComplete
    effect(() => {
      // const complete = this.spaceStore.selectionComplete();
      // console.log('complete', complete);
      // if (complete) {
      //   this.doSelect();
      // }
    });
  }

  scrollHeight = signal('300px');

  // signal('300px');
  columnsPerRow = computed(() => {
    return 2; // TODO relative to screen size x/2 round
  });

  // gridStyleClass = computed(() =>
  //   this.spaceStore.grid() ? `grid grid-cols-${this.columnsPerRow()} ` : ''
  // );
  needCardClass = computed(() => this.media.moreThanMD());

  ngOnInit(): void {
    this.searchInputControl.valueChanges
      .pipe(
        debounceTime(300),
        takeUntilDestroyed(this.destroyRef),
        switchMap((query) => {
          // TODO rework
          // this.spaceStore.changeQuery(query?.toUpperCase());
          return EMPTY;
        })
      )
      .subscribe();
  }
}
