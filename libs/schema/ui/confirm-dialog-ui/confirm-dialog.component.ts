import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@Component({
  imports: [CommonModule, ConfirmDialogModule],
  selector: 'bp-confirm-dialog',
  styles: [],
  template: `
    <p-confirmDialog
      #cd
      styleClass="w-auto md:w-[40vw] lg:w-[35vw] xl:w-[30vw]"
    >
      <!-- <ng-template #header>
        <h3>Header Content</h3>
      </ng-template> -->
      <ng-template #footer>
        <button
          type="button"
          pButton
          icon="pi pi-check"
          label="Yes"
          (click)="cd.onAccept()"
          class="p-button-sm p-button-secondary p-button-outlined"
        ></button>
        <button
          type="button"
          pButton
          icon="pi pi-times"
          label="No"
          (click)="cd.onReject()"
          class="p-button-sm "
        ></button>
      </ng-template>
    </p-confirmDialog>
  `,
})
// TODO - delete from this module and use only in one place
export class ConfirmDialogComponent {}
