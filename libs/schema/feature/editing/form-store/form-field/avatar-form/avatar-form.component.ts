import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageFormComponent } from '../image-form/image-form.component';

@Component({
  selector: 'bp-avatar-form',
  styles: [
    `
      input[type='file'] {
        display: none;
      }
      .custom-upload {
        ::ng-deep .p-button {
          color: #64748b;
        }
      }
    `,
  ],
  template: `
    <div class="relative pr-3">
      <div
        class=" flex size-44 items-center justify-center
      overflow-hidden rounded-full border ring-4 ring-white"
      >
        @if (avatarUrl) {
        <img
          class="size-full object-cover"
          [src]="avatarUrl"
          alt="User avatar"
        />
        }
      </div>
      <div class="absolute inset-0 z-20 flex items-end justify-end">
        <label
          pButton
          pRipple
          type="button"
          icon="pi pi-camera"
          class="p-button-rounded p-button-text p-button-secondary"
        >
          <input type="file" id="file" (change)="uploadAvatar($event.target)" />
        </label>
      </div>
    </div>
  `,
  imports: [CommonModule, ButtonModule, FileUploadModule],
  providers: [
    FileService,
    // provideHttpClient(withInterceptorsFromDi())
  ],
})
export class AvatarFormComponent extends ImageFormComponent implements OnInit {
  constructor() {
    super();
  }

  removeAvatar(): void {
    this.avatarUrl = this.prevAvatarUrl;
    this.setEntityAvatarUrl(this.avatarUrl);
    this._changeDetectorRef.markForCheck();
  }
}
