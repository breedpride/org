import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { BaseScrollerCardComponent } from '../base-scroller-card/base-scroller-card.component';

@Component({
  imports: [CommonModule, RouterModule, SkeletonModule],
  selector: 'bp-entity-grid-card',
  styles: [],
  template: `
    @switch (mode) { @case ('navigate') { @if (card === MODEL_CODES.COVER ||
    card === MODEL_CODES.NOTE) { @if (component()) {
    <ng-container
      *ngComponentOutlet="component(); inputs: { entity: entity(), i }"
    />
    } } @else {
    <a
      [routerLink]="[
              '/',
              routingLink(),
              {
                queryParams: queryParams(),
              },
            ]"
    >
      <ng-container
        *ngComponentOutlet="component(); inputs: { entity: entity(), i }"
      />
    </a>
    } } @case ('select') {
    <button
      (click)="selectEntity(entity().Id)"
      (dblclick)="completeSelection(entity())"
    >
      <ng-container
        *ngComponentOutlet="
          component();
          inputs: { entity: entity(), i, selected: selected() }
        "
      />
    </button>
    } @case ('skeleton') { @switch (card) { @case (MODEL_CODES.NOTE) {
    <div class="h-[280px] flex-col p-3">
      <p-skeleton height="206px"></p-skeleton>

      <div class="flex  w-full items-center px-2 pt-2.5 ">
        <p-skeleton
          width="2.5rem"
          height="2.5rem"
          borderRadius="2.5rem"
        ></p-skeleton>
        <div class="ml-3">
          <p-skeleton width="15rem" height="1rem" styleClass=" mb-2.5" />
          <p-skeleton height="0.75rem" width="7rem" />
        </div>

        <div class="ml-auto flex space-x-3">
          <p-skeleton
            width="1rem"
            height="1rem"
            borderRadius="1rem"
          ></p-skeleton>
          <p-skeleton
            width="1rem"
            height="1rem"
            borderRadius="1rem"
          ></p-skeleton>
        </div>
      </div>
    </div>
    } @case (MODEL_CODES.COVER) {
    <div class="h-[280px] flex-col p-3">
      <p-skeleton height="206px"></p-skeleton>

      <div class="flex  w-full items-center px-2 pt-2.5 ">
        <div class="ml-3">
          <p-skeleton
            width="15rem"
            height="1rem"
            styleClass=" mb-2.5"
          ></p-skeleton>
          <p-skeleton height="0.75rem" width="7rem"></p-skeleton>
        </div>
        <div class="ml-auto flex space-x-3">
          <p-skeleton
            width="1rem"
            height="1rem"
            borderRadius="1rem"
          ></p-skeleton>
          <p-skeleton
            width="1rem"
            height="1rem"
            borderRadius="1rem"
          ></p-skeleton>
        </div>
      </div>
    </div>
    } @default {
    <div class="flex h-[280px] flex-col p-3">
      <p-skeleton height="206px"></p-skeleton>
      <div class="w-full p-2">
        <p-skeleton width="15rem" height="1rem"></p-skeleton>
        <div class="flex items-center pt-2">
          <p-skeleton shape="circle" size="1rem" styleClass="mr-2"></p-skeleton>
          <p-skeleton height="0.75rem" width="7rem"></p-skeleton>
        </div>
      </div>
    </div>
    } } } }
  `,
})
export class EntityGridCardComponent extends BaseScrollerCardComponent {}
