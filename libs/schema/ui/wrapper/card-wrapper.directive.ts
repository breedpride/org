import { Directive, HostBinding, input } from '@angular/core';
//TODO - rework
@Directive({
  selector: '[bpCardWrapper]',
  standalone: true,
})
export class CardWrapperDirective {
  mode = input<string>('full');
  @HostBinding('class')
  get hostClasses(): string {
    let classes = 'w-full overflow-y-auto py-2';

    if (this.mode() === 'full') {
      classes += ' px-0';
    } else if (this.mode() === 'cropped') {
      classes += ' px-5';
    } else if (this.mode() === 'centrated') {
      classes += ' px-5 flex justify-center';
    }
    console.log('classes from directive!', classes);
    return classes;
  }
}
