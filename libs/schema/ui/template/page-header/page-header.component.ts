/* eslint-disable no-unused-private-class-members */
import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormFieldCode } from '@bh/consts';
import { EDIT_MODE } from '@bh/collection-store';
import { ENTITY_STORE } from '@bh/entity-store';
import { byAny, ME } from '@bh/superfield';
import { nullId } from '@bh/superfield';
import { BPNavStore } from '@bh/nav-store';
import { PageStore } from '@bh/page-store';
import { SpaceConfig } from '@bh/superfield';
import { VIEWPORT } from '@bh/viewport';
// import { ActionService } from '@bp/chromatin/services';
import { ApiService } from '@breedpride/api';
import { SPACE_CONFIG_COVER } from '@breedpride/cover';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import {
  NavButtonComponent
} from '@breedpride/navigation';
import { hostBinding } from 'ngxtension/host-binding';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { CoverTypeIDs } from './ids';
import { BreedCoverV1Component } from './ui/breed-cover-v1.component';
import { CustomCoverComponent } from './ui/custom-cover.component';
import { DefaultCoverComponent } from './ui/default-cover.component';
@Component({

  selector: 'bp-page-header',
  styles: [
    `
      :host {
        display: block;
        cursor: default;
        caret-color: transparent;
      }
    `,
  ],
  template: `
    @if (isLoading()) {
    <p-skeleton styleClass="rounded-xl size-full"></p-skeleton>
    } @else {
    <div
      class="
          relative flex size-full justify-center overflow-hidden rounded-lg
          border border-surface-border px-6 pt-4 shadow-sm
          sm:pb-3 sm:pt-6
        "
    >
      <div
        class="
            absolute top-0 z-10 h-28 w-full bg-gradient-to-b from-[#200e4c]/40
            to-transparent -sm-top-6
          "
      ></div>

      <div
        class="
            flex w-full max-w-3xl flex-col
            lg:max-w-4xl
            xxl:max-w-5xl
          "
      >
        <div class="z-20 flex w-full">
          @if (!fullscreen()) {
          <button
            aria-label="Expand"
            (click)="gotoFullscreen()"
            pTooltip="Expand"
            tooltipPosition="bottom"
            class="
                  mr-auto hidden
                  md:block
                "
          >
            <i
              class="
                    pi pi-arrows-alt rotate-45 transform text-3xl text-white
                  "
            ></i>
          </button>
          }
          <bp-nav-button class="sticky top-0 ml-auto" mode="white" />
        </div>

        @switch (cover()?.Type?.Id) { @case (coverTypeIDs.BreedCoverV1) {
        <bp-breed-cover-v1
          [coverImg]="coverImg()"
          [breed]="breed()"
          class="h-full"
        >
        </bp-breed-cover-v1>
        } @case (coverTypeIDs.Default) {
        <bp-default-cover [coverImg]="coverImg()" class="h-full">
        </bp-default-cover>
        } @case (coverTypeIDs.BreedCoverV2) { @if (coverImg()) {
        <img
          #myImage
          class="absolute inset-0 z-0 size-full object-cover"
          [src]="coverImg()"
          alt="Cover image"
        />
        } } @case (coverTypeIDs.Custom) { @if (coverImg()) {
        <bp-custom-cover [coverImg]="coverImg()" class="h-full" />
        } } @case (coverTypeIDs.Advertise) { @if (coverImg()) {
        <img
          #myImage
          class="absolute inset-0 z-0 size-full object-cover"
          [src]="coverImg()"
          alt="Cover image"
        />
        } } @default { @if (model() === 'Cover') {
        <img
          #myImage
          class="absolute inset-0 z-0 size-full object-cover"
          [src]="coverImg()"
          alt="Cover image"
        />
        } } } @if (editMode) { @if (model() === 'Cover') {
        <div class="z-10 mx-auto flex w-full items-end justify-end">
          <form [formGroup]="entityForm()">
            {{ entityForm().get('Cover')?.value?.Name }}
            <!-- <bp-image-form
                    [entityId]="entityPage()?.Id"
                    entityName="Pet"
                    [avatarUrl]="coverImg()"
                    class="z-20" /> -->
          </form>
        </div>
        } @else {
        <div class="z-10 mx-auto flex w-full items-end justify-end">
          @if (entityForm()) {
          <form [formGroup]="entityForm()">
            <!-- <bp-form-field [config]="coverConfig">
                      <div
                        class="flex space-x-4"
                        pTooltip="Change cover"
                        tooltipPosition="bottom">
                        <span
                          class="
                            text-secondary-400 hidden
                            sm:block
                          "
                          >{{ entityForm().get('Cover')?.value?.Name }}</span
                        >
                        <i class="pi pi-camera text-3xl text-white"></i>
                      </div>
                    </bp-form-field> -->
          </form>
          }
        </div>
        } }
      </div>
    </div>
    }
  `,
  imports: [

    // NgxResize,
    SkeletonModule,
    CommonModule,
    RouterModule,
    // CloseButtonComponent,
    ReactiveFormsModule,
    // FormFieldComponent,
    ButtonModule,
    TooltipModule,
    BreedCoverV1Component,
    DefaultCoverComponent,
    CustomCoverComponent,
    // ImageFormComponent,
    NavButtonComponent,
  ]
})
export class PageHeaderComponent {
  viewport = inject(VIEWPORT);
  headerWidth = computed(() => {
    const viewportWidth = this.viewport.width();
    return viewportWidth > 0 ? Math.min(viewportWidth, 1006) : 400;
  });

  headerHeight = computed(() => {
    const headerWidth = this.headerWidth();
    return headerWidth > 960
      ? Math.round(0.4 * headerWidth)
      : Math.round(0.44 * headerWidth);
  });
  isLoading = inject(PageStore).isLoading;
  pageStore = inject(PageStore);
  #width = hostBinding('style.width.px', this.headerWidth);
  #maxWidth = hostBinding('style.max-width.px', this.headerWidth);
  #height = hostBinding('style.height.px', this.headerHeight);
  #maxHeight = hostBinding('style.max-height.px', this.headerHeight);

  coverTypeIDs = CoverTypeIDs;
  activatedRoute = inject(ActivatedRoute);

  fullscreen = injectFullscreen();

  private navStore = inject(BPNavStore);
  entityStore = inject(ENTITY_STORE);
  entityForm = computed(() => this.entityStore.entityForm());

  editMode = inject(EDIT_MODE);
  entityPage = this.pageStore.entityPage;
  ch = inject(ChangeDetectorRef);
  model = inject(PageStore).loadedModel;
  formCoverAvatarUrl = signal<string>('');

  // actionService = inject(ActionService);
  coverConfig: SpaceConfig;
  coverRecord = signal<any>(null);
  api = inject(ApiService);
  breed = signal<any>(null);
  coverImg = computed(() =>
    this.editMode
      ? this.formCoverAvatarUrl()
      : (this.entityPage() as any)?.Cover?.AvatarUrl
  );

  cover = computed(() => {
    return this.editMode
      ? this.coverRecord()
      : (this.entityPage() as any)?.Cover;
  });

  constructor() {
    this.coverConfig = {
      ...SPACE_CONFIG_COVER,
      component: FormFieldCode.SELECT,
      filterFn: () => byAny('Owner', ME),
      id: 'Cover',
    };

    effect(
      () => {
        const page = this.entityPage() as any;
        const breedId = page?.Cover?.Breed.Id;
        if (breedId && breedId != nullId) {

          this.api
            .selectTopOne({entitySchemaName: 'Breed'}, byAny('Id', breedId))
            .subscribe((breed) => {
              // console.log(breed);
              if (breed) {
                this.breed.set(breed);
              }
            });
          // return page?.Cover?.Breed;
        }
        const filled = this.entityForm().filled;
        if (filled()) {
          // TODO - only for cover !!!!
          if (this.model() === 'Cover') {
            const value = this.entityForm().get('AvatarUrl')?.value;
            console.log(value);
            this.formCoverAvatarUrl.set(value);
            this.entityForm()
              .get('AvatarUrl')
              ?.valueChanges.subscribe((value) => {
                this.formCoverAvatarUrl.set(value);

                this.ch.markForCheck();
              });
            this.ch.markForCheck();
          } else {
            this.updateCover(this.entityForm().get('Cover')?.value);
            this.entityForm()
              .get('Cover')
              ?.valueChanges.subscribe((value) => {
                this.updateCover(value);
                this.ch.markForCheck();
              });
          }
        }
      },

    );
  }

  //TODO - remvoe markForCheck
  updateCover(value: any) {
    this.formCoverAvatarUrl.set(value ? value?.AvatarUrl : null);
    this.coverRecord.set(value);
    this.ch.markForCheck();
  }

  gotoFullscreen(): void {
    const entityPage = this.entityPage();
    if (entityPage) {
      const url =
        entityPage.Url || entityPage.Id + this.pageStore.loadedModel();
      this.navStore.gotoFullScreenWithFragment(url);
    }
  }

  // selectCover() {
  //   const ref = this.actionService.selectEntity(SPACE_CONFIG_COVER).then(ref =>
  //     ref.onClose.subscribe(result => {
  //       console.log(result);
  //     })
  //   );
  // }
}
