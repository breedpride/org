import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthService } from '@bp/auth-store';
import { finalize, takeWhile, tap, timer } from 'rxjs';
import { AppFooterComponent } from '@breedpride/layout';

@Component({

  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    AppFooterComponent,
  ],
  providers: [],
  selector: 'bp-sign-out',
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
      <div class="flex w-full p-8 sm:px-[3.65rem]">
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
        <div class="z-20 flex w-full items-center justify-end space-x-6">
          <div class="text-secondary hidden lg:block">Go to</div>

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
              You have signed out!
            </div>

            <div class="text-secondary mt-2 flex justify-center">
              <!-- Redirect countdown -->
              @if (countdown > 0) { Redirecting in
              {{ countdown | i18nPlural : countdownMapping }}
              }

              <!-- Redirect message -->
              @if (countdown === 0) { You are now being redirected! }
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <bp-app-footer />
    </div>
  `
})
export class SignOutComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  countdown = 5;
  countdownMapping: any = {
    '=1': '# second',
    other: '# seconds',
  };

  /**
   * Constructor
   */
  constructor(private _authService: AuthService, private _router: Router) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Sign out
    this._authService.signOut();

    // Redirect after the countdown
    timer(1000, 1000)
      .pipe(
        finalize(() => {
          this._router.navigate(['sign-in']);
        }),
        takeWhile(() => this.countdown > 0),
        takeUntilDestroyed(this.destroyRef),
        tap(() => this.countdown--)
      )
      .subscribe();
  }
}

export const SignOutPage: Route = {
  loadChildren: () =>
    import('./sign-out.routing').then((m) => m.authSignOutRoutes),
  path: 'sign-out',
  pathMatch: 'full',
};
