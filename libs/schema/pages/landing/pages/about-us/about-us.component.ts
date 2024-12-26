import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FooterComponent } from '../../lib/footer/footer.component';

@Component({
  imports: [CommonModule, FooterComponent, AngularSvgIconModule],
  selector: 'bp-about-us',
  styles: [],
  template: `
    <div
      class="pb-26 relative flex min-h-[calc(100vh-197px)] w-full min-w-[100vw] flex-col overflow-hidden bg-white"
    >
      <!-- Background -->
      <div
        class="xxl:top-[-64vw] absolute right-[-7vw] top-[-23vw] w-full md:right-[-10vw]  md:top-[-47vw] lg:top-[-59vw] "
      >
        <svg-icon
          name="landing-figure"
          [svgStyle]="{ width: '100vw' }"
        ></svg-icon>
      </div>

      <div class=" flex flex-col items-center justify-center pt-14 sm:pt-32">
        <div class="max-w-screen px-6 sm:px-10 md:max-w-6xl lg:px-0">
          <!-- <div class="px-6 sm:px-10  lg:px-0"> -->
          <!-- Page header -->
          <div
            class="relative space-y-3 text-center font-mono font-extrabold leading-tight tracking-wide text-white "
          >
            <div class="text-6xl md:text-7xl">
              Hello, from the Breedhub team!
            </div>
            <div class="text-2xl md:text-3xl">So who are we?</div>
          </div>
          <div
            class=" sm:mt-22 relative mt-14 flex flex-col items-center justify-center space-y-8 rounded-2xl bg-white/50 p-8  text-xl"
          >
            <p class="leading-8">
              We are the team of enthusiastic programmers. Such happened that we
              gathered together around one idea - to make some fabulous space
              for a dog people community. This idea came not from nothing - we
              are the same dog people like you. So we are deeply involved in
              this sphere. And we like to give the best Service for breeders and
              dog fans.
            </p>
            <span class="text-primary pb-3 text-4xl font-bold"
              >Our mission is a popularisation of professional breeding</span
            >
            <p class="leading-8">
              We are deeply interested in our users' satisfaction with Breed
              Pride Services. We'd like you to share your opinion of a Breed
              Pride functional. Every proposal will be listened. The most
              popular and needed features will be implemented. <br />We hope you
              will like Breedhub. We are always open to communication to make
              our product more comfortable and valuable for you. We are glad to
              see you on our platform. You are welcome
            </p>
          </div>
        </div>
      </div>
      <!-- Footer -->
    </div>
    <bp-footer />
  `,
})
export class AboutUsComponent {}

export const AboutUsPage: Route = {
  loadComponent: () => AboutUsComponent,
  path: 'about-us',
  pathMatch: 'full',
};
