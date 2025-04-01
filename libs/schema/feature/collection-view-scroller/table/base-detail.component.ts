import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
  Input,
  OnInit,
  signal,
  TemplateRef,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldCode } from '@bh/windmill';
import { trackByFn } from '@bh/list';
import { SpaceConfig } from '@bh/superfield';
import { EditorComponentName } from '@bh/windmill';
import { ConfirmDialogComponent } from '@bp/cell/confirm-dialog-ui';
import { ConfirmationService, MessageService, SortEvent } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    TableModule,
    ButtonModule,
    // ToDatePipe,
    // DateLocalePipe,
    ToastModule,
    ConfirmDialogModule,
    ConfirmDialogComponent,
    // ExternalLinkComponent,
    SpeedDialModule,
    MenuModule,
  ],
  providers: [MessageService, ConfirmationService],
  selector: 'bp-base-detail',
  styles: [
    `
      .p-datatable-flex-scrollable .p-datatable-wrapper {
        flex-basis: auto !important;
        height: 0 !important;
        background: red;
      }
    `,
  ],
  template: `
    <p-toast></p-toast>
    <bp-confirm-dialog />
    <div class="relative mt-3 rounded-xl border bg-card-ground p-4 ">
      <div
        class="sticky z-10 flex w-full items-end"
        [ngStyle]="{
          top: stickyHeight,
        }"
      >
        <!-- @if (speedDialDirection === 'down') {
        <p-speedDial
          class="absolute right-20 top-6 z-10"
          direction="down"
          [model]="detailStore._detailMenu()"
          showIcon="pi pi-bars"
          hideIcon="pi pi-times"
        >
        </p-speedDial>
        } @else {
        <p-speedDial
          class="absolute right-20 top-6 z-10"
          direction="up-left"
          [model]="detailStore._detailMenu()"
          showIcon="pi pi-bars"
          [radius]="60"
          type="quarter-circle"
          hideIcon="pi pi-times"
        />
        }
        <p-menu
          #menu
          [popup]="true"
          appendTo="body"
          [model]="detailStore._detailMenu()"
        /> -->
      </div>
      <!-- @if (scrollHeightSignal()) {
      <p-table
        class="p-datatable-flex-scrollable"
        [value]="entities()"
        dataKey="Id"
        (sortFunction)="customSort($event)"
        [customSort]="true"
        selectionMode="single"
        (onRowSelect)="detailStore.onRowSelect($event)"
        [(selection)]="detailStore.oldSelected"
        [scrollable]="true"
        scrollHeight="flex"
        [virtualScrollItemSize]="46"
        [lazy]="true"
        (onLazyLoad)="detailStore.onLazyLoad($event)"
      >
        <ng-template #header>
          <tr>
            @for (col of columns(); track col) {
            <th [class]="col.class || ''" [ngClass]="col.ngClass">
              {{ col.placeholder }}

            </th>
            }
          </tr>
        </ng-template>
        <ng-template #body let-entity>
          <tr
            [pSelectableRow]="entity"

          >
            @for (col of columns(); track trackByFn($index, col)) {
            <td [class]="col.class || ''" [ngClass]="col.ngClass">
              @switch (col.component) { @case (FormFieldEnum.AUTOCOMPLETE) {
              {{ entity[col.id]?.Name }}
              } @case (FormFieldEnum.DROPDOWN) {
              {{ entity[col.id]?.Name }}
              } @case (FormFieldEnum.BOOLEAN) {
              <p-checkbox
                [(ngModel)]="entity[col.id]"
                [binary]="true"
                [disabled]="true"
                inputId="binary"
              ></p-checkbox>
              } @case (FormFieldEnum.TEXT) {
              <bp-external-link [text]="entity[col.id]" />
              } @case (FormFieldEnum.DATE) {
              {{ entity[col.id] | toDate | appDateLocale }}
              } }
            </td>
            }
          </tr>
        </ng-template>
      </p-table>
      } -->
    </div>
  `,
})

export class BaseDetailComponent  {
  // (dblclick)="detailStore.onRowDblClick($event, entity)"
  @Input() speedDialDirection = 'down';
  @Input() stickyHeight = '20rem';
  FormFieldEnum = FormFieldCode;
  public detailStore = signal([]);
  //  inject(DetailStore);

  config = input.required<SpaceConfig>();
  @Input() editorTemplate!: TemplateRef<{ $implicit: any }>;
  @Input() editorComponent!: EditorComponentName;

  columns = computed(() => this.config().columns);

  // entities = this.detailStore.Entities;

  scrollHeightSignal = signal<string>('300vh');

  customSort(event: SortEvent): void {
    event?.data?.sort((data1, data2) => {
      const f1 = event.field as keyof typeof data1;
      const f2 = event.field as keyof typeof data2;
      const value1 = data1[f1];
      const value2 = data2[f2];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else if (typeof value1 === 'object' && typeof value2 === 'object') {
        result = value1.Name.localeCompare(value2.Name);
      } else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return (event?.order ?? 0) * result;
    });
  }

  trackByFn = trackByFn;


}
