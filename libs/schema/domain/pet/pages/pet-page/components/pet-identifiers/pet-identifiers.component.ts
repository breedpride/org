import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { trackByFn } from '@bh/list';
import { injectPetPage } from '@bh/page-store';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { mergeInputs } from 'ngxtension/inject-inputs';

@Component({

  imports: [CommonModule],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-pet-identifiers',
  styles: [
    `
      .pet-identifier-grid {
        grid-template-columns: 120px auto;

        @screen sm {
          grid-template-columns: 184px auto;
        }
      }

      .pet-identifier-grid-full {
        grid-template-columns: 184px auto;

        @screen lg {
          grid-template-columns: 284px auto;
        }
      }
    `,
  ],
  template: `
    <div
      class="card mt-3 flex flex-auto flex-col p-6 lg:px-8 cursor-default caret-transparent"
    >
      @if (identifiers()?.length ?? 0 > 0) {
      <div class="grid">
        <!-- Header -->
        <div
          class=" grid gap-3 border-b border-surface-border px-6 py-3 font-bold text-secondary lg:px-8"
          [ngClass]="{
              'pet-identifier-grid-full': fullscreen(),
              'pet-identifier-grid': !fullscreen(),
            }"
        >
          <div class="">Identifier</div>
          <div>Value</div>
        </div>
        <!-- Rows -->
        @for ( identifier of identifiers(); track trackByFn($index, identifier)
        ) {
        <ng-container class="">
          <div
            class=" grid items-center gap-3  px-6 py-2 bg-card-ground even:bg-even-card-ground lg:px-8"
            [ngClass]="{
                  'pet-identifier-grid-full': fullscreen(),
                  'pet-identifier-grid': !fullscreen(),
                }"
          >
            <!-- Identifier -->
            <div class="">
              {{ identifier.Type.Name }}
            </div>
            <!-- Value -->
            <div class="">
              {{ identifier.Value }}
            </div>
          </div>
        </ng-container>
        }
      </div>
      } @else {
      <span class="text-secondary p-8 text-center  font-medium">
        There are no pet identifiers!
      </span>
      }
    </div>
  `
})
export class PetIdentifiersComponent {
  fullscreen = injectFullscreen();

  defaultOptions = {
    entityPage: injectPetPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });

  entityPage = this.options().entityPage;
  identifiers = computed(() => {
    return this.entityPage()?.PetIdentifiers;
  });
  //  input<PetIdentifier2[]>([]);

  trackByFn = trackByFn;
}
