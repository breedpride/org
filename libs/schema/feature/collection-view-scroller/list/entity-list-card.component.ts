import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { BaseScrollerCardComponent } from '../base-scroller-card/base-scroller-card.component';

@Component({
  imports: [CommonModule, RouterModule, SkeletonModule, NgComponentOutlet],
  selector: 'bp-entity-list-card',
  styles: [],
  template: `
    @switch (mode) { @case ('navigate') {
    <a [queryParams]="queryParams()" [routerLink]="['./', routingLink()]">
      @if (component()) {
      <ng-container
        *ngComponentOutlet="
          component();
          inputs: { entity: entity(), i, selected: selected() }
        "
      />
      }
    </a>
    } @case ('select') {
    <button
      (click)="selectEntity(entity().Id)"
      (dblclick)="completeSelection(entity())"
    >
      @if (component()) {
      <ng-container
        *ngComponentOutlet="
          component();
          inputs: { entity: entity(), i, selected: selected() }
        "
      />
      }
    </button>
    } @case ('skeleton') { @switch (card) { @case (MODEL_CODES.EVENT) {
    <div>
      <p-skeleton width="20rem" styleClass="mb-3" />
      <p-skeleton width="10rem" height="0.5rem" />
    </div>
    } @default {
    <p-skeleton
      width="2.75rem"
      height="2.75rem"
      borderRadius="2.75rem"
      styleClass="mr-3"
    />
    <div>
      <p-skeleton width="20rem" styleClass="mb-3" />
      <p-skeleton width="10rem" height="0.5rem" />
    </div>
    } } } }
  `,
})
export class EntityListCardComponent extends BaseScrollerCardComponent {}
