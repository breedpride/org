import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  computed,
  inject,
  input,
} from '@angular/core';
import { PageStore } from '@bh/page-store';
import { AvatarComponent } from '@breedpride/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { PageActionsComponent } from '../page-actions/page-actions.component';

@Component({
  selector: 'bp-avatar-outlet',
  template: `
    @if (isLoading()) {
    <p-skeleton
      styleClass="rounded-full ring-4 ring-card-ground size-full"
      [ngStyle]="{
          height: avatarSize() + 'px',
          width: avatarSize() + 'px',
        }"
    ></p-skeleton>
    <div class="mb-1 ml-auto flex">
      <p-skeleton
        styleClass="rounded-full w-22 rounded-full h-[38px]"
      ></p-skeleton>
      <p-skeleton
        styleClass="ml-2 rounded-full w-[38px] rounded-full h-[38px]"
      ></p-skeleton>
    </div>
    } @else {
    <div
      class="rounded-full"
      [ngClass]="{ 'border-2': needAvatar() }"
      [ngStyle]="{
          height: avatarSize() + 'px',
          width: avatarSize() + 'px',
        }"
    >
      @if (needAvatar()) { @if (isLoading()) {
      <div
        class="
                flex size-full items-center justify-center rounded-full border
                ring-4 ring-card-ground
              "
      >
        <p-skeleton class="size-full object-cover" alt="avatar" />
      </div>
      } @else {
      <bp-avatar [entityPage]="entityPage()" [size]="avatarSize()" />
      } }
    </div>
    <bp-page-actions mode="avatar" class="mb-1 ml-auto flex" />
    }
  `,
  styles: ``,

  imports: [
    CommonModule,
    AvatarComponent,
    PageActionsComponent,
    SkeletonModule,
  ],
})
export class AvatarOutletComponent {
  pageStore = inject(PageStore);
  isLoading = this.pageStore.isLoading;
  entityPage = this.pageStore.entityPage;
  @HostBinding('class') class =
    '-mt-32 flex flex-auto items-end relative pb-3 top-0';
  // TODO - calculated from pageModel
  avatarSize = input<number>(176);
  // TODO - injectorInput EntityPage

  needAvatar = computed(() => {
    return ['Pet', 'Breed', 'Contact'].includes(
      this.pageStore.loadedModel() || ''
    );
  });
}
