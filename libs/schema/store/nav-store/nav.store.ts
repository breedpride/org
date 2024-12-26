import { Location } from '@angular/common';
import { computed, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Params,
  PRIMARY_OUTLET,
  Router,
  UrlSegment,
  UrlSegmentGroup,
  UrlTree,
} from '@angular/router';
import { SPACE_URL_PET } from '@bh/space-url';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import {
  addEntity,
  setAllEntities,
  setEntities,
  withEntities,
} from '@ngrx/signals/entities';
import { isEqual } from 'lodash-es';

type BPNavStoreState = {
  url: string;
};
export const BPNavStore = signalStore(
  { providedIn: 'root',
    protectedState: false,
  },


  withState<BPNavStoreState>({ url: '' }),
  withEntities<{
    url: string;
    id: number;
    name: string;
  }>(),
  withComputed((store, router = inject(Router)) => ({
    currentPosition: computed(() => store.entities().length),
    creatioEntities: computed(() => store.entities()),
    queryParams: computed(() => {
      const url = store.url();
      const tree: UrlTree = router.parseUrl(url);
      return tree.queryParams;
    }),
    // backMenus: computed(() => {
    //   const creatioEntities =
    //   const count = this.navStore.creatioEntities.length;
    //   return this.navStore
    //     .creatioEntities()
    //     .filter(e => e.id !== count - 1)
    //     .map(e => {
    //       return {
    //         command: () => {
    //           this.navStore.gotoToHistoryElemenent(e.id, e.url);
    //         },
    //         label: e.name || e.url,
    //       };
    //     });
    // }),
  })),
  withMethods(
    (
      store,
      router = inject(Router),
      title = inject(Title),
      location = inject(Location)
    ) => ({
      getRouter(): Router {
        return router;
      },
      finalUrlFragment() {
        return router.getCurrentNavigation()?.finalUrl?.fragment;
      },
      initialUrlFragment() {
        return router.getCurrentNavigation()?.initialUrl?.fragment;
      },
      //-------------------
      // changePublicStoreView()
      //-------------------
      changePublicStoreView(viewId: string) {
        const url = store.url();
        const tree: UrlTree = router.parseUrl(url);
        const primaryOutlet = tree.root.children[PRIMARY_OUTLET];
        primaryOutlet.segments[0].parameters['view'] = viewId;
        router.navigateByUrl(tree);
      },
      //-------------------
      // changePublicStoreSort
      //-------------------
      changePublicStoreSort(sortId: string) {
        const url = store.url();
        const tree: UrlTree = router.parseUrl(url);
        tree.queryParams['sort'] = sortId;
        router.navigateByUrl(tree);
      },
      //-------------------
      // changePublicStoreSort
      //-------------------
      changePublicStoreFilters(filters: Record<string, any> | undefined) {
        const url = store.url();
        const tree: UrlTree = router.parseUrl(url);
        tree.queryParams = { ...filters };
        router.navigateByUrl(tree);
      },
      prevUrl(): string {
        const entity = store.entities().at(-1);
        return entity?.url || '';
      },
      gotoToHistoryElemenent(id: number, url: string) {
        // TODO - shrine list
        patchState(store, setAllEntities(store.entities().slice(0, id)));
        router.navigateByUrl(url);
      },
      patchUrlName(url: string, name: string) {
        // console.log('Url', url);
        // console.log('Name', name);
        if (name) {
          title.setTitle(name);
        }
        const patchedEntities = store.creatioEntities().map((e) => {
          const containUrl = e.url.indexOf('/' + url) > -1;
          if (containUrl) {
            return { ...e, name: e.name ? e.name + name : name };
          }
          return e;
        });
        const settedEntities = patchedEntities.map((e) => ({
          ...e,
        }));
        patchState(store, setEntities(settedEntities));
      },
      // patchEmptySpaceLinks(urlPre: string, spaceName: string) {
      //   console.log(urlPre);
      //   const tree = router.parseUrl(urlPre);
      //   tree.fragment = null;
      //   const checkedUrl = tree.toString();
      //   console.log(store.creatioEntities());
      //   const patchedEntities = store
      //     .creatioEntities()
      //     // TODO - and ampty name
      //     // .filter(e => e.entity.url === urlPre)
      //     .map(e => {
      //       console.log(spaceName, e);
      //       return { ...e, name: e.name ? `[${spaceName}]` + e.name : spaceName };
      //     });
      //   console.log(patchedEntities);
      //   const settedEntities = patchedEntities.map(e => ({
      //     id: e.id,
      //     entity: {
      //       ...e,
      //     },
      //   }));
      //   patchState(store, setEntities(settedEntities));
      // },

      // getCurrentUrlTree():UrlTree | null {
      //   const url = store.url();
      //   if (url) {
      //     const tree: UrlTree = router.parseUrl(store.url());
      //     const queryParams = tree.queryParams;

      //     router.navigate([], {
      //       fragment,
      //       queryParams,
      //     });
      //   }
      // }
      changeFragment(fragment: string | undefined): void {
        const url = store.url();
        if (url) {
          const tree: UrlTree = router.parseUrl(store.url());
          const queryParams = tree.queryParams;

          router.navigate([], {
            fragment,
            queryParams,
          });
        }
      },
      changeFragmentWithoutReloading(fragment: string | undefined): void {
        const url = store.url();
        if (url) {
          const tree: UrlTree = router.parseUrl(store.url());
          const queryParams = tree.queryParams;
          tree.fragment = fragment || '';
          const url2 = tree.toString();
          location.go(url2);
        }
      },
      gotoDetail(detail: string) {
        //TODO implement
      },
      changeDetail(detail: string, activatedRoute: ActivatedRoute): void {
        if (detail) {
          const url = store.url();
          console.log(url);
          const a = url.split('/');
          a[a.length - 1] = detail;
          const url2 = a.join('/');
          console.log(url2);
          if (url) {
            router.navigateByUrl(url2);
            // const tree: UrlTree = router.parseUrl(store.url());
            // const queryParams = tree.queryParams;
            // console.log(detail);
            // router.navigate([`./../${detail}`], {
            //   relativeTo: activatedRoute,
            //   queryParams,
            // });
          }
        }
      },
      // TODO cancelEdit naming
      cancel() {
        // TODO - repack entitties

        const entity = store.entities().at(-2);
        if (entity) {
          patchState(
            store,
            setAllEntities(
              store.entities().slice(0, store.entities().length - 1)
            )
          );
          router.navigateByUrl(entity.url);
        } else {
          //TODO - implement - go to publicUrl if exist
        }
      },
      changeView(view: string) {
        const url = store.url();
        const tree: UrlTree = router.parseUrl(store.url());
        router.navigate([url, ';view=tab'], {
          // params: {
          // }
        });
      },
      // TODO create New Record
      editRecord(
        id: string | undefined,
        model: string | undefined,
        queryParams?: Params
      ) {
        console.log(model);
        router.navigate(['/edit', model?.toLocaleLowerCase(), id], {
          // queryParams: {
          //   model,
          //   ...queryParams,
          // },
        });
      },
      backSlashWithParams(activatedRoute?: ActivatedRoute) {
        const tree: UrlTree = router.parseUrl(store.url());
        const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        const s: UrlSegment[] = g.segments;
        const queryParams = tree.queryParams;
        router.navigate(['./'], {
          queryParams,
          relativeTo: activatedRoute,
        });
      },
      // TODO - what to do when id and model used??
      gotoFullScreenWithFragment(url: string) {
        const tree: UrlTree = router.parseUrl(url || store.url());
        const fragment = tree.fragment;
        router.navigate(['./', url], {
          fragment: fragment || '',
        });
      },
      backWithCurrentFragment(activatedRoute?: ActivatedRoute) {
        this.backSlashWithParams(activatedRoute);
      },
      // TODO - breed (object of breedId)
      becomePatron(breed: string) {
        router.navigate(['../', 'prepayment'], {
          queryParams: {
            breed,
            // ...this.queryParams,
          },
        });
      },
      gotoUrl(url: string) {
        router.navigateByUrl(url);
      },
      // setTabs(tabs: MenuItemX[]): void {
      //   patchState(store, { tabs });
      // },
      getSpaceName(url: string): string {
        const names = [{ url: SPACE_URL_PET, name: '[Pets]' }];
        let name = '';
        names.forEach((value) => {
          if (url.indexOf('/' + value.url) === 0) {
            name = value.name;
            return;
          }
        });
        return name;
      },
    })
  ),
  withHooks({
    onInit(store, router = inject(Router)) {
      router.events.subscribe((event) => {
        // console.log(event.type);
        // console.log(event.toString());
        // if (event instanceof NavigationStart) {
        //   console.log('NavigationStart');
        //   console.log(event.url);
        // }
        if (event instanceof NavigationEnd) {
          const url = event.urlAfterRedirects;
          // console.log('URL', url);
          // console.log(url);
          patchState(store, { url: url });
          // todo mapping url
          // TODO - ignore fragment chagne
          const urlEntity = {
            url: url,
            id: store.currentPosition(),
            name: store.getSpaceName(url),
          };
          // console.log(urlEntity);
          const prevUrl = store.prevUrl();
          // console.log('PrevUrl', prevUrl);
          if (prevUrl) {
            const prevTree: UrlTree = router.parseUrl(prevUrl);
            const tree: UrlTree = router.parseUrl(url);

            tree.fragment = '';
            prevTree.fragment = '';
            const UrlEqualWithoutFragment =
              tree.toString() === prevTree.toString();
            const urlEqual = prevUrl.split('?')[0] === url.split('?')[0];
            const paramsEqual = isEqual(prevTree.queryParams, tree.queryParams);
            // console.log(prevUrl.split('?')[0], '  ', url.split('?')[0]);
            // console.log(prevTree.queryParams, tree.queryParams);
            if ((urlEqual || UrlEqualWithoutFragment) && paramsEqual) {
              // console.log('Ignore segment changes');
              return;
            }
          }
          patchState(store, addEntity(urlEntity));
        }
      });
    },
  })
);
