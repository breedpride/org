import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  OnInit,
  inject,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { URL_MY, WELCOME_URL } from '@bh/space-url';
import { MajorPointComponent } from '@bh/user';
import { WithViewportHeightDirective } from '@bh/viewport';
import { CardWrapperDirective } from '@breedpride/wrapper';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { WelcomeContactNameComponent } from './components/welcome-contact-name/welcome-contact-name.component';
import { WelcomeCoverComponent } from './components/welcome-cover/welcome-cover.component';
import { WelcomeKennelNameComponent } from './components/welcome-kennel-name/welcome-kennel-name.component';
import { WelcomeKenneVerificationlComponent } from './components/welcome-kennel-verification/welcome-kennel-verification.component';
import { WelcomeMergeComponent } from './components/welcome-merge/welcome-merge.component';
import { WelcomeReferralComponent } from './components/welcome-referral/welcome-referral.component';
import { WelcomeSettingsComponent } from './components/welcome-settings/welcome-settings.component';
import { WelcomeSiteComponent } from './components/welcome-site/welcome-site.component';
import { WelcomeTierSelectionComponent } from './components/welcome-tier-selection/welcome-tier-selection.component';
import { WelcomeService } from './welcome.service';

@Component({
  imports: [
    AngularSvgIconModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TimelineModule,
    MajorPointComponent,
    ButtonModule,
    CardWrapperDirective,
  ],
  hostDirectives: [WithViewportHeightDirective],
  providers: [],
  selector: 'bp-welcome-page',
  styles: `
    .custom-marker {
      display: flex;
      width: 2rem;
      height: 2rem;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      border-radius: 50%;
      border: 0.15rem solid #673ab7;
      z-index: 1;
    }

    ::ng-deep {
      .p-timeline-event-content,
      .p-timeline-event-opposite {
        line-height: 1;
      }
      .p-timeline-vertical.p-timeline-alternate
        .p-timeline-event:nth-child(2n)
        .p-timeline-event-content {
        .card {
          flex-direction: row-reverse;
        }
      }
    }

    .timeline-right {
      ::ng-deep {
        .p-timeline.p-timeline-vertical .p-timeline-event-opposite {
          padding: 0 0 0 0rem;
        }
        .p-timeline.p-timeline-vertical .p-timeline-event-content {
          padding: 0 0 0 1rem;
        }

        .customized-timeline {
          .p-timeline-event:nth-child(even) {
            flex-direction: row !important;
            .card {
              flex-direction: row !important;
            }

            .p-timeline-event-content {
              text-align: left !important;
              padding: 5px 0 5px 1rem !important;
            }
          }
          .p-timeline-event-opposite {
            flex: 0;
            min-width: 0;
          }
          card {
            margin-top: 1rem;
          }
        }
      }
    }
  `,
  template: `
    <div bpCardWrapper [mode]="'centrated'">
      <div class="w-full max-w-6xl">
        <div class="flex w-full items-center">
          <span class="text-[1.75rem] font-semibold">Welcome</span>
        </div>
        <div class="flex w-full">
          <div class="flex w-full flex-col space-y-8 py-8 ">
            <div class="flex flex-col md:flex-row ">
              <div
                class="order-2 mr-20 mt-8 flex flex-col space-y-2 md:order-1 md:mt-0"
              >
                <span class="text-2xl font-semibold"
                  >Start your experience with Breedhub</span
                >
                <div class="text-secondary max-w-xl leading-7">
                  To make your experience in Breedhub more convenient, we have
                  developed simple steps for setting up your account.
                </div>
              </div>
              <div class="order-1 ml-auto shrink-0 md:order-2">
                <bp-major-point
                  name="Completed steps"
                  secondaryName="from 10"
                  value="3"
                  valueClass="text-accent"
                />
              </div>
            </div>
            <p-timeline
              [value]="steps"
              align="alternate"
              styleClass="customized-timeline "
              [ngClass]="{
                'timeline-right': rightTimeline,
              }"
            >
              <ng-template #marker let-step>
                <span
                  class="custom-marker shadow-2 duration-300 group-hover:scale-110"
                  [style.backgroundColor]="step.color"
                >
                  <i [ngClass]="step.icon"></i>
                </span>
              </ng-template>
              <ng-template #content let-step>
                <div
                  class="card group flex  w-full items-center justify-between px-6 pb-4 pt-6 hover:shadow-lg"
                >
                  <div class="flex flex-col space-y-2">
                    <div class="text-2xl font-semibold">
                      {{ step.header }}
                    </div>
                    <div class=" pt-2 leading-relaxed">
                      {{ step.content }}
                    </div>
                    <div>
                      <button
                        aria-label="Start step"
                        pRipple
                        pButton
                        type="button"
                        label="Start step"
                        (click)="openStep(step)"
                        class="p-button-text p-button-rounded p-button-sm text-lg"
                      ></button>
                    </div>
                  </div>
                  <img
                    class="mx-2 size-28 duration-300 group-hover:scale-110"
                    src="{{ step.imgLink }}"
                    alt="Welcome step image"
                  />
                </div>
              </ng-template>
            </p-timeline>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WelcomePageComponent implements OnInit {
  @HostBinding('class') class = 'card';
  rightTimeline!: boolean;
  welcomeService = inject(WelcomeService);
  steps!: any[];
  openStep(step: any) {
    switch (step.id) {
      case 'kennelName':
        this.welcomeService.openStep(step);
        break;
      case 'kennelVerification':
        this.welcomeService.openStep(step);
        break;

      case 'userName':
        this.welcomeService.openStep(step);
        break;
      case 'merge':
        this.welcomeService.openStep(step);
        break;
      case 'settings':
        this.welcomeService.openStep(step);
        break;
      case 'referral':
        this.welcomeService.openStep(step);
        break;
      case 'tierSelection':
        this.welcomeService.openStep(step);
        break;
      case 'cover':
        this.welcomeService.openStep(step);
        break;
      case 'site':
        this.welcomeService.openStep(step);
        break;
    }
  }
  ngOnInit() {
    if (window.innerWidth < 960) {
      this.rightTimeline = true;
    } else {
      this.rightTimeline = false;
    }

    this.steps = [
      {
        backGround: '',
        color: '#673ab7',
        component: WelcomeKennelNameComponent,
        content:
          'Enter the name of your Kennel so that we can associate your account with the appropriate Kennel in the system.',
        header: 'Enter your Kennel name',
        icon: PrimeIcons.CHECK,
        id: 'kennelName',
        image: '',
        imgLink: 'assets/images/referrals/heart.png',
        title: 'Kennel name',
      },
      {
        color: '#673ab7',
        component: WelcomeKenneVerificationlComponent,
        content:
          'Upload a document confirming the information that you own the Kennel. Any user can change the data on your pages (pets, kennel, contact) until there is no verification. After verification, your public data will not be available for modification by other users.',
        header: 'Verify your kennel',
        icon: PrimeIcons.CHECK,
        id: 'kennelVerification',
        image: '',
        imgLink: 'assets/images/referrals/heart.png',
        title: 'Kennel verification',
      },
      {
        color: '#673ab7',
        component: WelcomeContactNameComponent,
        content:
          'Enter your first and last name and different variations of your names (for example - before marriage). This will help us find duplicates in our system as best as possible and make your account as complete as possible.',
        header: 'Enter your name',
        icon: PrimeIcons.CHECK,
        id: 'userName',
        image: '',
        imgLink: 'assets/images/referrals/heart.png',
        title: 'User name',
      },
      {
        color: '',
        component: WelcomeMergeComponent,
        content:
          'Based on the data you provide, we can create a list of potential duplicates in the system. Select duplicate records and mark them - they will be merged into one account.',
        header: 'Merge duplicate data',
        icon: '',
        id: 'merge',
        image: '',
        imgLink: 'assets/images/referrals/heart.png',
        title: 'Data merge',
      },
      {
        color: '',
        component: WelcomeSettingsComponent,
        content:
          'To make your experience in Breedhub more convenient, adjust your account preferences. This will help you see the data you need in the way you like it best.',
        header: 'Set default settings',
        icon: '',
        id: 'settings',
        image: '',
        imgLink: 'assets/images/referrals/heart.png',
        title: 'Default settings',
      },
      {
        color: '',
        component: WelcomeReferralComponent,
        content:
          'Invite your friends to join us with our referral program. It gives you the opportunity to accumulate points from each involved paid user and use them to use paid services.',
        header: 'Share your referral link',
        icon: '',
        id: 'referral',
        image: '',
        imgLink: 'assets/images/referrals/gift.png',
        title: 'Referrals',
      },
      {
        color: '',
        component: WelcomeTierSelectionComponent,
        content: 'Choose the tier that is most suitable for you.',
        header: 'Select your tier',
        icon: '',
        id: 'tierSelection',
        image: '',
        imgLink: 'assets/images/referrals/heart.png',
        title: 'Tiers',
      },
      {
        color: '',
        component: WelcomeCoverComponent,
        content:
          'Customize your default cover to make your public pages stand out. Create a unique design and fill the cover with the functionality you need.',
        header: 'Customize your default cover',
        icon: '',
        id: 'cover',
        image: '',
        imgLink: 'assets/images/referrals/heart.png',
        title: 'Cover',
      },
      {
        color: '',
        component: WelcomeSiteComponent,
        content:
          'Choose a domain name for your kennel site. Make the first publication of the site to continue customizing it to your taste and needs.',
        header: 'Publish your site',
        icon: '',
        id: 'site',
        image: '',
        imgLink: 'assets/images/welcome/globe.png',
        title: 'Site publishing',
      },
    ];
  }
}

export const WelcomePage: Route = {
  loadChildren: () => import('./welcome.routing').then((m) => m.welcomRoutes),
  path: WELCOME_URL,
  pathMatch: 'full',
};

export const WelcomePageMenuItem: MenuItem = {
  badge: '',
  icon: 'welcome',
  id: 'welcome',
  label: 'Welcome',
  mode: 'userMenu',
  routerLink: ['/', URL_MY, WELCOME_URL],
};
