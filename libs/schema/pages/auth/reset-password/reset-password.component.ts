import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { breedprideAnimations } from '@bp/core/consts';
import { AuthService } from '@bp/auth-store';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { finalize } from 'rxjs';
import { AppFooterComponent } from '@breedpride/layout';
import { BreedPrideValidators } from './validators';

@Component({
  animations: breedprideAnimations,

  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    AppFooterComponent,
  ],
  selector: 'bp-reset-password',
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
            class="h-7 "
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
      <div class="z-10 flex size-full items-start justify-center pt-[21vh]">
        <div
          class="w-full items-center justify-center bg-white sm:w-auto sm:rounded-2xl sm:border sm:px-10 sm:pb-10 sm:pt-8 sm:shadow-2xl md:flex"
        >
          <div class="mx-auto w-full max-w-80 sm:mx-0 sm:w-80">
            <!-- Title -->
            <div
              class="text-center font-mono text-3xl font-extrabold tracking-wide"
            >
              Reset your password
            </div>
            <div class="text-secondary mt-2">
              Create a new password for your account
            </div>

            <span class="p-float-label p-fluid mt-7">
              <p-password [toggleMask]="false" class=""></p-password>
              <label for="password">Password</label>
            </span>

            <!-- <span class="p-float-label p-fluid mt-5">
              <p-password
                [toggleMask]="false"
                class=""></p-password>
              <label for="password">Password (confirm)</label>
            </span> -->

            <!-- Submit button -->

            <button
              class="shadow-primary-200 mt-8 w-full shadow-lg"
              pRipple
              pButton
              label="Reset your password"
              (click)="resetPassword()"
            ></button>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <bp-app-footer />
    </div>
  `
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: UntypedFormGroup;
  @ViewChild('resetPasswordNgForm') resetPasswordNgForm!: NgForm;
  messageService = inject(MessageService);

  /**
   * Constructor
   */
  constructor(
    private _authService: AuthService,
    private _formBuilder: UntypedFormBuilder
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.resetPasswordForm = this._formBuilder.group(
      {
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
      },
      {
        validators: BreedPrideValidators.mustMatch(
          'password',
          'passwordConfirm'
        ),
      }
    );
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Reset password
   */
  resetPassword(): void {
    // Return if the form is invalid
    if (this.resetPasswordForm.invalid) {
      return;
    }

    // Disable the form
    this.resetPasswordForm.disable();

    // Send the request to the server
    this._authService
      .resetPassword(this.resetPasswordForm.get('password')?.value)
      .pipe(
        finalize(() => {
          // Re-enable the form
          this.resetPasswordForm.enable();

          // Reset the form
          this.resetPasswordNgForm.resetForm();
        })
      )
      .subscribe(
        () => {
          this.messageService.add({
            // detail: 'Message Content',
            // key: 'myKey',
            severity: 'success',
            summary: 'Your password has been reset.',
          });
        },
        () => {
          this.messageService.add({
            // detail: 'Message Content',
            // key: 'myKey',
            severity: 'error',
            summary: 'Something went wrong, please try again.',
          });
        }
      );
  }
}

export const ResetPasswordPage: Route = {
  loadChildren: () =>
    import('./reset-password.routing').then((m) => m.authResetPasswordRoutes),
  path: 'reset-password',
  pathMatch: 'full',
};
