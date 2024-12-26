import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  input,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvatarFormComponent } from '@bh/editing';
import {EntityListStore} from '@bh/collection-store'
import { CONTACT_FIELD_CONFIG } from '@bh/entity/config';
import { ME } from '@bh/filter';
import { ContactPage } from '@bh/types';
import { page } from '@bh/page-store';
import { PetAvatarPipe } from '@breedpride/pipes';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { SettingsAddressFormComponent } from './components/settings-address-form/settings-address-form.component';
import { SettingsCommunicationFormComponent } from './components/settings-communication-form/settings-communication-form.component';
import { SettingsGeneralFormComponent } from './components/settings-general-form/settings-general-form.component';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    TableModule,
    FormsModule,
    AvatarFormComponent,
    ButtonModule,
    PetAvatarPipe,
  ],
  selector: 'bp-settings-form',
  styles: [``],
  template: `
    <!-- <bp-page-template
      [template]="ref"
      [entityStore]="entityStore"
      [entityPage]="entityPage()"
      [tabs]="petTabs"
      [editMode]="true"> -->
    <bp-avatar-form
      card-avatar
      [entityId]="entityPage()?.Id"
      entityName="Pet"
      [avatarUrl]="entityPage() | petAvatar"
    />
    <!-- </bp-page-template> -->

    <ng-template #ref let-isStick="isStick">
      <!-- <bp-pet-name
        [isStick]="isStick"
        class="sticky top-0 z-10"
        [entityPage]="entityPage()" /> -->
    </ng-template>
  `,
})
export class SettingsFormComponent {
  // entityStore = inject(EntityListStore);
  entityPage = input.required({ transform: page<ContactPage> });
  fieldsConfig = {
    ...CONTACT_FIELD_CONFIG,
  };

  petTabs = [
    {
      component: SettingsGeneralFormComponent,
      fragment: 'general',
      icon: 'pi pi-fw pi-home',
      id: 'generalID',
      inputs: () => ({ fieldsConfig: this.fieldsConfig }),
      label: 'General',
    },
    {
      component: SettingsAddressFormComponent,
      fragment: 'address',
      icon: 'pi pi-fw pi-check-circle',
      id: 'addressID',
      inputs: () => ({}),
      label: 'Address',
    },
    {
      component: SettingsCommunicationFormComponent,
      fragment: 'communication',
      icon: 'pi pi-fw pi-check-circle',
      id: 'communicationID',
      inputs: () => ({}),
      label: 'Communications',
    },
  ];
  petmenuitems: MenuItem[] = [
    { icon: 'pi pi-clone', label: 'Merge', url: '/my/settings' },
    { icon: 'pi pi-trash', label: 'Delete', url: '/sign-out' },
  ];
}

export const SettingsPageMenuItem: MenuItem = {
  icon: 'pi pi-cog',
  id: 'Settings',
  label: 'Settings',
  mode: 'userMenu',
  queryParams: { model: 'Settings' },
  routerLink: ['/', 'edit', ME],
  visible: true,
};
