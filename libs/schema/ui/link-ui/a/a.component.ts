import { Component, input } from '@angular/core';
import { Params, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'bp-a',
  styles: [],
  template: `
    <a [routerLink]="routerLink()" [queryParams]="queryParams()">
      <ng-content />
    </a>
  `,
})
export class AComponent {
  queryParams = input<Params>();
  routerLink = input<any[] | string>();
}
