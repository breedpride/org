import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  input,
} from '@angular/core';
import { EDIT_MODE } from '@bh/collection-store';
import { BPNavStore } from '@bh/nav-store';
import {WithCreatioId} from '@bh/identifying'
import { SpaceConfig,  } from '@bh/superfield';
import { MediaStore } from '@bp/media-store';
import { NoteSpaceDetailConfigService } from '@breedpride/note';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'bp-note-flag-button',
  providers: [DialogService],
  imports: [CommonModule, TooltipModule],
  template: `
    <button pTooltip="Notes" tooltipPosition="top" (click)="showNotes()">
      <i
        class="pi pi-bookmark-fill text-primary"
        [ngClass]="{
          'text-lg': mode() === 'page',
          'pi-bookmark-fill': hasNotes(),
          'pi-bookmark': !hasNotes(),
        }"
      ></i>
    </button>
  `,
  styles: ``,

})
export class NoteFlagButtonComponent {
  editMode = inject(EDIT_MODE);
  noteConfigs = inject(NoteSpaceDetailConfigService);
  media = inject(MediaStore);
  dialogService = inject(DialogService);
  navStore = inject(BPNavStore);
  // TODO - change fragments from url - dont use tabStore
  mode = input<string>();
  hasNotes = input<boolean>(false);
  entity = input.required<any>();
  parentModel = input.required<string>();
  showNotes(): void {
    if (this.editMode) {
      this.navStore.changeFragment('notes');
    } else {
      const noteConfig = this.noteConfigs.getDetailConfigByParentModel(
        this.parentModel()
      );
      this.showNoteGrid(this.entity(), this.parentModel(), noteConfig);
    }
  }

  async showNoteGrid(
    entity: WithCreatioId & { Name: string },
    parentModel: string,
    spaceConfig: SpaceConfig
  ): Promise<DynamicDialogRef> {
    const component = await import('./note-modal-form.component').then(
      (m) => m.NoteModalFormComponent
    );
    return this.dialogService.open(component, {
      closable: true,
      data: {
        entityId: entity.Id,
        spaceConfig,
        parentModel,
      },
      header: entity.Name,
      height: this.media.defaultModalWindowHeight(),
      styleClass: 'max-h-[100%]',
      width: this.media.defaultModalWindowWidth(),
    });
  }
}
