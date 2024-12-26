import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectEventPage } from '@bh/page-store';
import { DateLocalePipe, ToDatePipe } from '@breedpride/pipes';
import { DotComponent } from '@breedpride/shared';
import { NoteFlagButtonComponent } from '@breedpride/tissue/note';
import { mergeInputs } from 'ngxtension/inject-inputs';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    ToDatePipe,
    DateLocalePipe,
    DotComponent,
    NoteFlagButtonComponent,
  ],
  selector: 'bp-event-name',
  styles: [
    `
      :host {
        display: block;
        // margin-top: 0.75rem;
        padding-bottom: 0.75rem;
        background-color: rgb(var(--card-ground));
        cursor: default;
        caret-color: transparent;
      }
    `,
  ],
  template: `
    @let page = entityPage(); @if (page) {
    <div class="text-md mb-3 flex flex-wrap space-x-1">
      {{ page.Country?.Name }}
    </div>
    <div class="flex space-x-1.5">
      <div class="truncate py-0.5 text-3xl font-bold">
        <a [routerLink]="['/', page.Url]">{{ page.Name }} </a>
      </div>
      <bp-note-flag-button
        [entity]="page"
        parentModel="Event"
        mode="page"
        class="pr-7"
        [hasNotes]="page.HasNotes"
      />
    </div>
    <div class="flex items-center">
      <div
        class="text-secondary flex flex-wrap items-center space-x-2 font-medium"
      >
        <div class="bg-primary-100 size-4 rounded-full"></div>
        <bp-dot
          [margin2]="true"
          [dotNeeded]="false"
          [ngClass]="{ 'hidden ': !page.StartDate }"
          >{{ page.StartDate | toDate | appDateLocale }}
        </bp-dot>
        <bp-dot [margin2]="true" [ngClass]="{ 'hidden ': !page.Status?.Name }">
          {{ page.Status?.Name }}
        </bp-dot>
      </div>
    </div>
    }
  `,
})
export class EventNameComponent {
  defaultOptions = {
    entityPage: injectEventPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  editMode = input<boolean>(false);
}
