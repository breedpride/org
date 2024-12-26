import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavButtonComponent } from '@breedpride/navigation';
import { PedigreeStore } from '@bp/pedigree-store';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  imports: [CommonModule, NavButtonComponent],
  selector: 'bp-pedigree-header',
  styles: `
    :host {
      width: 100%;
    }
  `,
  template: `
    <div class="flex w-full justify-between">
      <bp-nav-button />

      <div>
        <button aria-label="Close">
          <i class="pi pi-times text-secondary-500"></i>
        </button>
      </div>
    </div>
  `
})
export class PedigreeHeaderComponent {
  pedigreeStore = inject(PedigreeStore);
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}
}
