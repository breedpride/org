import { Injectable, inject } from '@angular/core';
import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { MediaStore } from '@bp/media-store';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
@Injectable({
  providedIn: 'root',
})
export class EntitySelectorService {
  dialogService = inject(DialogService);
  media = inject(MediaStore);
  async selectEntity(
    selectConfig: SpaceConfig | FilterFieldConfig | undefined
  ): Promise<DynamicDialogRef> {
    const component = await import('./entity-selector.component').then(
      (m) => m.EntitySelectorComponent
    );
    // const component = await this.loader.getSelectComponent();
    const ref = this.dialogService.open(component, {
      closable: true,
      data: {
        spaceConfig: selectConfig,
      },
      // TODO use store State with naming
      header: 'Select record',
      height: this.media.defaultModalWindowHeight(),
      styleClass: 'max-h-[100%]',
      width: this.media.defaultModalWindowWidth(),
    });
    return ref;
  }
}
