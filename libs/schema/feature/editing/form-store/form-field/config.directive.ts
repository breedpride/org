import { Directive, Input } from '@angular/core';

import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { SUPER_STORE } from '@bh/collection-store';
import { fieldStoreFactory } from '@bh/collection-store';

@Directive({
  selector: '[bpConfig]',
  standalone: true,
  providers: [
    {
      provide: SUPER_STORE,
      useFactory: (dir: ConfigToStoreDirective) =>
        fieldStoreFactory(dir.config as any),
      deps: [ConfigToStoreDirective],
    },
  ],
})
export class ConfigToStoreDirective {
  @Input() config!: FilterFieldConfig | SpaceConfig;
}
