import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { BPNavStore } from '@bh/nav-store';
import { ButtonModule } from 'primeng/button';
import { IconComponent } from '@bp/icon';
import { EntityRoles } from './entity-roles';
@Component({
  imports: [CommonModule, RouterLink, ButtonModule, IconComponent],
  selector: 'bp-link',
  styles: [
    `
      .box-two-rows {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    `,
  ],
  template: `
    @if (!buttonStyle()) {
    <a
      [routerLink]="routerLink()"
      [queryParams]="queryParams()"
      [fragment]="fragment()"
      class="
          text-primary group flex items-center font-medium
          hover:text-primary-hover
        "
    >
      @if (iconName()) {
      <bp-icon
        [iconName]="iconName()"
        [iconColor]="iconColor()"
        [iconSize]="iconSize()"
        class="mr-1"
      />
      }
      <span
        [ngClass]="{
            'truncate ': mode() !== 'default',
            'box-two-rows': rows() > 1,
          }"
      >
        {{ displayName() }}
      </span>
      @if (hasActions()) {
      <i
        class="
              pi pi-ellipsis-v ml-1 text-xs text-transparent
              group-hover:text-secondary-400
            "
      ></i>
      }
    </a>
    } @else {
    <button
      (click)="onActiveItemChange(fragment())"
      class="
          text-primary font-medium
          hover:text-primary-hover
        "
    >
      {{ displayName() }}
      <ng-content></ng-content>
    </button>
    }
  `,
})
export class LinkComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  buttonStyle = input<boolean>(false);
  displayName = input<string>();
  entityRole = input<any | EntityRoles>();
  queryParams = input<Params>();
  routerLink = input.required<any[] | string>();
  fragment = input<string>();
  rows = input<number>(1);
  hasActions = input<boolean>(true);
  mode = input<string>('default');
  iconName = input<string>();
  iconColor = input<string>();
  iconSize = input<string>();

  routerLink2 = computed(() => {
    if (this.routerLink().length === 0) {
      // TODO build currentUrl fragment changer
    }
  });
  //TODO - fragmentContainer
  // TODO - navMethod
  navStore = inject(BPNavStore);
  onActiveItemChange(fragment: string | undefined) {
    this.router.navigate(['./'], {
      fragment: fragment,
      queryParams: this.route.snapshot.queryParams,
      relativeTo: this.route,
    });

    this.navStore.changeFragment(fragment);
  }
}
