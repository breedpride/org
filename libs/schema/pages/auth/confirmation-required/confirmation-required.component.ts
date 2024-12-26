import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { breedprideAnimations } from '@bp/core/consts';
import { AppFooterComponent } from '@breedpride/layout';

@Component({
  animations: breedprideAnimations,

  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    AppFooterComponent,
  ],
  selector: 'bp-confirmation-required',
  template: `
    <div class="relative flex h-screen w-full  flex-col bg-white sm:bg-none">
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
        <div class=" z-20 flex w-full items-center justify-end space-x-6">
          <div class="text-secondary hidden lg:block">Return to</div>

          <button
            type="button"
            class="rounded-full bg-pink-500 px-6 py-2.5 font-bold leading-tight text-white shadow-lg shadow-pink-300 transition duration-150 ease-in-out hover:translate-y-1 hover:shadow-lg hover:shadow-pink-300 focus:shadow-lg focus:shadow-pink-300 active:bg-pink-600 active:shadow-lg active:shadow-pink-300"
          >
            <a
              [routerLink]="['/sign-in']"
              class="font-bold leading-tight text-white"
              >Login page</a
            >
          </button>
        </div>
      </div>

      <!-- Page -->
      <div class="z-10 flex size-full items-start justify-center pt-[25vh]">
        <div
          class="w-full items-center justify-center bg-white sm:w-auto sm:rounded-2xl sm:border sm:px-10 sm:pb-10 sm:pt-8 sm:shadow-2xl md:flex"
        >
          <div class="mx-auto w-full max-w-80 sm:mx-0 sm:w-80">
            <!-- Title -->
            <div
              class="text-center font-mono text-3xl font-extrabold tracking-wide"
            >
              Confirmation required
            </div>
            <div class="text-secondary mt-2">
              A confirmation mail with instructions has been sent to your email
              address. Follow those instructions to confirm your email address
              and activate your account.
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <bp-app-footer />
    </div>
  `
})
export class ConfirmationRequiredComponent {}
export const ConfirmationRequiredPage: Route = {
  loadChildren: () =>
    import('./confirmation-required.routing').then(
      (m) => m.authConfirmationRequiredRoutes
    ),
  path: 'confirmation',
  pathMatch: 'full',
};
