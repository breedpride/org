import { CommonModule } from '@angular/common';
import {
  Component,
} from '@angular/core';
import { WelcomeQuestWrapperComponent } from '../../../welcome-quest-wrapper/welcome-quest-wrapper.component';

@Component({

  imports: [CommonModule, WelcomeQuestWrapperComponent],
  selector: 'bp-welcome-cover',
  styles: ``,
  template: `<bp-welcome-quest-wrapper></bp-welcome-quest-wrapper>`,
})
export class WelcomeCoverComponent {}
