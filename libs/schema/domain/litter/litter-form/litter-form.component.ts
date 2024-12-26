import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  input,
} from '@angular/core';
import { AvatarFormComponent } from '@bh/editing';
import { EntityListStore, SUPER_STORE } from '@bh/collection-store';
import { LITTER_FIELD_CONFIG } from '@bh/entity/config';
import {  LitterPage } from '@bh/types';
import { FormFieldCode } from '@bh/consts';
import {FilterFieldConfig,  } from '@bh/superfield';
import { page } from '@bh/page-store';
import { LitterAvatarPipe } from '@breedpride/pipes';
import { LitterInfoFormComponent } from './components/litter-info-form/litter-info-form.component';
import { LitterNotesFormComponent } from './components/litter-notes-form/litter-notes-form.component';
import { LitterOffersFormComponent } from './components/litter-offers-form/litter-offers-form.component';
import { LitterPetsFormComponent } from './components/litter-pets-form/litter-pets-form.component';
import { LitterWeightFormComponent } from './components/litter-weight-form/litter-weight-form.component';
@Component({
  imports: [CommonModule, AvatarFormComponent, LitterAvatarPipe],
  selector: 'bp-litter-form',
  styles: [],
  template: `
    <!-- <bp-page-template
      [components]="componentsTemplate"
      [entityPage]="entityPage()"
      [entityStore]="entityStore"
      [editMode]="true"> -->
    <bp-avatar-form
      card-avatar
      [entityId]="entityPage()?.Id"
      entityName="Pet"
      [avatarUrl]="entityPage() | litterAvatar"
    />
    <!-- </bp-page-template> -->
  `,
})
export class LitterFormComponent {
  // entityPage: LitterPage;
  entityStore = inject(SUPER_STORE);
  entityPage = input.required({ transform: page<LitterPage> });
  fieldsConfig = {
    ...LITTER_FIELD_CONFIG,
    Notes: {
      ...LITTER_FIELD_CONFIG.Notes,
      component: FormFieldCode.EDIT,
    } as FilterFieldConfig,
  };
  componentsTemplate = {
    tabs: [
      {
        component: LitterInfoFormComponent,
        fragment: 'general',
        icon: 'pi pi-fw pi-home',
        id: 'generalID',
        inputs: () => ({ fieldsConfig: this.fieldsConfig }),
        label: 'General',
      },
      {
        component: LitterPetsFormComponent,
        fragment: 'children',
        icon: 'pi pi-fw pi-list',
        id: 'childrenID',
        inputs: () => ({}),
        label: 'Children',
      },
      {
        component: LitterWeightFormComponent,
        icon: 'weight',
        fragment: 'weight',

        id: 'weightID',
        inputs: () => ({ entityPage: this.entityPage }),
        label: 'Weight',
      },
      {
        component: LitterOffersFormComponent,
        icon: 'local-offer',
        fragment: 'services',
        id: 'servicesID',
        inputs: () => ({}),
        label: 'Services',
      },
      {
        component: LitterNotesFormComponent,
        fragment: 'notes',
        icon: 'pi pi-fw pi-bookmark',
        id: 'notesID',
        inputs: () => ({}),
        label: 'Notes',
      },
    ],
  };
  // ngOnInit(): void {
  //   super.ngOnInit();
  // }
}
