import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'bp-footer',
  styles: [],
  template: `
    <div
      class=" min-w-screen from-primary-500 bottom-0 flex flex-col bg-gradient-to-r to-pink-500 px-8 pb-5  pt-14 text-white sm:px-10 md:px-40  xl:px-60"
    >
      <div
        class="grid w-full  grid-cols-2 justify-between gap-10  uppercase  md:flex "
      >
        <div class="order-4 flex flex-col space-y-2  md:order-1">
          <!-- Logo -->
          <div class="block">
            <img
              class=" h-21 opacity/60"
              src="assets/images/logo/logo-white.svg"
              alt="Breedhub Logo"
            />
          </div>
          <!-- Contact -->
          <div class="hidden md:flex xl:hidden">
            <div class="flex  flex-col md:space-y-2">
              <a href="mailto:info@breedhub">
                <span class=" text-center font-bold lowercase"
                  >info&#64;breedhub</span
                >
              </a>
              <div class="space-x-6 self-end md:self-center">
                <i class="pi pi-facebook" style="font-size: 2rem"></i>
                <i class="pi pi-discord" style="font-size: 2rem"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          class="order-3 col-span-2 flex items-center justify-center md:hidden"
        >
          <div class=" h-[1px] w-[30vw] bg-white/30"></div>
        </div>
        <!-- Spaces -->
        <div class="order-1 flex justify-center space-x-6  md:order-2">
          <span class=" tracking-wide opacity-70">Spaces</span>
          <div
            class="grid  max-h-[7.25rem] gap-x-10 gap-y-2 font-bold xl:grid-flow-col xl:grid-rows-3"
          >
            <a routerLink="../pets">
              <div>Pets</div>
            </a>
            <a routerLink="../kennels">
              <div>Kennels</div>
            </a>
            <a routerLink="../breeds">
              <div>Breeds</div>
            </a>
            <a routerLink="../litters">
              <div>Litters</div>
            </a>
          </div>
        </div>
        <!-- For users -->
        <div class="order-2 flex justify-center space-x-6 md:order-3">
          <span class="opacity/70 tracking-wide">for users</span>
          <div
            class="grid  gap-x-10  gap-y-2  font-bold xl:grid-flow-col  xl:grid-rows-3 "
          >
            <a routerLink="../app"> App </a>
            <a routerLink="../product"> Product </a>
            <a routerLink="../pricing"> Pricing </a>
            <a routerLink="../about-us"> About </a>
            <a routerLink="../terms-and-conditions"> Terms </a>
            <a routerLink="../privacy-policy"> Privacy </a>
          </div>
        </div>

        <!-- Contact -->
        <div class="order-5 md:hidden xl:order-4 xl:flex xl:space-x-6">
          <span class="opacity/70 hidden tracking-wide xl:block">Contact</span>
          <div class="flex min-h-[100%] flex-col items-center justify-between">
            <a href="mailto:info@breedhub">
              <span class=" text-center font-bold lowercase"
                >info&#64;breedhub</span
              >
            </a>
            <div class="space-x-6 self-center xl:self-end">
              <i class="pi pi-facebook" style="font-size: 2rem"></i>
              <i class="pi pi-discord" style="font-size: 2rem"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="my-5 h-[1px] w-full bg-white/30"></div>

      <span class="self-start font-medium"
        >Breedhub &copy; 2024 | With ♥ from Ukraine</span
      >
    </div>
  `,
})
export class FooterComponent {}
