import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  Injector,
  input,
  signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldCode } from '@bh/consts';
import { trackByFn } from '@bh/list';
import { WithCreatioId } from '@bh/superfield';
import { ExternalLinkComponent } from '@breedpride/link';
import { DateLocalePipe, ToDatePipe } from '@breedpride/pipes';
import { MessageService, SortEvent } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule, TableRowSelectEvent } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import {injectSpaceStore,} from '@bh/collection-store';
import {  ModalEditorService } from '@bh/editing';
import { ENTITIES_FIELDS_CONFIG } from './fileds.token';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    TableModule,
    ButtonModule,
    ToDatePipe,
    DateLocalePipe,
    ToastModule,
    ConfirmDialogModule,
    ExternalLinkComponent,
    SpeedDialModule,
    MenuModule,
  ],
  providers: [MessageService],
  selector: 'bp-table-view',
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
    <!-- <p-toast></p-toast>
    <bp-confirm-dialog /> -->
    <div class="relative mt-3 rounded-xl border bg-card-ground p-4 ">
      <p-table
        [value]="entities()"
        dataKey="Id"
        (sortFunction)="customSort($event)"
        [customSort]="true"
        selectionMode="single"
        (onRowSelect)="onRowSelect($event)"
        [(selection)]="oldSelected"
        [scrollable]="true"
        [scrollHeight]="scrollHeight()"
        [virtualScrollItemSize]="46"
        [lazy]="true"
        (onLazyLoad)="listStore.onLazyLoad($event)"
      >
        <ng-template #header>
          <tr>
            @for (col of columns; track col) {
            <th [class]="col.columnClass" [ngClass]="col.columnNgClass">
              {{ col.placeholder }}
              <!-- <p-sortIcon field="col"></p-sortIcon>  -->
            </th>
            }
          </tr>
        </ng-template>
        <ng-template #body let-entity>
          <tr
            [pSelectableRow]="entity"
            (dblclick)="onRowDblClick($event, entity)"
          >
            @for (col of columns; track trackByFn($index, col)) {
            <td [class]="col.columnClass" [ngClass]="col.columnNgClass">
              {{ col.component }}
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
              } @case (FormFieldEnum.NUMBER) {
              {{ entity[col.id] }}
              } }
            </td>
            }
          </tr>
        </ng-template>
      </p-table>
    </div>
  `,
})
export class TableViewComponent {
  injector = inject(Injector);
  config = inject(ENTITIES_FIELDS_CONFIG);

  modal = inject(ModalEditorService);

  FormFieldEnum = FormFieldCode;
  public listStore = injectSpaceStore();

  scrollHeight = input<string>('100%');
  columns = Object.values(this.config).map((e) => e);

  entities = this.listStore.Entities;

  oldSelected: any;
  _detailMenu = signal([]);


  onRowDblClick($event: MouseEvent, entity: WithCreatioId): void {
    this.modal.editEntity({ entityId: entity.Id, injector: this.injector });
  }
  onRowSelect($event: TableRowSelectEvent): void {
    if ($event.data) {
      this.listStore.setSelectedId($event.data.Id);
    } else {
      this.listStore.setSelectedId('');
    }
  }
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
