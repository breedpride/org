import {
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { contactAvatarFn, kennelAvatarFn } from '@breedpride/pipes';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PatronPlaceComponent } from '@breedpride/avatar';

export type Entity = {
  AvatarUrl?: string;
  Name?: string;
  Place?: number;
  Url?: string;
};
@Component({
  imports: [RouterLink, AngularSvgIconModule, PatronPlaceComponent],
  selector: 'bp-avatar-card',
  styles: [''],
  template: `
    <a [routerLink]="['/', entity().Url]">
      <div class="relative flex flex-col items-center justify-center">
        <div class="card relative flex size-40 overflow-hidden rounded-full">
          <img
            class="absolute right-0 top-0 h-full w-auto max-w-[150%]"
            [src]="avatarUrl()"
            alt="Card cover image"
          />
        </div>
        @if (placementCondition() < 20) {
        <bp-patron-place
          [iconName]="iconName()"
          iconSize="18"
          class="absolute right-3 top-2 rounded-full border border-white"
        />
        }
        <div class="mt-2 text-center">{{ entity().Name }}</div>
      </div>
    </a>
  `,
})
export class AvatarCardComponent {
  entity = input.required<Entity>();

  model = input<string>();

  placementCondition = computed(() => Number(this.entity().Place));

  avatarUrl = computed(() => {
    const model = this.model();
    return model === 'kennel'
      ? kennelAvatarFn(this.entity())
      : model === 'contact'
        ? contactAvatarFn(this.entity())
        : '';
  });

  iconName = computed(() => 'place-' + `${this.entity().Place}`);
}
