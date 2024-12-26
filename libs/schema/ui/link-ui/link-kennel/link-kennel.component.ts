import { Component, input } from '@angular/core';
import { SPACE_URL_KENNEL } from '@bh/space-url';
import { LinkComponent } from '../link/link.component';

@Component({
  imports: [LinkComponent],
  selector: 'bp-link-kennel',
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
export class LinkKennelComponent extends LinkComponent {
  override routerLink = input<any[] | string>(['/', SPACE_URL_KENNEL]);
}
