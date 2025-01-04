import { AsyncPipe, CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatOption, MatSelect } from '@angular/material/select';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { injectNavigationEnd } from 'ngxtension/navigation-end';
import { take } from 'rxjs';
import { MaterialComponent } from './material/material.component';
// import { AppStore } from '@bh/app';
@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    // RouterLink,
    // MatIcon,
    MaterialComponent,
  ],
  providers: [],
  styles: `
  $app-header-height: 64px;

:host {
    display: block;
    height: 100%;
}

.app-header {
    height: $app-header-height - 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.app-editor-container {
    height: calc(100% - $app-header-height);
}

.app-title {
    font-size: 1.25em;
    font-weight: 500;
}

.app-actions {
    display: flex;
    align-items: center;
    column-gap: 16px;
}
  `,
  selector: 'bh-editor',
  template: `
    <div class="app-header">
      <div class="app-title">Formly Editor</div>
      <div class="app-actions">
        <mat-form-field subscriptSizing="dynamic">
          <mat-label>Formly UI</mat-label>
          <mat-select [(value)]="v">
            <mat-option value="material"> Material </mat-option>
            <mat-option value="bootstrap"> Bootstrap </mat-option>
          </mat-select>
        </mat-form-field>
        <!-- <a
          href="https://github.com/sesan07/formly-editor"
          target="_blank"
          mat-icon-button
        > -->
        <!-- <mat-icon svgIcon="github"></mat-icon>
        </a> -->
      </div>
    </div>
    <div class="app-editor-container">
      <app-material></app-material>
    </div>
  `,
})
export class EditorContainerComponent {
  v = 'material';
  // signal('material');
}
