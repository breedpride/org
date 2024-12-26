import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CoverTemplateComponent } from './cover-template.component';

@Component({
  imports: [CommonModule, CoverTemplateComponent],
  selector: 'bp-custom-cover',
  styles: ``,
  template: `<a
    ><bp-cover-template [coverImg]="coverImg()"></bp-cover-template
  ></a>`,
})
export class CustomCoverComponent {
  coverImg = input.required();
}
