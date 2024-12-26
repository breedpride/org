import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  inject,
  input,
} from '@angular/core';

import { ENTITY_STORE } from '@bh/entity-store';
import { FileService } from '../file.service';
import { ButtonModule } from 'primeng/button';
@Component({
  imports: [CommonModule, ButtonModule],
  providers: [FileService],
  selector: 'bp-image-form',
  styles: `
    input[type='file'] {
      display: none;
    }
  `,
  template: `
    <div>
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
  `,
})
export class ImageFormComponent implements OnInit {
  protected _fileService = inject(FileService);
  protected _changeDetectorRef = inject(ChangeDetectorRef);
  // TODO -input
  entityForm = inject(ENTITY_STORE).entityForm();
  prevAvatarUrl!: string;
  @Input() avatarUrl!: string;
  entityId = input<any>();
  entityName = input<string>();
  uploadAvatar(event: any): void {
    const fileList = event.files;
    if (!fileList.length) {
      return;
    }
    const file = fileList[0];
    this._fileService.fileLink.subscribe((e) => {
      // todo: download error handle
      // console.log(e);
      if (e) {
        this.prevAvatarUrl = this.avatarUrl;
        this.avatarUrl = e;
        this.setEntityAvatarUrl(e);
      }
      this._changeDetectorRef.markForCheck();
    });
    this._fileService.uploadAvatar(
      file,
      this.entityName() || '',
      this.entityId() || ''
    );
  }
  setEntityAvatarUrl(url: string): void {
    this.entityForm.get('AvatarUrl')?.setValue(url);
    // console.log(this.entityForm.get('AvatarUrl').value);
    // if (url && this.entity) {
    //   this.entity.avatarUrl = url;
    // }
  }

  ngOnInit(): void {
    this.prevAvatarUrl = this.avatarUrl;
  }
}
