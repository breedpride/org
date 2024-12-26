import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FeatureBlockComponent } from '../../lib/feature-block/feature-block.component';
import { PublicProductService } from '../../lib/feature-block/types';
import { FooterComponent } from '../../lib/footer/footer.component';
import { CardModule } from 'primeng/card';
import { TreeModule } from 'primeng/tree';
import { map } from 'rxjs';

@Component({

  imports: [
    RouterModule,
    CommonModule,
    AngularSvgIconModule,
    CardModule,
    TreeModule,
    FeatureBlockComponent,
    FooterComponent,
  ],
  selector: 'bp-product',
  styles: [``],
  template: `
    <div
      class="pb-26 relative flex w-full min-w-[100vw] flex-col items-center justify-center overflow-hidden bg-white"
    >
      <!-- Background -->
      <div
        class="xxl:top-[-64vw] absolute right-[-12vw] top-[-23vw] w-full md:right-[-15vw] md:top-[-47vw] lg:right-[-17vw] lg:top-[-61vw] "
      >
        <svg-icon
          name="landing-figure"
          [svgStyle]="{ width: '100vw' }"
        ></svg-icon>
      </div>

      <div class="flex flex-col items-center justify-center pt-14 sm:pt-32">
        <div class="max-w-screen px-6 sm:px-10 md:max-w-6xl lg:px-0">
          <!-- <div class="px-6 sm:px-10  lg:px-0"> -->
          <!-- Page header -->
          <div
            class="relative space-y-3 text-center font-mono font-extrabold leading-tight tracking-wide text-white "
          >
            <div class="text-6xl md:text-7xl">Product features</div>
            <div class="text-2xl md:text-3xl">
              all in <span class="font-sans ">ONE</span> app
            </div>
          </div>
          @if (services && services.length > 0) {
          <div
            class="relative mt-14 flex flex-col items-center justify-center space-y-10  rounded-2xl bg-white/50 p-8 sm:mt-32
              "
          >
            <!-- <div class="max-w-screen  space-y-10 md:max-w-6xl "> -->
            @for (fb of services; track fb; let i = $index) {
            <bp-feature-block [service]="fb" />
            }
            <!-- </div> -->
          </div>
          }
        </div>
      </div>
    </div>
    <!-- Footer -->
    <bp-footer />
  `,
})
export class ProductComponent {
  ch = inject(ChangeDetectorRef);
  http = inject(HttpClient);
  services!: PublicProductService[];
  constructor() {
    this.http
      .get<any>(`https://dev.dogarray.com/0/BreedprideLandingApi/product`)
      .pipe(
        map((response) => response.result)
        // tap(meta => console.log(meta))
      )
      .subscribe((result) => {
        if (result.isSuccess) {
          this.services = result.data.Services;
          console.log(this.services);
          this.ch.markForCheck();
        } else {
          // todo redirect to 500
        }
      });
  }
}

export const ProductPage: Route = {
  loadChildren: () => import('./product.routing').then((m) => m.productRoutes),
  path: 'product',
  pathMatch: 'full',
};
