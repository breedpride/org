import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
@Component({
  imports: [RouterOutlet, ToastModule],
  selector: 'bp-empty-layout',
  styles: [],
  template: `<p-toast /><router-outlet />`,
})
export class EmptyLayoutComponent {}
