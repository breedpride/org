import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PetPage, PublicPetWithPlugins } from '@bh/types';
import { PetAvatarPipe } from '@breedpride/pipes';

@Component({
  selector: 'bp-pet-avatar-small',
  imports: [CommonModule, PetAvatarPipe],
  template: ` <div
    class="outline-offset-2.5 flex-0 flex size-10 items-center justify-center overflow-hidden rounded-full border border-surface-border outline outline-2 outline-offset-2 "
    [ngClass]="{
      'outline-blue-300': entity().Sex?.Code === 'male',
      'outline-pink-300': entity().Sex?.Code === 'female',
      'outline-surface-300': !entity().Sex?.Code,
    }">
    @if (entity() | petAvatar) {
      <img
        class="size-full object-cover"
        [src]="entity() | petAvatar"
        alt="Contact avatar" />
    }
    @if (!(entity() | petAvatar)) {
      <div
        class="flex size-full items-center justify-center rounded-full bg-gray-200 text-lg uppercase text-gray-600">
        {{ entity().Name?.charAt(0) }}
      </div>
    }
  </div>`,
  styles: ``,

})
export class PetAvatarSmallComponent {
  entity = input.required<PublicPetWithPlugins | PetPage>();
}
