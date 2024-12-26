import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { nullId } from '@bh/identifying';
import { injectLitterPage } from '@bh/page-store';
import { AComponent } from '@breedpride/link';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { ChipModule } from 'primeng/chip';

@Component({
  imports: [CommonModule, ChipModule, AComponent, AngularSvgIconModule],
  selector: 'bp-litter-achievements',
  styles: [
    `
      svg {
        width: 16px;
        height: 16px;
        fill: white;
      }
    `,
  ],
  template: ` @let page = entityPage(); @if (page) {
    <div
      card-achievements
      class="mb-6 mt-3"
      [ngClass]="{
      'hidden ':
        page.Father?.Id === nullId &&
        page.Mother?.Id === nullId,
    }"
    >
      <div
        aria-label="parents"
        class="align-items-center text-md flex flex-wrap gap-2"
      >
        @if (page.Father?.Id !== nullId) {
        <bp-a [routerLink]="['/', page.Father?.Url]">
          <p-chip label="{{ page.Father?.Name }}">
            <svg-icon name="male" class="mr-2"></svg-icon>
          </p-chip>
        </bp-a>
        } @if (page.Mother?.Id !== nullId) {
        <bp-a [routerLink]="['/', page.Mother?.Url]">
          <p-chip label=" {{ page.Mother?.Name }}">
            <svg-icon name="female" class="mr-2"></svg-icon>
          </p-chip>
        </bp-a>
        }
      </div>
    </div>
    }`,
})
export class LitterAchievementsComponent {
  defaultOptions = {
    entityPage: injectLitterPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  nullId = nullId;
}
