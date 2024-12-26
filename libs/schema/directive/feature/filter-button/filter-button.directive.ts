import { Directive, computed, input } from '@angular/core';

@Directive({
  host: {
    '[class]': 'classList()',
  },
  selector: 'button[bpButtonClass]',
  standalone: true,
})
export class FilterButtonDirective {
  active = input<boolean>();
  classList = computed(() => {
    return [
      'p-button-text',
      'px-6',
      'text-base',
      'p-button-sm',
      'dark:text-zinc-900',
      ...(this.active()
        ? [
          'bg-primary-50',
          'hover:bg-primary-100/60',
          'dark:bg-primary-300',
          'dark:hover:bg-primary-200',
        ]
        : ['bg-slate-50', 'hover:bg-slate-100']),
    ];
  });
}
