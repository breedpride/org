import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FooterComponent } from '../../lib/footer/footer.component';
import { SpaceLinkCardComponent } from '../../lib/space-link-card/space-link-card.component';
import { CardModule } from 'primeng/card';

@Component({

  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    CardModule,
    SpaceLinkCardComponent,
    FooterComponent,
  ],
  selector: 'bp-application',
  styles: [``],
  template: `
    <div
      class="
        pb-26 relative flex min-h-[calc(100vh-197px)] w-full flex-col
        items-center justify-center overflow-hidden bg-white
      ">
      <!-- Background -->
      <div
        class="
          absolute right-[-12vw] top-[-23vw] w-full
          lg:right-[-17vw] lg:top-[-61vw]
          md:right-[-15vw] md:top-[-47vw]
          xxl:top-[-64vw]
        ">
        <svg-icon
          name="landing-figure"
          [svgStyle]="{ width: '100vw' }"></svg-icon>
      </div>

      <div
        class="
          flex flex-col items-center justify-center pt-14
          sm:pt-32
        ">
        <div
          class="
            max-w-screen px-6
            lg:px-0
            md:max-w-6xl
            sm:px-10
          ">
          <!-- Page header -->
          <div
            class="
              relative space-y-3 text-center font-mono font-extrabold
              leading-tight tracking-wide text-white
            ">
            <div
              class="
                text-6xl
                md:text-7xl
              ">
              Let's get started
            </div>
            <div
              class="
                text-2xl
                md:text-3xl
              ">
              with your <span class="font-sans">AWESOME</span> spaces
            </div>
          </div>
          <div
            class="
              mt-10 grid gap-14
              md:grid-cols-2
              sm:mt-20
            ">
            <bp-space-link-card
              [space]="{
                name: 'Pets',
                img: 'assets/images/pettypes/dog.jpeg',
                description:
                  'One of the main spaces for breeder work. This space is provided with flexible and fast searching of pet profiles. Easy and comfortable way to view and edit data of your pets. Ergonomic and stylish pedigree. Additional fitures and services to make your experience fabulous',
                link: '../pets',
                points: 'Over 9 M profiles',
                action: 'Register your pets',
                coverText: 'Fill your pets profiles',
              }" />
            <bp-space-link-card
              [space]="{
                name: 'Litters',
                img: 'assets/images/pettypes/dog.jpeg',
                description:
                  'This is the major space for professional breeders work. This space is designed for complex litter management from mating planning to nursing. The space is provided with private and public settings. All breeder plans and work are private but at will breeder can make them public and share them',
                link: '../litters',
                points: '2,5 M litters',
                action: 'Get started your breeder work',
                coverText: 'Make your breeding plans',
              }" />
            <bp-space-link-card
              [space]="{
                name: 'Kennels',
                img: 'assets/images/pettypes/dog.jpeg',
                description:
                  'This space stands for promotion of breeder work. This space is provided with major points of kennel such as top producers, top offspring, show results, and also pets for sale',
                link: '../kennels',
                points: 'More then 1,5 M kennels',
                action: 'Create your kennel',
                coverText: 'Get started working with your kennel',
              }" />

            <bp-space-link-card
              [space]="{
                name: 'Breeds',
                img: 'assets/images/pettypes/dog.jpeg',
                description:
                  'The space is dedicated for favourite breeds. You can be directly involved in the development and promotion of the breed. You can support your breed and get extra features that are unique to your breed',
                link: '../breeds',
                points: '450 breeds',
                action: 'Promote your breed',
                coverText: 'Support your favorite breed',
              }" />
          </div>
        </div>
      </div>
      <!-- Footer -->
    </div>
    <bp-footer />
  `
})
export class ApplicationComponent {}

export const ApplicationPage: Route = {
  loadChildren: () =>
    import('./application.routing').then(m => m.applicationDescription),
  path: 'app',
  pathMatch: 'full',
};
