import { inject, Injectable } from '@angular/core';
import { MediaStore } from '@bp/media-store';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Injectable()
export class WelcomeService {
  dialogService = inject(DialogService);
  messageService = inject(MessageService);
  media = inject(MediaStore);
  openStep(step: any): DynamicDialogRef {
    return this.dialogService.open(step.component, {
      closable: true,
      data: {
        spaceConfig: step,
      },
      // TODO use store State with naming
      header: step.title,
      height: this.media.defaultModalWindowHeight(),
      styleClass: 'max-h-[100%]',
      width: this.media.defaultModalWindowWidth(),
    });
  }
}
