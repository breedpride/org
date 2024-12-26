import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breed, Contact } from '@bh/entity/config';
import { PatronPlaceComponent } from '@breedpride/avatar';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ContactAvatarPipe } from '@breedpride/pipes';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [
    CommonModule,
    BadgeModule,
    ContactAvatarPipe,
    RouterLink,
    TooltipModule,
    AngularSvgIconModule,
    PatronPlaceComponent,
  ],
  selector: 'bp-patron-avatar',
  styles: ``,
  template: `
    <a [routerLink]="['/', patron().Contact?.Url]">
      <div
        class="relative flex flex-row-reverse justify-center"
        [pTooltip]="name"
        tooltipPosition="bottom"
      >
        <div
          class="mt-2 size-11 overflow-hidden rounded-full border border-white sm:size-16 "
        >
          <img
            [src]="patron().Contact | contactAvatar"
            class="h-full w-auto max-w-[150%]"
            alt="Card cover image"
          />
        </div>
        <bp-patron-place
          [iconName]="iconName"
          iconSize="18"
          class="absolute  -right-2 hidden sm:block"
        />
        <bp-patron-place
          [iconName]="iconName"
          iconSize="14"
          class="absolute -right-2 sm:hidden"
        />
      </div>
    </a>
  `,
})
// TODO - rework with anyAvatar component
export class PatronAvatarComponent {
  patron = input.required<{
    Breed?: Breed; //  ID only
    Contact?: Contact;
    Id: string;
    Place?: number;
    Rating: number;
  }>();
  imgLink = input<string>();
  get rating() {
    return `${this.patron().Rating}`;
  }
  get name() {
    return `${this.patron().Contact?.Name}`;
  }
  get iconName() {
    return 'place-' + `${this.patron().Place}`;
  }
}
