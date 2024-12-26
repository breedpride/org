import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
  input,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import type { PetMeasurement } from '@bh/entity/config';
import { PETMEASUREMENT_ENTITY_COLUMNS } from '@bh/entity/config';
import { And, IDS } from '@bh/filtering';
import { getSpaceConfig } from '@bh/collection-store';

import { LitterPage } from '@bh/types';
import { ApiService, getParamsFromConfig } from '@breedpride/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableEditCompleteEvent, TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { filter, forkJoin, take } from 'rxjs';
export const WEIGHT_MEASYRMENT_TYPE = 'f90bb505-2962-4590-b81f-b6c9cd40f7eb';
export interface PetWeight {
  Date: Date;
  [x: string]: any;
  // Records: PetMeasurement[];
}
@Component({
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    CalendarModule,
    BadgeModule,
    InputNumberModule,
    ReactiveFormsModule,
    TooltipModule,
  ],
  selector: 'bp-litter-weight-form',
  styles: [
    `
      :host ::ng-deep {
        .p-datatable .p-datatable-tbody > tr > td {
          padding: 0.25rem 1rem;
        }
        .p-button.p-button-icon-only.p-button-rounded {
          width: 4rem;
          height: 4rem;
        }
      }
    `,
  ],
  template: `
    <div class="text-secondary-400 mb-5 flex items-center space-x-2">
      <i class="pi pi-info-circle " style="font-size: 1.5rem"></i>
      <span>The unit of weight measurement is grams</span>
    </div>
    <div class="mt-3 rounded-xl border p-4 ">
      <div class="top-100 sticky z-10 w-full ">
        <button
          pButton
          pRipple
          icon="pi pi-plus"
          class="p-button-rounded absolute right-[2rem] top-6 z-10 "
          (click)="add()"
        ></button>
      </div>
      @if (frmCotizacion) {
      <form [formGroup]="frmCotizacion">
        <div formArrayName="cotizacionArray">
          <p-table
            [value]="datosCotizacionArray().controls"
            editMode="cell"
            dataKey="Date"
            [tableStyle]="{ 'min-width': '50rem' }"
            (onEditComplete)="onEditComplete($event)"
          >
            <ng-template #header>
              <tr>
                <th style="min-width:42px; max-width:42px; width: 42px"></th>
                <th style="min-width:165px; max-width:165px;  width: 165px">
                  Date
                </th>
                @for (pet of this.sortedChildren; track pet) {
                <th
                  style="min-width:140px; max-width:140px; width: 140px"
                  class="truncate"
                  pTooltip=" {{ pet.Name }}"
                  tooltipPosition="top"
                >
                  {{ pet.Name }}
                </th>
                }
              </tr>
            </ng-template>
            <ng-template
              #body
              let-product
              let-i="rowIndex"
              let-editing="editing"
            >
              <tr [formGroupName]="i">
                <td>
                  <button
                    aria-label="Delete"
                    (click)="deleteRow(product)"
                    class="text-secondary-400 my-3.5"
                  >
                    <i class="pi pi-trash "></i>
                  </button>
                </td>
                <td
                  [pEditableColumn]="product.Date"
                  pEditableColumnField="Date"
                >
                  <p-cellEditor>
                    <ng-template #input>
                      <p-calendar
                        appendTo="body"
                        formControlName="Date"
                        [showTime]="true"
                        [showSeconds]="false"
                      >
                      </p-calendar>
                    </ng-template>
                    <ng-template #output>
                      {{ product.get('Date').value | date : 'short' }}
                    </ng-template>
                  </p-cellEditor>
                </td>

                @for (pet of this.sortedChildren; track pet) {
                <td
                  [pEditableColumn]="product[pet.Id]"
                  [pEditableColumnField]="pet.Id"
                >
                  <p-cellEditor>
                    <ng-template #input>
                      <p-inputNumber
                        [formControlName]="pet.Id"
                        inputId="minmax"
                        mode="decimal"
                        [min]="30"
                        [max]="100000"
                      >
                      </p-inputNumber>
                    </ng-template>
                    <ng-template #output>
                      <div class="flex items-center space-x-2">
                        <div>
                          {{ product.get(pet.Id).value || '-' }}
                        </div>
                        <div class="relative h-8 ">
                          @if (delta(product, pet.Id, i)) {
                          <div
                            class="text-md absolute top-0 flex items-center space-x-[1px]"
                            [ngClass]="{
                                    'text-red-500 ':
                                      delta(product, pet.Id, i) < 0,
                                    'text-green-500 ':
                                      delta(product, pet.Id, i) >= 0,
                                  }"
                          >
                            @if (delta(product, pet.Id, i) >= 0) {
                            <i
                              class="pi pi-arrow-up"
                              style="font-size: 8px"
                            ></i>
                            } @if (delta(product, pet.Id, i) < 0) {
                            <i
                              class="pi pi-arrow-down"
                              style="font-size: 8px"
                            ></i>
                            }

                            <span> {{ abs(product, pet.Id, i) }}</span>
                          </div>
                          }
                        </div>
                      </div>
                    </ng-template>
                  </p-cellEditor>
                </td>
                }
              </tr>
            </ng-template>
          </p-table>
        </div>
      </form>
      }
    </div>
  `,
})
export class LitterWeightFormComponent implements OnInit {
  abs(product: any, id: any, i: any) {
    return Math.abs(this.delta(product, id, i)).toString();
  }
  delta(product: any, id: any, i: any): number {
    if (!(product.get(id).value && this.prevValue(i, id))) {
      return 0;
    }
    return product.get(id).value - this.prevValue(i, id);
  }

  build = inject(FormBuilder);

  frmCotizacion: any;

  prevValue(index: any, petId: string) {
    const row = this.products.find((e, i) => {
      return i >= index + 1 && e[petId]?.Value;
    });
    return row ? row[petId]?.Value : null;
  }

  deleteRow(row: FormGroup) {
    const i = row.get('i')?.value;
    const product = this.products[i];
    const ids = Object.entries(product)
      .filter(([key, value]) => key !== 'Date')
      .filter(([key, value]) => value['Id'])
      .map(([key, value]) => value['Id']);
    //TODO rework with null first attempt

    if (ids.length === 0) {
      this.products.splice(i, 1);
      this.setData(this.products);
    } else {
      this.api
        .massDelete(this.config, ids)
        .pipe(
          filter((e) => !!e),
          take(1)
        )
        .subscribe((d) => {
          this.fullRefresh();
        });
    }
  }

  onEditComplete($event: TableEditCompleteEvent) {
    // console.log($event);
    if ($event.field !== 'Date') {
      this.patchNewValue($event.field);
    } else {
      const form = this.datosCotizacionArray().controls.find((e) => e.dirty);
      if (!form) return;
      const product = this.products[form?.get('i')?.value];
      product.Date = form?.get('Date')?.value;

      const ids = Object.entries(product)
        .filter(([key, value]) => key !== 'Date')
        .filter(([key, value]) => value['Id'])
        .map(([key, value]) => value['Id']);
      forkJoin(
        ids.map((id) =>
          this.api.updateEntity(this.config, {
            Date: product.Date,
            Id: id,
          })
        )
      ).subscribe((e) => {
        this.setData(this.products);
      });
    }
  }

  ch = inject(ChangeDetectorRef);
  private patchNewValue(petId: string | undefined) {
    if (!petId) return;
    //TODO check if value changed
    //TODO check for valied
    const form = this.datosCotizacionArray().controls.find((e) => e.dirty);
    if (!form) {
      return;
    } else {
      form.markAsUntouched();
    }
    const product = this.products[form?.get('i')?.value];

    const id = product[petId]?.Id;
    const newValue = form?.get(petId)?.value;
    product[petId].Value = newValue;
    console.log(id, newValue, petId, product);
    //  /find dirty fiedld with $event.field
    if (id) {
      // existing record
      //TODO check if value changed
      this.api
        .updateEntity(this.config, {
          Id: id,
          Value: newValue,
        })
        .subscribe((e) => {
          this.setData(this.products);
        });
    } else {
      // create record
      // TODO check if value changed
      this.api
        .createEntity(this.config, {
          Date: product.Date,
          MeasurementType: { Id: WEIGHT_MEASYRMENT_TYPE },
          Pet: { Id: petId },
          Unit: { Id: '9875daf6-f14a-4bfa-b9d2-704493546184' },
          Value: newValue,
        })
        .subscribe((e) => {
          this.setData(this.products);
        });
    }
  }

  add() {
    this.products.push({ Date: new Date() });
    this.setData(this.products);
  }
  api = inject(ApiService);
  config = getSpaceConfig({
    dateFields: ['Date'],
    entitiesColumns: [...PETMEASUREMENT_ENTITY_COLUMNS],
    entityColumns: [...PETMEASUREMENT_ENTITY_COLUMNS],
    entitySchemaName: 'PetMeasurement',
    id: 'petWeights',
  });
  get sortedChildren() {
    return this.entityPage().Children?.sort((a, b) =>
      a.Name > b.Name ? 1 : -1
    );
  }
  chilrenIds!: string[];
  ngOnInit(): void {
    this.fullRefresh();
  }
  products!: PetWeight[];
  fields!: PetMeasurement;
  entityPage = input.required<LitterPage>();

  private fullRefresh() {
    console.log(this.entityPage());
    this.chilrenIds = this.sortedChildren?.map((e) => e.Id) || [];
    // TODO pets sorted by name
    // Data FilterBy MeasurementType
    const combinedFilter = And(
      // TODO measurmentType filter
      IDS('Pet', [...this.chilrenIds])
    );

    const params = getParamsFromConfig(this.config)
      .set('filters', JSON.stringify(combinedFilter))
      .set('from', JSON.stringify(0));

    this.api
      .listEntities<PetMeasurement>(this.config, params)
      .subscribe((e) => {
        const groupedRecords = groupByDate(e.entities);
        console.log(groupedRecords);
        this.setData(groupedRecords);
      });
  }

  private setData(groupedRecords: any[]) {
    this.updateNullRecords(groupedRecords);
    this.products = groupedRecords.sort((a, b) => {
      return a.Date > b.Date ? -1 : 1;
    });
    this.initFrmCotizacion();
    this.ch.markForCheck();
  }

  private updateNullRecords(groupedRecords: any[]) {
    this.chilrenIds.forEach((id) => {
      const notFilled = groupedRecords.filter((e) => !e[id]);
      console.log(id, notFilled);
      notFilled.map((e) => {
        e[id] = {
          Date: e.Date,
          Pet: {
            Id: id,
          },
          Value: null,
        };
      });
    });
  }
  ///partialSelected
  initFrmCotizacion() {
    this.frmCotizacion = this.build.group({
      cotizacionArray: this.build.array([]),
      descripcion: ['', Validators.required],
      ingresoDetalle: null,
    });
    this.products.forEach((e, i) => {
      const group = this.newCotizacionArray(e, i);
      // group.valueChanges.subscribe(e => {
      //   console.log(e);
      //   console.log(group);
      // });
      this.datosCotizacionArray().push(group);
    });
  }

  datosCotizacionArray(): FormArray {
    return this.frmCotizacion.get('cotizacionArray') as FormArray;
  }

  newCotizacionArray(row: PetMeasurement, i: number) {
    const ids: { [key: string]: any } = {} as Partial<PetMeasurement>;
    this.chilrenIds.forEach((e) => {
      const key = e as keyof PetMeasurement;
      const value = row?.[e as keyof PetMeasurement];
      ids[e] = [
        value && typeof value === 'object' && 'Value' in value
          ? value.Value
          : null,
      ];
    });
    return this.build.group({
      // idd: newuid(),
      Date: [row.Date, Validators.required],
      i,
      ...ids,
    });
  }
}

function groupByDate(records: PetMeasurement[]) {
  const grouped: { Date: Date; [key: string]: any }[] = [];
  const dateMap = new Map<string, PetMeasurement[]>();

  records.forEach((record) => {
    if (!record.Date || !record.Pet) return;
    const date = record.Date.toISOString();
    if (!dateMap.has(date)) {
      dateMap.set(date, []);
      grouped.push({ Date: record.Date });
    }
    dateMap.get(date)?.push(record);
    const group = grouped.find((group) => group.Date.toISOString() === date);
    if (group) {
      if (record.Pet && record.Pet.Id) {
        group[record.Pet.Id] = record;
      }
    }
  });

  return grouped;
}
