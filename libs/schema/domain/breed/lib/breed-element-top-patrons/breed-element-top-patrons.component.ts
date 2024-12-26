import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Contact } from '@bh/entity/config';
import { ContactAvatarPipe } from '@breedpride/pipes';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [
    CommonModule,
    TooltipModule,
    ContactAvatarPipe,
    AvatarModule,
    AvatarGroupModule,
  ],
  selector: 'bp-breed-element-top-patrons',
  styles: [
    `
      :host ::ng-deep .p-avatar {
        width: 1.9rem;
        height: 1.9rem;
      }
    `,
  ],
  template: `
    <p-avatarGroup styleClass="absolute right-4 sm:right-6">
      @if (topPatrons() && topPatrons().length > 0) { @for (patron of
      topPatrons().slice(0, 4); track patron) {
      <p-avatar
        styleClass="ml-1.5 rounded-full"
        [pTooltip]="toolTip(patron.Contact)"
        tooltipPosition="top"
        [image]="patron.Contact | contactAvatar"
        shape="circle"
      ></p-avatar>
      } }
    </p-avatarGroup>
  `,
})
export class BreedElementTopPatronsComponent {
  topPatrons = input.required<{ Contact?: Contact }[]>();
  toolTip(patron: Contact | undefined) {
    return patron?.Name || 'Top breed patrons';
  }
}
