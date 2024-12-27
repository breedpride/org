import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Note } from '@bh/entity/config';
import {
  AvatarPipe,
  DateLocalePipe,
  ToDatePipe,
  breedAvatarFn,
  contactAvatarFn,
  litterAvatarFn,
  petAvatarFn,
} from '@breedpride/pipes';
import { TooltipModule } from 'primeng/tooltip';
import {
  ACCOUNTSCHEMA_ID,
  BREEDSHCEMA_ID,
  CONTACTSCHEMA_ID,
  LITTERSCHEMA_ID,
  PETSCHEMA_ID,
  PROJECTSCHEMA_ID,
} from '../../pages/note-page/notes-consts';


import { ActionService } from '@bp/chromatin/services';
import { EntityGridCardWrapperComponent } from '@breedpride/wrapper';
import {  SUPER_STORE } from '@bh/collection-store';

@Component({
  imports: [
    CommonModule,
    EntityGridCardWrapperComponent,
    TooltipModule,
    AvatarPipe,
    ToDatePipe,
    DateLocalePipe,
    RouterModule,
  ],
  selector: 'bp-note-grid-card',
  styles: [],
  template: `
    <!-- <div class="flex h-[280px] flex-col p-3 ">
      <div
        class="relative flex  justify-center overflow-hidden rounded-xl border ">
        {{ entity.Name }}
      </div>
    </div> -->
    <!-- new -->
    <bp-entity-grid-card-wrapper>
      <button (click)="edit()">
        <div
          class="bg-secondary-50/50 flex h-[206px] overflow-auto rounded-xl border border-surface-border px-7 py-5 text-start"
        >
          {{ entity().Name }}
        </div>
      </button>
      <div
        class="mt-2.5 flex w-full items-center px-2"
        [ngClass]="{ 'h-13  ': mode() === 'space' }"
      >
        @if (mode() === 'space') {
        <!-- Avatar -->
        @if (!!connectedEntity.entity) {
        <div class="relative flex">
          <div
            class="outline-offset-2.5 flex-0 flex size-10 items-center justify-center overflow-hidden rounded-full border outline outline-2 outline-offset-2 outline-slate-300"
          >
            @if (connectedEntity.entity?.AvatarUrl) {
            <img
              class="size-full object-cover"
              [src]="
                connectedEntity.entity | avatar : connectedEntity.avatarPipe
              "
              alt="Contact avatar"
            />
            } @else {
            <div
              class="flex size-full items-center justify-center rounded-full bg-gray-200 text-lg uppercase text-gray-600 dark:bg-gray-700 dark:text-gray-200"
            >
              @if (connectedEntity.entity?.Name) {
              {{ connectedEntity.entity.Name.charAt(0) }}
              } @else {
              {{ entity().Name?.charAt(0) }}
              }
            </div>
            }
          </div>
        </div>
        }
        <!-- Name -->
        <div
          class="ml-3 flex w-full flex-col space-y-0.5 truncate"
          [pTooltip]="connectedEntity.entity?.Name"
          tooltipPosition="bottom"
        >
          <div class="w-auto truncate ">
            @if (connectedEntity.entity?.Url) {
            <a
              [routerLink]="['/', connectedEntity.entity?.Url]"
              class="text-primary-800"
            >
              {{ connectedEntity.entity?.Name }}
            </a>
            } @else {
            {{ connectedEntity.entity?.Name || 'Without subject' }}
            }
          </div>
          <span class="text-secondary text-sm ">
            {{ entity().CreatedOn | toDate | appDateLocale }}
          </span>
        </div>
        } @if (mode() === 'card') {
        <span class="text-secondary text-sm">{{
          entity().CreatedOn | toDate | appDateLocale
        }}</span>
        }
        <!-- Buttons -->
        <div class="text-secondary-400 ml-auto flex space-x-3">
          <button aria-label="Edit" (click)="edit()">
            <i class="pi pi-pencil "></i>
          </button>
          <button aria-label="Delete" (click)="delete()">
            <i class="pi pi-trash "></i>
          </button>
        </div>
      </div>
    </bp-entity-grid-card-wrapper>
  `,
})
export class NoteGridCardComponent {
  editorService = inject(ActionService);
  spaceStore = input(inject(SUPER_STORE));
  entity = input.required<Note>();
  i = input<number>();
  mode = input<string>('space');

  edit() {
    // TODO - editModal withCallBack
    // this.editorService.editWithCallBack(
    //   {
    //     editorComponent: 'NOTE',
    //     editorTemplete: null,
    //     entityData: null,
    //     entityId: this.entity().Id,
    //     entityStore: this.spaceStore(),
    //   },
    //   () => {
    //     this.spaceStore().refresh();
    //   }
    // );
  }

  delete() {
    // this.spaceStore().confirmDeleteEntity(this.entity().Id, () => {
    //   this.spaceStore().refresh();
    // });
  }

  get connectedEntity(): { avatarPipe: any; entity: any } {
    switch (this.entity().EntitySchema?.Id) {
      case PETSCHEMA_ID:
        return { avatarPipe: petAvatarFn, entity: this.entity().Pet };
      case PROJECTSCHEMA_ID:
        return { avatarPipe: petAvatarFn, entity: this.entity().Project };
      case ACCOUNTSCHEMA_ID:
        return { avatarPipe: contactAvatarFn, entity: this.entity().Account };
      case CONTACTSCHEMA_ID:
        return { avatarPipe: contactAvatarFn, entity: this.entity().Contact };
      case BREEDSHCEMA_ID:
        return { avatarPipe: breedAvatarFn, entity: this.entity().Breed };
      case LITTERSCHEMA_ID:
        return { avatarPipe: litterAvatarFn, entity: this.entity().Litter };
      default:
        return { avatarPipe: null, entity: null };
    }
  }
}
