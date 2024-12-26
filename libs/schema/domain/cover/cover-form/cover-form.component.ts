import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  input,
} from '@angular/core';
import { EntityListStore, SUPER_STORE } from '@bh/collection-store';
import { COVER_FIELD_CONFIG } from '@bh/entity/config';
import { CoverPage } from '@bh/types';
import { page } from '@bh/page-store';
import { CoverNameComponent } from '../lib/cover-name/cover-name.component';
import { CoverGeneralFormComponent } from './components/cover-general-form/cover-general-form.component';

@Component({
  imports: [CommonModule],
  selector: 'bp-cover-form',
  styles: [],
  template: `
    <!-- <bp-page-template
      [entityPage]="entityPage()"
      [entityStore]="entityStore"
      [components]="componentsTemplate"
      [editMode]="true">
    </bp-page-template> -->
  `,
})
export class CoverFormComponent {
  entityStore = inject(SUPER_STORE);
  entityPage = input.required({ transform: page<CoverPage> });
  fieldsConfig = {
    ...COVER_FIELD_CONFIG,
  };
  componentsTemplate = {
    name: CoverNameComponent,
    tabs: [
      {
        component: CoverGeneralFormComponent,
        fragment: 'general',
        icon: 'pi pi-fw pi-home',
        id: 'generalID',
        inputs: (entityPage: any) => ({ fieldsConfig: this.fieldsConfig }),
        label: 'General',
      },
    ],
  };
}
