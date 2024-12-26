import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { BPNavStore } from '@bh/nav-store';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'bp-nav-button',
  imports: [
    CommonModule,
    SplitButtonModule,
    MenuModule,
    ButtonModule,
    ButtonGroupModule,
  ],
  styles: [
    `
      .right-button {
        border-radius: 0 2rem 2rem 0;
      }

      .left-button {
        border-radius: 2rem 0 0 2rem;
      }
    `,
  ],
  template: ` <p-buttongroup>
    <p-menu
      #selectMenu
      [model]="items()"
      [popup]="true"
      appendTo="body"
    ></p-menu>
    <div class="flex shrink-0">
      <button
        pTooltip="Back forward"
        tooltipPosition="bottom"
        (click)="back()"
        [disabled]="navStore.currentPosition() < 1"
        class="
          left-button flex items-center border border-r-[0.5px] j ustify-center px-2.5 py-0.5
          text-xl
        "
        [ngClass]="{
          'border-surface-600 dark:border-surface-400 text-surface-600 dark:text-surface-400': mode() === 'default',
          ' hover:bg-surface-50 hover:dark:bg-surface-700':
            mode() === 'default' && navStore.currentPosition() > 1,
          'border-white bg-white/30 text-white':
            mode() === 'white',
          ' hover:bg-white/60':
            mode() === 'white' && navStore.currentPosition() > 1,
        }"
      >
        <i class="pi pi-arrow-left"></i>
      </button>
      <button
        pTooltip="Navigate"
        [disabled]="navStore.currentPosition() < 2"
        tooltipPosition="bottom"
        (click)="selectMenu.toggle($event)"
        class="
          right-button flex items-center justify-center border border-l-[0.5px] px-2.5 py-0.5
          text-xl
        "
        [ngClass]="{
          'border-surface-600 dark:border-surface-400 text-surface-600 dark:text-surface-400': mode() === 'default',
          ' hover:bg-surface-50 hover:dark:bg-surface-700':
            mode() === 'default' && navStore.currentPosition() > 1,
          'border-white bg-white/30  text-white': mode() === 'white',
          ' hover:bg-white/60':
            mode() === 'white' && navStore.currentPosition() > 1,
        }"
      >
        <i class="pi pi-angle-down"></i>
      </button>
    </div>
  </p-buttongroup>`,

})
export class NavButtonComponent {
  mode = input<string>('default');
  back() {
    this.navStore.cancel();
  }
  navStore = inject(BPNavStore);

  items = computed(() => {
    // TODO  - without last item
    const count = this.navStore.creatioEntities().length;
    return this.navStore
      .creatioEntities()
      .filter((e) => e.id !== count - 1)
      .map((e) => {
        return {
          command: () => {
            this.navStore.gotoToHistoryElemenent(e.id, e.url);
          },
          label: e.name || e.url,
        };
      });
  });
}
