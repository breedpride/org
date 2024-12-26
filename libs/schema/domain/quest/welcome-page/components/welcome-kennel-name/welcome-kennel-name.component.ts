import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { WelcomeQuestWrapperComponent } from '../../../welcome-quest-wrapper/welcome-quest-wrapper.component';

@Component({
  imports: [
    CommonModule,
    WelcomeQuestWrapperComponent,
    InputSwitchModule,
    InputTextModule,
  ],
  selector: 'bp-welcome-kennel-name',
  styles: ``,
  template: ` <bp-welcome-quest-wrapper>
    <div class="flex items-center space-x-5">
      <span>Do you have a registered kennel name?</span
      ><p-inputSwitch></p-inputSwitch>
      @if (true) {
      <span>No</span>
      } @else {
      <span>Yes</span>
      }
    </div>
    <div class="flex w-full items-center space-x-5">
      <span class="shrink-0">Enter your kennel name</span
      ><span class="p-fluid w-full  "><input type="text" pInputText /></span>
    </div>
  </bp-welcome-quest-wrapper>`,
})
export class WelcomeKennelNameComponent {}
