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
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { breedprideAnimations } from '@bp/core/consts';
import { AuthService } from '@bp/auth-store';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { AppFooterComponent } from '@breedpride/layout';
@Component({
  animations: breedprideAnimations,

  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    ToastModule,
    AppFooterComponent,
  ],
  selector: 'bp-sign-in',
  template: `
    <div class="relative flex h-screen w-full  flex-col  bg-white sm:bg-none">
      <!-- Background -->
      <div class="z-1 absolute bottom-0 w-full">
        <svg-icon
          name="footer-figure"
          [svgStyle]="{ width: '100%' }"
        ></svg-icon>
      </div>

      <!-- Header -->
      <div class="flex w-full  p-8 sm:px-[3.65rem]">
        <!-- Logo -->
        <a
          aria-label="Main page"
          [routerLink]="['/']"
          class="app-logo absolute z-20"
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
      </div>

      <!-- Page -->
      <div class="z-10 flex size-full items-start justify-center pt-[18vh]">
        <div
          class="w-full items-center justify-center bg-white sm:w-auto sm:rounded-2xl sm:border sm:px-10 sm:pb-10 sm:pt-8 sm:shadow-2xl md:flex"
        >
          <div class="mx-auto w-full max-w-80 sm:mx-0 sm:w-80">
            <!-- Title -->
            <div
              class="text-center font-mono text-3xl font-extrabold tracking-wide"
            >
              Welcome!
            </div>
            <button
              class="shadow-primary-200 mt-7 w-full shadow-lg"
              pRipple
              pButton
              (click)="signInWithFacebook()"
              icon="pi pi-facebook"
              label="Login with Facebook"
            ></button>
            <!-- Separator -->
            <div class="mt-10 flex items-center">
              <div class="mt-px flex-auto border-t"></div>
              <div class="text-secondary mx-2">Or login with email</div>
              <div class="mt-px flex-auto border-t"></div>
            </div>

            <!-- Sign in form -->
            <form [formGroup]="signInForm" #signInNgForm="ngForm">
              <div class="mt-8 space-y-8">
                <span class="p-float-label p-fluid mt-3">
                  <input pInputText formControlName="email" id="username" />
                  <label htmlFor="username">Username</label>
                </span>
                <span class="p-float-label p-fluid">
                  <p-password
                    formControlName="password"
                    [toggleMask]="false"
                    class=""
                  ></p-password>
                  <label for="password">Password</label>
                </span>
              </div>
            </form>
            <!-- Actions -->
            <div class="inline-flex w-full items-end justify-end">
              <a
                class="text-md text-primary-500 hover:underline"
                [routerLink]="['/forgot-password']"
              >
                Forgot password?
              </a>
            </div>

            <!-- Submit button -->
            <button
              class="p-button-secondary shadow-secondary-200 mt-4 w-full shadow-lg"
              pRipple
              pButton
              (click)="signInFirebase()"
              label="Login"
            ></button>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <bp-app-footer />
    </div>
  `
})
export class SignInComponent implements OnInit {
  messageService = inject(MessageService);
  signInForm!: UntypedFormGroup;
  @ViewChild('signInNgForm') signInNgForm!: NgForm;

  /**
   * Constructor
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
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
    this.signInForm = this._formBuilder.group({
      email: [
        'hughes.brian@company.com',
        [Validators.required, Validators.email],
      ],
      password: ['admin', Validators.required],
      rememberMe: [''],
    });
  }

  signInFirebase(): void {
    // Return if the form is invalid
    if (this.signInForm.invalid) {
      return;
    }

    // Disable the form
    this.signInForm.disable();

    this._authService.signInV2(this.signInForm.value).subscribe({
      complete: () => {
        console.log('firebase auth, success');

        // Set the redirect url.
        // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
        // to the correct page after a successful sign in. This way, that url can be set via
        // routing file and we don't have to touch here.
        const redirectURL =
          this._activatedRoute.snapshot.queryParamMap.get('redirectURL') ||
          '/signed-in-redirect';

        // Navigate to the redirect url
        this._router.navigateByUrl(redirectURL);
      },
      error: () => {
        console.log('firebase auth, error');

        // Re-enable the form
        this.signInForm.enable();

        // Reset the form
        // this.signInNgForm.resetForm();

        this.messageService.add({
          // detail: 'Message Content',
          // key: 'myKey',
          severity: 'error',
          summary: 'Wrong email or password',
        });
      },
    });
  }
  signInWithApple(): void {
    this._authService.loginWithGoogle();
  }
  signInWithFacebook(): void {
    this._authService.signInWithFacebook().subscribe({
      complete: () => {
        console.log('facebook auth, success');

        // Set the redirect url.
        // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
        // to the correct page after a successful sign in. This way, that url can be set via
        // routing file and we don't have to touch here.
        const redirectURL =
          this._activatedRoute.snapshot.queryParamMap.get('redirectURL') ||
          '/signed-in-redirect';

        // Navigate to the redirect url
        this._router.navigateByUrl(redirectURL);
      },
      error: () => {
        console.log('google auth, error');

        // Re-enable the form
        this.signInForm.enable();

        // Reset the form
        this.signInNgForm.resetForm();
        this.messageService.add({
          // detail: 'Message Content',
          // key: 'myKey',
          severity: 'error',
          summary: 'facebook login problem',
        });
      },
    });
  }

  // -----------------------------------------------------------------------------------------------------
  signInWithGoogle(): void {
    this._authService.loginWithGoogle().subscribe({
      complete: () => {
        console.log('google auth, success');

        // Set the redirect url.
        // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
        // to the correct page after a successful sign in. This way, that url can be set via
        // routing file and we don't have to touch here.
        const redirectURL =
          this._activatedRoute.snapshot.queryParamMap.get('redirectURL') ||
          '/signed-in-redirect';

        // Navigate to the redirect url
        this._router.navigateByUrl(redirectURL);
      },
      error: () => {
        console.log('google auth, error');

        // Re-enable the form
        this.signInForm.enable();

        // Reset the form
        this.signInNgForm.resetForm();

        this.messageService.add({
          // detail: 'Message Content',
          // key: 'myKey',
          severity: 'error',
          summary: 'Google login problem',
        });
      },
    });
  }
  signInWithTwitter(): void {
    this._authService.signInWithTwitter();
  }
}

export const SignInPage: Route = {
  loadChildren: () =>
    import('./sign-in.routing').then((m) => m.authSignInRoutes),
  path: 'sign-in',
  pathMatch: 'full',
};
