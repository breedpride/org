import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

export type SpaceLink = {
  action: string;
  coverText: string;
  description: string;
  img: string;
  link: string;
  name: string;
  points: string;
};

@Component({
  imports: [CommonModule, RouterModule, CardModule],
  selector: 'bp-space-link-card',
  styles: [],
  template: `
    <a routerLink="{{ space().link }}">
      <div class="flex  max-w-sm flex-col sm:max-w-none">
        <div
          class="relative flex h-[340px] items-center justify-center overflow-hidden rounded-xl border "
        >
          <div
            class="group flex cursor-pointer items-center justify-center duration-300 hover:scale-110"
          >
            <div
              class=" absolute z-10 h-[340px] w-[110%] duration-300 group-hover:bg-black/30"
            >
              <div
                class=" px-18 hidden size-full items-end py-8 text-lg text-white group-hover:flex"
              >
                {{ space().coverText }}
              </div>
            </div>
            <img
              class="h-[100%] w-auto max-w-[150%]"
              [src]="space().img"
              alt="Space image"
            />
          </div>
        </div>
        <div class="w-full  space-y-2  px-5 py-3 ">
          <div class=" flex ">
            <div class=" text-xl font-bold uppercase">
              {{ space().name }}
            </div>
            <div class="text-primary-700   ml-auto">
              {{ space().action }}
            </div>
          </div>
          <div class="text-secondary-600 font-bold">
            {{ space().points }}
          </div>
          <div class="text-secondary flex">
            {{ space().description }}
          </div>
        </div>
      </div>
    </a>
  `,
})
export class SpaceLinkCardComponent {
  space = input.required<SpaceLink>();
}
