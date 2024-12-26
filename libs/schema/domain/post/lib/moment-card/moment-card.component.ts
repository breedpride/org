import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'bp-moment-card',
  styles: [
    `
      .card-fixed-measures {
        height: 12rem;
        width: 8.4rem;

        @screen sm {
          height: 14rem;
          width: 9.8rem;
        }

        @screen lg {
          height: 16rem;
          width: 11.2rem;
        }

        @screen xl {
          height: 20rem;
          width: 14rem;
        }
      }
    `,
  ],
  template: `
    <div
      class="relative flex overflow-hidden rounded-lg border border-surface-border"
      [ngClass]="{
        'card-fixed-measures': publicMode(),
      }"
    >
      <div
        class="group flex cursor-pointer items-center justify-center duration-300 hover:scale-110"
      >
        <div
          class=" absolute z-10 h-full w-[110%] duration-300 group-hover:bg-surface-900/30"
        >
          <div
            class="hidden size-full items-end p-5 text-sm text-white group-hover:flex lg:p-7"
          >
            The most exciting pictures of your pet's life will be here
            <br />Coming soon
          </div>
        </div>
        <img
          class="h-[100%] w-auto max-w-[150%]"
          src="assets/images/pettypes/dog.jpeg"
          alt="A dog"
        />
      </div>
    </div>
  `,
})
export class MomentCardComponent {
  publicMode = input<boolean>(true);
}
