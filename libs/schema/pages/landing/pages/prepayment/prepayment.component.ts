import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Params, Route, Router, RouterModule } from '@angular/router';
import { BPFormGroup, } from '@bh/form';
import {EntityListStore,} from '@bh/collection-store'
import {  FormFieldComponent } from '@bh/editing';
import { PET_FIELD_CONFIG } from '@bh/entity/config';
import { BreedPage } from '@bh/types';
import { ApiService } from '@breedpride/api';
import { AppFooterComponent } from '@breedpride/layout';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { TierSelectorComponent } from '../../lib/tier-selector/tier-selector.component';
@Component({
  imports: [
    CommonModule,
    ButtonModule,
    FormFieldComponent,
    FormsModule,
    ReactiveFormsModule,
    TierSelectorComponent,
    AngularSvgIconModule,
    RouterModule,
    AppFooterComponent,
  ],
  providers: [FormGroupDirective],
  selector: 'bp-prepayment',
  styles: [],
  template: `
    <!-- <div *ngIf="breedPage">{{ breedPage.Name }}</div>
    <div *ngIf="!queryParams.breed">
      Select breed for support
      <form [formGroup]="entityForm">
        <bp-form-field [config]="config" />
        <button
          pButton
          label="select"
          [disabled]="!entityForm.valid"
          (click)="applyFilterClick()"></button>
      </form>
    </div>
    <bp-tier-selector
      *ngIf="!queryParams.product || !queryParams.billingType"
      [queryParams]="queryParams"
      [starTier]="1"
      [billingType]="billingType" /> -->

    <div
      class="relative flex min-h-[100vh] w-full  flex-col bg-white sm:bg-none"
    >
      <!-- Background -->
      <div class="z-1 absolute bottom-0 w-full">
        <svg-icon
          name="footer-figure"
          [svgStyle]="{ width: '100%' }"
        ></svg-icon>
      </div>

      <!-- Header -->
      <div class=" flex w-full p-8 sm:px-[3.65rem]">
        <!-- Logo -->
        <a
          aria-label="Main page"
          [routerLink]="['/']"
          class="app-logo absolute z-30"
        >
          <img
            class="h-9"
            src="assets/images/logo/logo-text.svg"
            alt="breedpride logo"
          />

          <button
            class="layout-sidebar-anchor p-link"
            type="button"
            aria-label="goto main"
          ></button>
        </a>
        <!-- <div class="z-20 flex w-full items-center justify-end space-x-6">
          <div class="text-secondary hidden lg:block">Return to</div>

          <button
            type="button"
            class="rounded-full bg-pink-500 px-6 py-2.5 font-bold leading-tight text-white shadow-lg shadow-pink-300 transition duration-150 ease-in-out hover:translate-y-1 hover:shadow-lg hover:shadow-pink-300 focus:shadow-lg focus:shadow-pink-300 active:bg-pink-600 active:shadow-lg active:shadow-pink-300">
            <a
              [routerLink]="['/sign-in']"
              class="font-bold leading-tight text-white"
              >Login page</a
            >
          </button>
        </div> -->
      </div>

      <!-- Page select tier-->
      <div
        class="z-10 flex w-full flex-col items-center justify-center pt-[4vh]  "
      >
        <div class="max-w-screen md:max-w-6xl">
          <div class="flex flex-col space-y-3 text-center">
            @if (breedPage) {
            <div class="px-8 font-mono text-2xl tracking-wide sm:px-[3.65rem]">
              Thank you! You are becoming a Patron of the
              {{ breedPage.Name }} breed
            </div>
            }
            <div class="text-secondary">Please select your tier</div>
          </div>

          @if (!queryParams['product'] || !queryParams['billingType']) {
          <bp-tier-selector
            [queryParams]="queryParams"
            [starTier]="1"
            [billingType]="billingType"
            [mode]="'payment'"
          />
          }
        </div>
      </div>

      @if (!queryParams['breed']) {
      <div class="z-10 flex size-full items-start justify-center pt-[17vh]">
        <div
          class="w-full items-center justify-center bg-white sm:w-auto sm:rounded-2xl sm:border sm:px-10 sm:pb-10 sm:pt-8 sm:shadow-2xl md:flex"
        >
          <div
            class="mx-auto flex w-full max-w-80 flex-col space-y-4 sm:mx-0 sm:w-80"
          >
            <!-- Title -->
            <div
              class="text-center font-mono text-3xl font-extrabold tracking-wide"
            >
              Select a breed you want to support
            </div>
            <div class="text-secondary flex flex-col  space-y-2 ">
              <span>
                Thank you! You are becoming a Patron of your favorite breed.
                Choosing a breed for the support you are contributing to the
                breed development in an amount of your payment.</span
              ><span>
                You will become a breed Patron from the moment your payment is
                processed.
              </span>
            </div>

            <form [formGroup]="entityForm">
              <div class="mt-3 flex flex-col space-y-8">
                <bp-form-field [config]="config" />
                <button
                  pButton
                  label="select"
                  [disabled]="!entityForm.valid"
                  (click)="applyFilterClick()"
                ></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      }

      <!-- Footer -->
      <bp-app-footer />
    </div>
  `,
})
export class PrePaymentComponent implements OnInit {
  // ref: DynamicDialogRef = inject(DynamicDialogRef);
  router = inject(Router);
  entityForm = new BPFormGroup({});
  config = PET_FIELD_CONFIG.Breed;
  @Input() queryParams!: Params;
  billingType: WritableSignal<number> = signal(0);
  breedPage!: BreedPage;
  ch = inject(ChangeDetectorRef);
  readonly api = inject(ApiService);
  // private splashService: SplashScreenService
  constructor() {
    this.entityForm.addControl(
      'Breed',
      new FormControl(null, this.config.validators)
    );
  }
  ngOnInit(): void {
    if (this.queryParams['breed']) {
      this.api
        .getPageByIdAndModel('Breed', this.queryParams['breed'])
        .subscribe((creatioPage) => {
          this.breedPage = creatioPage.data as BreedPage;
          this.ch.markForCheck();
        });
      //TODO loadd
    }
  }

  applyFilterClick() {
    console.log(this.queryParams);
    this.router.navigate(['../', 'payments'], {
      queryParams: {
        breed:
          this.queryParams['breed'] || this.entityForm?.get('Breed')?.value.Id,
        ...this.queryParams,
      },
    });
    // this.ref?.close(this.entityForm.get('Breed').value);
  }
}

export const PrePaymentPage: Route = {
  loadChildren: () =>
    import('./prepayment.routing').then((m) => m.breedSelectRoutes),
  path: 'prepayment',
  pathMatch: 'full',
};
