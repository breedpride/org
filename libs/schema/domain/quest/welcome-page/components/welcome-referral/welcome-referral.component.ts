import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { WelcomeQuestWrapperComponent } from '../../../welcome-quest-wrapper/welcome-quest-wrapper.component';

@Component({
  imports: [
    CommonModule,
    WelcomeQuestWrapperComponent,
    InputTextModule,
    ButtonModule,
  ],
  selector: 'bp-welcome-referral',
  styles: ``,
  template: `<bp-welcome-quest-wrapper>
    <div class="flex flex-col ">
      <span class="text-primary text-2xl font-semibold"
        >Your referral link</span
      >

      <div class="flex">
        <span class="p-fluid w-full  md:min-w-56 ">
          <input
            class="w-full rounded-r-none"
            id="disabled-input"
            type="text"
            pInputText
            [disabled]="true"
          />
        </span>
        <button
          class="shrink-0 rounded-l-none"
          aria-label="Copy link"
          pRipple
          pButton
          type="button"
          label="Copy link"
          icon="pi pi-link"
        ></button>
      </div>
      <div class="text-secondary text-base">share your personal link</div>
      <div class="mt-3 leading-7">
        You can send your referral link directly to your friends or publish a
        post on social networks. <br />More details about the referral program
        are described on the page - Referrals. <br />This step will be closed
        automatically after you get 5 referrals.
      </div>
    </div>
  </bp-welcome-quest-wrapper>`,
})
export class WelcomeReferralComponent {}
