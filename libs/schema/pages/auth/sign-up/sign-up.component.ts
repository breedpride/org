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
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Route, Router, RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { breedprideAnimations } from '@bp/core/consts';
import { AuthService } from '@bp/auth-store';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
@Component({
  animations: breedprideAnimations,

  imports: [
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    ButtonModule,
  ],
  selector: 'bp-sign-up',
  template: `
    <div class="flex size-full min-w-0 flex-col overflow-hidden">
      <!-- Background -->
      <div class="-z-1 absolute bottom-0 w-full">
        <svg-icon
          name="footer-figure"
          [svgStyle]="{ width: '100%' }"
        ></svg-icon>
      </div>

      <!-- Header -->
      <div class="flex w-full px-8 py-3 sm:px-24">
        <!-- Logo -->
        <div class="">
          <img
            class="h-9"
            src="assets/images/logo/logo-text.svg"
            alt="Breedpride Logo"
          />
        </div>
        <div class="flex w-full items-center justify-end space-x-6">
          <div class="text-secondary hidden lg:block">
            Already have an account?
          </div>

          <button
            type="button"
            class="rounded-full bg-pink-500 px-6 py-2.5 font-bold leading-tight text-white shadow-lg shadow-pink-300 transition duration-150 ease-in-out hover:translate-y-1 hover:shadow-lg hover:shadow-pink-300 focus:shadow-lg focus:shadow-pink-300 active:bg-pink-600 active:shadow-lg active:shadow-pink-300"
          >
            <a
              [routerLink]="['/sign-in']"
              class="font-bold leading-tight text-white"
              >Sign in</a
            >
          </button>
        </div>
      </div>

      <!-- Page -->
      <div class="flex size-full min-w-0 items-center justify-center">
        <div
          class="w-full  items-center justify-center bg-white/0 sm:w-auto sm:rounded-2xl sm:border sm:bg-white/100 sm:px-10 sm:pb-10 sm:pt-8 sm:shadow-2xl md:flex"
        >
          <div class="mx-auto w-full max-w-80 sm:mx-0 sm:w-80">
            <!-- Title -->
            <div
              class="text-center font-mono text-3xl font-extrabold tracking-wide"
            >
              Let's get started!
            </div>
            <button
              class="shadow-primary-200 mt-4 w-full shadow-lg"
              pRipple
              pButton
              label="Start with Facebook"
            ></button>
            <!-- Separator -->
            <div class="mt-6 flex items-center">
              <div class="mt-px flex-auto border-t"></div>
              <div class="text-secondary mx-2">Or sing up with email</div>
              <div class="mt-px flex-auto border-t"></div>
            </div>

            <!-- Sign Up form -->
            <form class="mt-2" [formGroup]="signUpForm">
              <!-- Name field -->
              <mat-form-field class="w-full">
                <mat-label>Full name</mat-label>
                <input id="name" matInput [formControlName]="'name'" />
                @if (signUpForm.get('name')?.hasError('required')) {
                <mat-error> Full name is required </mat-error>
                }
              </mat-form-field>

              <!-- Email field -->
              <mat-form-field class="w-full">
                <mat-label>Email address</mat-label>
                <input id="email" matInput [formControlName]="'email'" />
                @if (signUpForm.get('email')?.hasError('required')) {
                <mat-error> Email address is required </mat-error>
                } @if (signUpForm.get('email')?.hasError('email')) {
                <mat-error> Please enter a valid email address </mat-error>
                }
              </mat-form-field>

              <!-- Password field -->
              <mat-form-field class="w-full">
                <mat-label>Password</mat-label>
                <input
                  id="password"
                  matInput
                  type="password"
                  [formControlName]="'password'"
                  #passwordField
                />
                <button
                  mat-icon-button
                  type="button"
                  (click)="
                    passwordField.type === 'password'
                      ? (passwordField.type = 'text')
                      : (passwordField.type = 'password')
                  "
                  matSuffix
                >
                  @if (passwordField.type === 'password') {
                  <mat-icon
                    class="icon-size-5"
                    [svgIcon]="'heroicons_solid:eye'"
                  ></mat-icon>
                  } @if (passwordField.type === 'text') {
                  <mat-icon
                    class="icon-size-5"
                    [svgIcon]="'heroicons_solid:eye-off'"
                  ></mat-icon>
                  }
                </button>
                <mat-error>Password is required</mat-error>
              </mat-form-field>

              <!-- Company field -->
              <mat-form-field class="w-full">
                <mat-label>Kennel</mat-label>
                <input
                  id="company-confirm"
                  matInput
                  [formControlName]="'company'"
                />
              </mat-form-field>

              <!-- ToS and PP -->
              <div class="mt-1.5 inline-flex w-full items-end">
                <mat-checkbox
                  [color]="'primary'"
                  [formControlName]="'agreements'"
                >
                  <span>I agree to the</span>
                  <a
                    class="text-primary-500 ml-1 hover:underline"
                    [routerLink]="['./']"
                  >
                    Terms of Service
                  </a>
                  <span>and</span>
                  <a
                    class="text-primary-500 ml-1 hover:underline"
                    [routerLink]="['./']"
                  >
                    Privacy Policy
                  </a>
                </mat-checkbox>
              </div>

              <!-- Submit button -->
              <button
                class="breedpride-mat-button-large shadow-primary-200 mt-4 w-full rounded-xl shadow-lg"
                mat-flat-button
                [color]="'primary'"
                [disabled]="signUpForm.disabled"
                (click)="signUp()"
              >
                @if (!signUpForm.disabled) {
                <span>Create your account</span>
                } @if (signUpForm.disabled) {
                <mat-progress-spinner
                  [diameter]="24"
                  [mode]="'indeterminate'"
                ></mat-progress-spinner>
                }
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="bottom-0 flex h-20 w-full items-center px-4 sm:h-32 md:px-6">
        <span class="font-medium text-white">Breedhub &copy; 2024</span>
      </div>
    </div>
  `
})
export class AuthSignUpComponent implements OnInit {
  signUpForm!: UntypedFormGroup;
  @ViewChild('signUpNgForm') signUpNgForm!: NgForm;
  messageService = inject(MessageService);

  /**
   * Constructor
   */
  constructor(
    private _authService: AuthService,
    private _formBuilder: UntypedFormBuilder,
    private _router: Router
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.signUpForm = this._formBuilder.group({
      agreements: ['', Validators.requiredTrue],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign up
   */
  signUp(): void {
    // Do nothing if the form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    // Disable the form
    this.signUpForm.disable();

    // Sign up
    this._authService.signUp(this.signUpForm.value).subscribe(
      () => {
        // Navigate to the confirmation required page
        this._router.navigateByUrl('/confirmation-required');
      },
      () => {
        // Re-enable the form
        this.signUpForm.enable();

        // Reset the form
        this.signUpNgForm.resetForm();

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

export const SignUpPage: Route = {
  loadChildren: () =>
    import('./sign-up.routing').then((m) => m.authSignupRoutes),
  path: 'sign-up',
  pathMatch: 'full',
};
