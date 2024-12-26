import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomeQuestWrapperComponent } from '../../../welcome-quest-wrapper/welcome-quest-wrapper.component';

@Component({
  imports: [CommonModule, WelcomeQuestWrapperComponent],
  selector: 'bp-welcome-merge',
  styles: ``,
  template: `<bp-welcome-quest-wrapper>
    <div class="leading-7">
      Our system identified these records as potential duplicates. <br />Select
      duplicate records and click the submit button to merge the data.
    </div>
  </bp-welcome-quest-wrapper>`,
})
export class WelcomeMergeComponent {}
