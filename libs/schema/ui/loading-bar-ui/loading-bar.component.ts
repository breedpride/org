import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
} from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { LoadingStoreV2 } from './loading/loading.service';

@Component({

  imports: [CommonModule, ProgressBarModule],
  selector: 'bp-loading-bar',
  styles: [
    `
      bp-loading-bar {
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
        height: 6px;
      }
    `,
  ],
  template: `
    @if (store.show()) {


            <p-progressBar
      [mode]="store.mode()"
      [value]="store.progress()"
      [style]="{ height: '4px' }"
    />
    }
  `,
})
export class LoadingBarComponent {
  store = inject(LoadingStoreV2);
}
