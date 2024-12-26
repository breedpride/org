import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'bp-cover-template',
  styles: ``,
  template: `
    <div class="flex size-full flex-col">
      @if (coverImg()) {
      <img
        #myImage
        class="absolute inset-0 size-full object-cover "
        [src]="coverImg()"
        alt="Cover image"
      />

      @if (needGradient()) {
      <div
        class="to-primary-400/85 absolute inset-0 size-full bg-gradient-to-r from-primary-50/10 "
      ></div>
      }
      <ng-content />
      } @else {}
      <!-- <ng-content /> -->
    </div>
  `,
})
export class CoverTemplateComponent {
  coverImg = input.required();
  needGradient = input<boolean>(false);
}
