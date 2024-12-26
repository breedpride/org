import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  input,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntitiesCounterComponent } from '@bh/counter';
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';

import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { SkeletonModule } from 'primeng/skeleton';
import { BaseLookupComponent } from '../base-lookup/base-lookup.component';
@Component({
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    CommonModule,
    FormsModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    SkeletonModule,
    EntitiesCounterComponent,
    IconFieldModule,
    InputIconModule,
    FloatLabelModule,
  ],
  selector: 'bp-input-autocomplete',
  styles: [``],
  template: `
    <!-- @let idS = id(); -->
    @if (mainForm()) {
    <!-- <p-inputGroup class="w-full"> -->
    <span class=" p-float-label p-fluid " [formGroup]="mainForm()">
      <p-floatlabel variant="on">
        <p-iconfield>
          <!-- <p-inputicon styleClass="pi pi-search" /> -->
          <p-autoComplete
            #autocomplete
            [id]="id()"
            [inputId]="id()"
            [suggestions]="options()"
            [formControlName]="id()"
            [name]="id()"
            [showClear]="true"
            [lazy]="true"
            [forceSelection]="false"
            [scrollHeight]="scrollHeight()"
            [virtualScroll]="true"
            [virtualScrollItemSize]="38"
            [virtualScrollOptions]="{
                showLoader: true,
                autoSize: false,
                scrollHeight: scrollHeight(),
              }"
            [autofocus]="false"
            [optionLabel]="store.config().displayField || 'Name'"
            [appendTo]="'body'"
            [completeOnFocus]="true"
            (completeMethod)="search($event)"
            (onLazyLoad)="store.onLazyLoad($event)"
            (onClear)="clearItem()"
            (onHide)="onHide(autocomplete)"
          >
            <ng-template #header>
              <bp-entities-counter
                [entitiesCount]="store.Entities().length"
                [isLoading]="store.isLoading()"
                [total]="store.total()"
                [timer]="200"
                mode="component"
              />
            </ng-template>

            <ng-template let-item #item>
              <!-- @if (lookupConfig().rowComponent) {
              <ng-container
                *ngComponentOutlet="
                  lookupConfig().rowComponent;
                  inputs: { item }
                " />
            } @else { -->
              <p>{{ item.Name }}</p>
              <!-- } -->
            </ng-template>

            <!-- <ng-template
            let-item
            #selectedItem>
            {{ item | json }}
            @if (lookupConfig().rowComponent) {
              <ng-container
                *ngComponentOutlet="
                  lookupConfig().rowComponent;
                  inputs: { item }
                " />
            } @else {
              <p>{{ item.Name }}</p>
            }
          </ng-template> -->
            <ng-template let-entity #loader let-options="options">
              <p-skeleton
                height="26px"
                [style]="{ 'margin-top': '6px' }"
              ></p-skeleton>
            </ng-template>
          </p-autoComplete>
        </p-iconfield>
        <label [for]="id()">
          {{ placeholder() }}
          @if (required()) { * }
        </label>
      </p-floatlabel>
    </span>
    <!-- </p-inputGroup> -->
    @if (control().invalid && (control().dirty || control().touched)) {
    <div class="text-md absolute ml-3 mt-[3px] text-red-500">
      @if (control().errors?.['required']) {
      <div>{{ placeholder() }} is required</div>
      } @if (control().errors?.['dictionary']) {
      <div>{{ placeholder() }} is incorrect</div>
      }
    </div>
    } }
  `,
})
export class InputAutocompleteComponent extends BaseLookupComponent {
  afterClear = false;

  onHide(autocomplete: AutoComplete): void {
    if (autocomplete.value === '' && this.afterClear) {
      this.afterClear = false;
      autocomplete.show();
    }
  }
  constructor() {
    super();
    effect(() => {
      // Add your effect logic here or remove the effect if not needed
    });
  }

  dropdown = input<boolean>(false);

  options = computed(() => this.store.Entities() || []);

  scrollHeight = computed(() => (this.store.isLoading() ? '192px' : '190px'));

  clearItem(): void {
    // this.afterClear = true;
    this.changeQuery('');
  }

  search($event: AutoCompleteCompleteEvent): void {
    this.changeQuery($event.query?.toUpperCase());
  }
}
