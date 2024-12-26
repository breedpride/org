import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { Route } from '@angular/router';
import { SPACE_URL_CALENDAR, URL_MY } from '@bh/space-url';
import { WithViewportHeightDirective } from '@bh/viewport';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CardWrapperDirective } from '@breedpride/wrapper';
import { MenuItem } from 'primeng/api';

@Component({
  imports: [CommonModule, FullCalendarModule, CardWrapperDirective],
  selector: 'bp-calendar-form',
  hostDirectives: [WithViewportHeightDirective],
  styles: ``,
  template: `
    <div bpCardWrapper>
      <full-calendar
        [options]="calendarOptions"
        class="size-full"
      ></full-calendar>
    </div>
  `,
})
export class CalendarFormComponent {
  @HostBinding('class') class = 'card';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
  };
}

export const CalendarPage: Route = {
  loadChildren: () =>
    import('./calendar.routing').then((m) => m.calendarRoutes),
  path: SPACE_URL_CALENDAR,
  pathMatch: 'full',
};

export const CalendarPageMenuItem: MenuItem = {
  badge: 'Coming soon',
  disabled: false,
  icon: 'pi pi-calendar',
  id: 'calendar',
  label: 'Calendar',
  mode: 'userMenu',
  routerLink: ['/', URL_MY, SPACE_URL_CALENDAR],
} as const ;
