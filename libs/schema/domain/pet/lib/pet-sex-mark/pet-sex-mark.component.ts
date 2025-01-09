import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  input,
} from '@angular/core';
export type Male = 'male';
export type Female = 'female';
export type DefinedSexCode = Female | Male;
export type SexCode = DefinedSexCode | null | undefined;
@Component({
  imports: [CommonModule],
  selector: 'bp-pet-sex-mark',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: ``,
})
export class PetSexMarkComponent {
  style = input<string>('horizontal');
  sex = input<string>();
  @HostBinding('class') get dynamicClasses(): string {
    let classes = 'rounded-full';
    classes += this.sex() === 'male' ? ' bg-blue-300 dark:bg-blue-400' : '';
    classes += this.sex() === 'female' ? ' bg-pink-300 dark:bg-pink-400' : '';
    classes +=
      this.sex() !== 'female' && this.sex() !== 'male' ? ' bg-slate-300 dark:bg-slate-400' : '';
    classes += this.style() === 'horizontal' ? ' h-1 w-full' : '';
    classes += this.style() === 'vertical' ? ' h-4 w-1' : '';
    classes += this.style() === 'round' ? ' h-4 w-4' : '';
    return classes.trim();
  }
}
