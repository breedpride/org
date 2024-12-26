import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { WelcomeQuestWrapperComponent } from '../../../welcome-quest-wrapper/welcome-quest-wrapper.component';

@Component({
  imports: [CommonModule, WelcomeQuestWrapperComponent, FileUploadModule],
  selector: 'bp-welcome-kennel-verification',
  styles: ``,
  template: `<bp-welcome-quest-wrapper>
    <p-fileUpload
      name="demo[]"
      url="https://www.primefaces.org/cdn/api/upload.php"
      [multiple]="false"
      accept="image/*"
    >
      <ng-template #content>
        <ul>
          <li></li>
        </ul>
      </ng-template>
    </p-fileUpload>
  </bp-welcome-quest-wrapper>`,
})
export class WelcomeKenneVerificationlComponent {}
