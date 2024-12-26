import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IconComponent } from '@bp/icon';
import { PageTabStore } from '@bp/page-tab-store';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'bp-tab-header',
  styles: [
    `
      :host ::ng-deep {
        .p-inputtext {
          padding: 0.45rem 0.75rem 0.45rem 1rem;
        }
        .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
          padding: 0.45rem 0.75rem 0.45rem 1rem;
        }
      }
      :host {
        display: block;
        position: relative;
        // background-color: rgb(var(--card-ground));
      }
    `,
  ],
  imports: [CommonModule, RouterModule, DropdownModule, IconComponent],
  template: `
    @if (mode() === 'list') {
    <div
      class="
          mb-5 flex w-full items-center text-2xl font-semibold
          text-sub-header-color bg-header-ground/75 backdrop-blur-sm
        "
      [ngClass]="{
          'mt-5': i() === 0,
          'mt-10': i() !== 0,
        }"
    >
      @if (tab()?.url()) {
      <a
        [routerLink]="['/', slug, tab()?.url()]"
        pTooltip="Full screen view"
        tooltipPosition="bottom"
        class="
              flex w-full items-center px-6 py-2
              hover:bg-hover-surface-header
            "
      >
        <bp-icon
          [iconName]="tab()?.icon()"
          iconColor="rgb(var(--sub-header-color))"
          iconSize="20"
          class="mr-2"
        />
        <span> {{ label() }}</span>
        <li class="pi pi-window-maximize ml-auto text-sub-header-color"></li>
      </a>
      } @else {
      <div
        class="flex items-center px-6 py-2 w-full cursor-default caret-transparent"
      >
        <bp-icon
          [iconName]="tab()?.icon()"
          iconColor="rgb(var(--sub-header-color))"
          iconSize="20"
          class="mr-2"
        />
        <span class=""> {{ label() }}</span>
        @if ( tab()?.fragment() === 'moments' || tab()?.fragment() ===
        'timeline' ) {
        <div
          class=" text-center text-sm font-bold uppercase text-primary  ml-auto "
        >
          Coming soon
        </div>
        }
      </div>
      }
    </div>
    } @else { @if (tab()?.url() && mode() !== 'page') {
    <div class="relative w-full py-2">
      <div
        class="
              ml-auto flex w-[3.1rem] items-center space-x-3
              md:w-[10.4rem]
            "
      >
        <span
          class="
                text-secondary-400 hidden
                md:block
              "
          >Full screen view</span
        >
        <a
          [routerLink]="['/', slug, tab()?.url()]"
          pTooltip="Full screen view"
          tooltipPosition="bottom"
          class="
                text-secondary border border-secondary-500 flex size-9
                items-center justify-center rounded-full
              "
        >
          <li class="pi pi-window-maximize"></li>
        </a>
      </div>
    </div>
    } }
    <!-- @if (tab()?.fragment() === 'pedigree') {
    <div
      class="flex items-center gap-5 text-secondary font-medium"
      [ngClass]="{
          'absolute left-0 top-1.5': mode() === 'tab',
          '-mt-2 pb-3': mode() === 'list',
          'py-2 px-4 bg-surface-header': mode() === 'page',
        }"
    >
      <span
        class="
            hidden
            sm:block
          "
        >Select a generation</span
      >
      <span class="sm:hidden">Generations</span>
      <p-dropdown></p-dropdown>
    </div>
    } -->
  `,

})
export class TabHeaderComponent {
  route = inject(ActivatedRoute);
  slug = this.route.snapshot.params['slug'];
  tab = input<PageTabStore>();
  mode = input<string>('list');
  i = input<number>();
  label = computed(() => {
    return String(
      (this.tab()?.label() ?? '') +
        Math.round((this.tab()?.bodyVisibility() ?? 0) * 100) +
        ' ' +
        this.tab()?.initTop()
    );
  });
}
