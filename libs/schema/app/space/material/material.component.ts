import { Component } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { EditorComponent } from '@sesan07/ngx-formly-editor';
import { AsyncPipe } from '@angular/common';
import { MatOption } from '@angular/material/core';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import { DomSanitizer } from '@angular/platform-browser';
import {
  Event,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-material',
  template: ` <editor-main></editor-main> `,
  standalone: true,
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
}`,
  imports: [EditorComponent],
})
export class MaterialComponent {}
