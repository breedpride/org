import { Injectable, inject } from '@angular/core';
import { MediaStore } from '@bp/media-store';
import { signalStoreFeature, withMethods } from '@ngrx/signals';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditorConfig } from '@bh/types';

export function withModalEdit() {
  return signalStoreFeature(
    withMethods(
      (
        store,
        mediaStore = inject(MediaStore),
        dialog = inject(DialogService)
      ) => ({
        async editEntity(
          editorConfig: EditorConfig
        ): Promise<DynamicDialogRef> {
          const component = await import('./detail-editor.component').then(
            (m) => m.DetailEditorComponent
          );
          return dialog.open(component, {
            closable: true,
            data: {
              ...editorConfig,
            },
            // TODO use store State with naming
            // header: spaceConfig?.naming?.editCompomentHeaderString || '1',
            height: mediaStore.defaultModalWindowHeight(),
            styleClass: 'max-h-[100%]',
            width: mediaStore.defaultModalWindowWidth(),
          });
        },
      })
    )
  );
}

// TODO - to feature
@Injectable({
  providedIn: 'root',
})
export class ModalEditorService {
  media = inject(MediaStore);
  messageService = inject(MessageService);
  dialogService = inject(DialogService);
  async editEntity(editorConfig: EditorConfig): Promise<DynamicDialogRef> {
    const component = await import('./detail-editor.component').then(
      (m) => m.DetailEditorComponent
    );
    const spaceConfig = editorConfig.entityStore?.config();
    return this.dialogService.open(component, {
      closable: true,
      data: {
        ...editorConfig,
      },
      // TODO use store State with naming
      header: spaceConfig?.naming?.editCompomentHeaderString || '1',
      height: this.media.defaultModalWindowHeight(),
      styleClass: 'max-h-[100%]',
      width: this.media.defaultModalWindowWidth(),
    });
  }

  editWithCallBack(editorConfig: EditorConfig): void {
    this.editEntity(editorConfig).then((ref) => {
      ref.onClose.subscribe((result) => {
        if (result) {
          if (editorConfig.callBack) {
            editorConfig.callBack();
          }
          // TODO - get error from server
          if (result.created) {
            this.messageService.add({
              detail: result,
              // key: 'myKey',
              severity: 'success',
              summary: 'Record created',
            });
            editorConfig?.entityStore?.setEntity(null);
          }
          if (result.updated) {
            this.messageService.add({
              // detail: 'Message Content',
              // key: 'myKey',
              severity: 'success',
              summary: 'Record updated',
            });
            editorConfig?.entityStore?.setEntity(null);
          }
        }
      });
    });
  }
}
