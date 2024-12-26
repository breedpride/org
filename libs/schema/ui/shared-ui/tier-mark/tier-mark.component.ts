import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  computed,
  input,
} from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from 'primeng/tooltip';
interface TierMark {
  Contact: { Id: string; Name: string };
  Product: { Name: string };
  Type: 'breeder' | 'contact' | 'owner';
}

@Component({
  imports: [CommonModule, AngularSvgIconModule, TooltipModule],
  selector: 'bp-tier-mark',
  styles: [],
  template: `
    @if (mode() === 'list') {
    <div class="flex space-x-1 pr-4 sm:hidden">
      @for (tier of tiers(); track tier) {
      <div
        [pTooltip]="getToolTip(tier)"
        tooltipPosition="top"
        class="size-4 rounded-full "
        [ngStyle]="{
              background: tier.Color,
            }"
      ></div>
      }
    </div>
    } @for (tier of tiers(); track tier) {
    <div
      [pTooltip]="getToolTip(tier)"
      tooltipPosition="top"
      class="flex items-center space-x-2 rounded-l-full px-3 py-1  text-xs font-bold uppercase text-white "
      [ngClass]="{ 'hidden sm:flex ': mode() === 'list' }"
      [ngStyle]="{
          background: tier.Color,
        }"
    >
      @if (!!tier.IconName) {
      <svg-icon
        name="{{ tier.IconName }}"
        [svgStyle]="{
              'width.px': 14,
              'height.px': 14,
              fill: 'rgb(255 255 255)',
            }"
      ></svg-icon>
      }
      <span> {{ tier.ShortName }} </span>
    </div>
    }
  `,
})
export class TierMarkComponent {
  mode = input<string>('list');
  tierMarks = input<TierMark[]>([]);

  @HostBinding('class')
  get hostClasses(): string {
    let classes = '';
    if (this.tiers().length < 1) {
      classes += 'hidden';
    } else {
      classes += 'bg-primary absolute right-0 z-10 flex rounded-l-full';
      if (this.mode() === 'list') {
        classes += ' bg-transparent sm:bg-primary';
      }
    }
    return classes;
  }

  tiers = computed(() => {
    if (this.tierMarks()?.length > 0) {
      return this.tierMarks().map((tierMark) => {
        const Color =
          tierMark.Type === 'breeder'
            ? 'rgb(var(--primary-500))'
            : 'rgb(var(--accent-600))';
        const ShortName = tierMark.Product
          ? tierMark.Product.Name === 'Supreme Patron'
            ? 'Suprm'
            : 'Pro'
          : 'Pro';

        return {
          Color,
          ContactName: tierMark.Contact.Name,
          IconName: tierMark.Type,
          Name: tierMark.Product ? tierMark.Product.Name : 'Professional',
          ShortName,
          Type: tierMark.Type,
        };
      });
    } else {
      return [];
    }
  });
  getToolTip(tier: { ContactName: string; Name: string }) {
    return tier.Name + '\n' + tier.ContactName;
  }
}
