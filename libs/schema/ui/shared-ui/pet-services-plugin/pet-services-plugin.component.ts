import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  computed,
  input,
} from '@angular/core';
import { PetService } from '@bh/entity/config';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [CommonModule, AngularSvgIconModule, TooltipModule],
  selector: 'bp-pet-services-plugin',
  styles: [
    `
      svg {
        width: 16px;
        height: 16px;
        fill: rgb(var(--secondary-400));
      }
    `,
  ],
  template: `
    @for (service of services(); track service) {
    <svg-icon
      name="{{ service.IconName }}"
      pTooltip="{{ service.Name }}"
      tooltipPosition="bottom"
      >.</svg-icon
    >
    }
  `,
})
export class PetServicesPluginComponent {
  petServices = input.required<PetService[] | undefined>();
  @HostBinding('class')
  get hostClasses(): string {
    let classes = '';
    if (this.petServices()) {
      classes += 'flex space-x-1';
    } else {
      classes += 'hidden';
    }
    return classes;
  }

  services = computed(() => {
    return petServiceTransform(this.petServices());
  });
}

export const petServiceTransform = (
  serviceList: PetService[] | undefined | []
) => {
  if (serviceList) {
    return serviceList
      .map((e) => {
        const temp: { IconName?: string; Name?: string; Order: number } = {
          Order: 0,
        };
        switch (e.ServiceType?.Id) {
          case '3370ee61-86de-49ae-a8ec-5cef5f213ecd':
            temp.IconName = 'children-for-sale';
            temp.Order = 0;
            temp.Name = 'Children for sale';
            break;
          case 'e922b16d-c0c0-46c6-af83-855ddad013f6':
            temp.IconName = 'pre-reservation';
            temp.Order = 0;
            temp.Name = 'Pre reservation';
            break;
          case 'ddc59ace-c622-4d6b-b473-19e9a313ed21':
            temp.IconName = 'sale';
            temp.Order = 1;
            temp.Name = 'Sale';
            break;
          case 'ea48e37d-8f65-4122-bc00-d012848d78ae':
            temp.IconName = 'mating';
            temp.Order = 2;
            temp.Name = 'Mating';
            break;
          case '8a97a5df-a169-4b6e-b72b-7512106fdcf8':
            temp.IconName = 'rent';
            temp.Order = 3;
            temp.Name = 'Rent';
            break;
          case '28655f5b-06d8-4308-ba0d-de2f5b9ef9bf':
            temp.IconName = 'frozen-sperm';
            temp.Order = 4;
            temp.Name = 'Frozen sperm';
            break;
        }
        return {
          ...e,
          ...temp,
        };
      })
      .sort((a, b) => (a.Order > b.Order ? 1 : -1));
  } else {
    return [];
  }
};
