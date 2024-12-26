import { Component, input } from '@angular/core';
import { SPACE_URL_PET } from '@bh/space-url';
import { LinkComponent } from '../link/link.component';

@Component({
  imports: [LinkComponent],
  selector: 'bp-link-pets',
  styles: [],
  template: `
    <bp-link
      [routerLink]="routerLink()"
      [queryParams]="queryParams()"
      [displayName]="displayName()"
      [entityRole]="entityRole()"
      [hasActions]="hasActions()"
    />
  `,
})
export class LinkPetComponent extends LinkComponent {
  override routerLink = input<any[] | string>(['/', SPACE_URL_PET]);
}
