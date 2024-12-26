import { Clipboard } from '@angular/cdk/clipboard';
import {
  computed,
  inject,
  Injectable,
  Injector,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LITTER_ENTITY_COLUMNS } from '@bh/entity/config';
import {FIELD_NAMES_LOOKUP_MINIMUN}  from '@bh/filtering';
import { And, byAny,  ME } from "@bh/filter";
import { MATING } from '@bh/space-url';
import {
  CustomIconMenuItem,
  PetPage,
  PublicPageData,
  PublicPedigreePet,
} from '@bh/types';
import {  SpaceConfig,} from '@bh/superfield';
import { MediaStore } from '@bp/media-store';
import { ApiService } from '@breedpride/api';
import { environment } from '@breedpride/api';
import { NoteSpaceDetailConfigService } from '@breedpride/note';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { BPConfirmationService } from './bpconfirmation.service';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  injector = inject(Injector);
  noteConfigs = inject(NoteSpaceDetailConfigService);
  // noteConfigImport = inject(NoteSpaceConfigService);
  media = inject(MediaStore);
  confirmationService = inject(BPConfirmationService);
  messageService = inject(MessageService);
  _activatedRoute = inject(ActivatedRoute);
  dialogService = inject(DialogService);

  api = inject(ApiService);
  private clipboard = inject(Clipboard);
  editWindowHeight = computed(() => (this.media.lessThanMD() ? '80%' : '100%'));

  // TODO - check SpaceStore inject

  // ---------------------------------
  // ItemMenu return
  // ---------------------------------
  ActionCopyMatingLink() {
    return {
      command: () => this.createMatingCopyLink(),
      icon: 'pi pi-link',
      label: 'Copy link',
    };
  }

  ActionCopyName(entityPage: PublicPageData) {
    return {
      command: () => this.createCopyName(entityPage),
      icon: 'pi pi-copy',
      label: 'Copy name',
    };
  }

  ActionCopyLink(entityPage: PublicPageData) {
    return {
      command: () => this.createCopyLink(entityPage),
      icon: 'pi pi-link',
      label: 'Copy link',
    };
  }

  ActionCreateNote(entityPage: PublicPageData, model: string) {
    return {
      command: () => {
        this.createNote(entityPage, model);
      },
      icon: 'pi pi-bookmark',
      label: 'Make a note',
    };
  }

  createCopyName(entityPage: PublicPageData) {
    const copiedName = entityPage?.Name || '';
    this.clipboard.copy(copiedName);
    this.messageService.add({
      life: 2000,
      severity: 'success',
      summary: copiedName + ' copied',
    });
  }
  createMatingCopyLink() {
    const currentUrl =
      environment.site.baseUrl + this._activatedRoute.snapshot.url.join('/');

    this.clipboard.copy(currentUrl);

    this.messageService.add({
      // detail: 'Message Content',
      // key: 'myKey',
      life: 2000,
      severity: 'success',
      summary: currentUrl + ' copied',
    });
  }
  createCopyLink(entityPage: { Url?: string } | null) {
    const url = environment.site.baseUrl + entityPage?.Url;
    this.clipboard.copy(url);
    this.messageService.add({
      // detail: 'Message Content',
      // key: 'myKey',
      life: 2000,
      severity: 'success',
      summary: url + ' copied',
    });
  }
  // ItemMenu return
  createNoteAction(entityPage: PublicPageData, schemaName: string) {
    return {
      command: () => {
        this.createNote(entityPage, schemaName);
      },
      icon: 'pi pi-bookmark',
      label: 'Make a note',
    };
  }

  // selectEntity(selectConfig: SpaceApiConfig | FilterField): DynamicDialogRef {
  //   const someConfig = { ...selectConfig };
  //   console.log(someConfig);
  //   return this.editorService.selectEntity(someConfig);
  // }

  async createNote(entityPage: PublicPageData, schemaName: string) {
    // const nestedEntity = {
    //   Id: entityPage?.Id,
    //   Name: entityPage?.Name,
    // };

    // const noteSpace: DetailStore = runInInjectionContext(
    //   this.injector,
    //   () => new DetailStore()
    // );

    // const noteConfig =
    //   this.noteConfigs.getDetailConfigByParentModel(schemaName);
    // noteSpace.patchConfig(noteConfig);

    // TODO - model Note!!!!
    //TODO - consts
    // const noteConfig = noteSpace.setConfigByModel('Note').then(e => {
    // const entityData;
    // const entityData = noteSpace.prepareNewEntityData1(
    //   entityPage
    //   // addititionalDefaultValues
    // );
    // console.log(entityData);
    // console.log(noteConfig);
    // this.editWithCallBack({
    //   editorComponent: 'NOTE',
    //   editorTemplete: null,
    //   // entityData: entityData,
    //   entityId: nullId,
    //   entityStore: noteSpace,
    // });
    // });
  }

  // TODO - get entityPage model for prepare better menu
  getCardMenuItems(e: PublicPageData): CustomIconMenuItem[] {
    const entityPage = e as PetPage;
    return [
      // this.ActionCopyLink(entityPage),
      {
        command: () => this.createCopyLink(entityPage),
        icon: 'pi pi-link',
        label: 'Copy link',
      },
      this.ActionCopyName(entityPage),
      this.ActionCreateNote(entityPage, 'Pet'),
      {
        icon: 'sex',
        label: 'Test mating',
        queryParams: {
          Father: entityPage?.Sex?.Code === 'male' ? entityPage?.Id : null,
          Mother: entityPage?.Sex?.Code === 'female' ? entityPage?.Id : null,
        },
        routerLink: ['/', MATING],
      },
      { icon: 'merge_type', label: 'Merge', url: '/my/settings' },
      {
        icon: 'bug_report',
        label: 'Bug report',
        url: '/my/settings',
      },
      { icon: 'pi pi-trash', label: 'Delete', url: '/sign-out' },
    ];
  }

  createLitterWithCheck(pet: PublicPedigreePet) {
    const samePairConfig = {
      entitiesColumns: FIELD_NAMES_LOOKUP_MINIMUN,
      entitySchemaName: 'Litter',
      id: 'Litter',
      component: 0,
      readonly: true,
    } as Partial<SpaceConfig>;
    const creationConfig = {
      ...samePairConfig,
      entityColumns: [...LITTER_ENTITY_COLUMNS],
      // TODO - dateFields: ['DateOfBirth'],
    };
    this.api
      .selectTopOne(
        samePairConfig,
        And(
          byAny('Breeder', ME),
          byAny('Father', pet.Father?.Id),
          byAny('Mother', pet.Mother?.Id)
        )
      )
      .subscribe((result) => {
        if (result) {
          this.confirmationService
            .confirmAction({ header: 'Taka para est! Stvoriti she odny?' })
            .subscribe(() => {
              this.createLitter(creationConfig, pet);
            });
        } else {
          this.createLitter(creationConfig, pet);
        }
      });
  }
  createLitter(config: any, pet: PublicPedigreePet) {
    this.api
      .createEntity(config, {
        Breeder: ME,
        Father: pet.Father,
        Mother: pet.Mother,
      })
      .subscribe((e) => {
        console.log(e);
      });
  }
}
