import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { trackByFn } from '@bh/list';
import { PageStore } from '@bh/page-store';
import { contactAvatarFn, petAvatarFn } from '@breedpride/pipes';
import { TooltipModule } from 'primeng/tooltip';
import { BreedPatronage } from '@bh/types';
import { PatronPlaceComponent } from './patron-place/patron-place.component';

@Component({
  imports: [CommonModule, PatronPlaceComponent, TooltipModule],
  selector: 'bp-avatar',
  styles: [],
  template: `
    <div
      class="relative"
      [ngStyle]="{
        height: size() + 'px',
        width: size() + 'px',
      }"
    >
      @if (mode() !== 'empty') {
      <div
        class="
            flex size-full items-center justify-center overflow-hidden
            rounded-full border border-surface-border ring-4 ring-card-ground
          "
      >
        <img class="size-full object-cover" [src]="avatarSrc()" alt="avatar" />
      </div>
      } @if (breedPatronage()) {
      <div class="absolute right-2 top-0 flex gap-0.5">
        @for ( patronage of breedPatronage(); track trackByFn($index, patronage)
        ) {
        <bp-patron-place
          [iconName]="geticonName(patronage)"
          iconSize="18"
          [pTooltip]="getToolTip(patronage)"
          tooltipPosition="top"
        />
        }
      </div>
      }
    </div>
  `,
})
export class AvatarComponent {
  entityPage = input<any>();
  size = input<number>(176);
  avatar = input<string>();
  name = input<string>('noname');
  mode = input<string>();

  trackByFn = trackByFn;
  getToolTip(patronage: BreedPatronage) {
    return patronage.Breed.Name + '\n' + patronage.Place + ' place patron';
  }
  geticonName(patronage: BreedPatronage) {
    return 'place-' + patronage.Place;
  }
  // TODO - input model
  model = inject(PageStore).loadedModel;
  // needAvatar = computed(() => {
  //   return this.avatar() || ['Pet', 'Breed', 'Contact'].includes(this.model());
  // });
  avatarSrc = computed(() => {
    if (this.avatar()) {
      return this.avatar() || '';
    } else {
      if (this.entityPage()) {
        if (this.entityPage()['TopPet']) {
          // TOP breedd Pet avatar
          return petAvatarFn(this.entityPage()['TopPet']);
        } else {
          // TODO - Contact avatar
          if (this.model() === 'Contact')
            return contactAvatarFn(this.entityPage());
          if (this.model() === 'Pet') return petAvatarFn(this.entityPage());
          // if (this.model() === 'Contact')
          //     return contactAvatarFn(this.entityPage());
          return '';
        }
      } else {
        return '';
      }
    }
  });
  breedPatronage = computed(() => {
    if (this.entityPage() && this.entityPage()['BreedPatronage']) {
      return this.entityPage()['BreedPatronage'];
    } else {
      return [];
    }
  });
  nameNew = computed(() => this.name() || this.entityPage()?.Name);
}
