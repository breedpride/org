import { CommonModule } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import {
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { Breed } from '@bh/entity/config';
import { ApiService } from '@breedpride/api';
import { CounterComponent } from '@bh/counter';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TimelineModule } from 'primeng/timeline';
import { BreedProgressComponent } from '../../lib/breed-progress/breed-progress.component';
import { FooterComponent } from '../../lib/footer/footer.component';
type HomeData = {
  achievements: {
    Active: boolean;
    Date: string;
    Description: string;
    IntValue: number;
    Name: string;
    Position: number;
  }[];
  eventCount: number;
  kennelCount: number;
  organizationCount: number;
  petProfileCount: number;
  topAchievementBreeds: TopBreed[];
  topRatingBreeds: TopBreed[];
};
export type TopBreed = Breed & { LastAchievement: { Name: string } };
@Component({

  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    BreedProgressComponent,
    CounterComponent,
    FooterComponent,
    TimelineModule,
  ],
  selector: 'bp-home',
  styles: [
    `
      .customized-timeline {
        .p-timeline-event-content {
          padding: 0 0 5px 1rem !important;
        }
        .p-timeline-event-opposite {
          flex: 0;
          min-width: 0;
          padding: 0 !important;
        }
      }

      .goal-grid {
        grid-template-columns: 42px auto;
        grid-template-rows: 94px 94px 82px 132px 122px;

        @screen sm {
          grid-template-columns: 52px auto;
          grid-template-rows: 76px 76px 76px 96px 76px;
        }

        @screen md {
          grid-template-columns: 52px auto;
          grid-template-rows: 56px 56px 56px 56px 56px;
        }

        /* @screen lg {
          grid-template-columns: 4px 4px 4px 4px 4px 52px auto;
        }

        @screen xl {
          grid-template-columns: 4px 4px 4px43px 4px 52px auto;
        } */
      }

      .header-goal-grid {
        grid-template-columns: 42px auto;

        @screen sm {
          grid-template-columns: 104px auto;
        }
      }

      .custom-marker {
        display: flex;
        width: 2rem;
        height: 2rem;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        border-radius: 50%;
        border: 0.15rem solid #673ab7;
        background-color: #673ab7;
        z-index: 1;
      }
    `,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  KennelCount = computed(() => {
    return this.home().kennelCount;
  });
  specialAchivenmentns = computed(() => {
    return this.home()
      .achievements.slice(1)
      .sort((a, b) => (a.Position > b.Position ? -1 : 1));
  });
  tabClass(form: number, value: number) {
    if (form === 1) {
      return {
        'border-b-2 border-primary-400': this.openTab === value,
      };
    } else {
      return {
        'border-b-2 border-pink-400': this.openBreedTab === value,
      };
    }
  }
  constructor() {
    this.api
      .get(
        'https://dev.dogarray.com/0/BreedprideLandingApi/Home',
        new HttpParams()
      )
      .subscribe((e) => {
        const t = e.result.data as HomeData;
        if (t.eventCount > 0) this.home.set(t);
        console.log(t);
      });
  }

  home = signal<HomeData>({
    achievements: [],
    eventCount: 0,
    kennelCount: 0,
    organizationCount: 0,
    petProfileCount: 0,
    topAchievementBreeds: [],
    topRatingBreeds: [],
  });

  api = inject(ApiService);
  openBreedTab = 1;
  openTab = 1;
  toggleBreedTabs($tabNumber: number): void {
    this.openBreedTab = $tabNumber;
  }

  toggleTabs($tabNumber: number): void {
    this.openTab = $tabNumber;
  }
}

export const HomePage: Route = {
  loadChildren: () => import('./home.routing').then((m) => m.landingHomeRoutes),
  path: 'home',
  pathMatch: 'full',
};
