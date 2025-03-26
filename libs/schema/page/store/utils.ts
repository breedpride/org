import { computed, inject, signal } from "@angular/core";
import { PageStore } from "./page-store";
import { filter, map, Observable } from "rxjs";
import { SUPER_CONFIG } from '@bh/collection-store';
import { toObservableSignal } from "ngxtension/to-observable-signal";
import { Route, UrlSegment } from "@angular/router";
import { byAny, EmptyFieldConfig, FilterFieldConfig } from "@bh/superfield";
import { merge } from "lodash-es";
import { FormFieldCode } from "@bh/windmill";

export const loadingWithLag = (n = 5000) => {
  const loading = inject(PageStore).isLoading;
  const lag = signal(true);
  setTimeout(() => {
    lag.set(false);
  }, n);
  return computed(() => {
    return lag();
  });
};

import { PublicPageData } from '@bh/types';

export function page<T>(value: PublicPageData): T | null {
  return value ? (value as T) : null;
}


export const injectPageModel = () => {
  const spaceConfig = inject(SUPER_CONFIG, { optional: true });
  const pageStore = inject(PageStore);
  // TODO - if pageStore.loadedModel() is undefined, return spaceConfig.entityModel
  return spaceConfig
    ? spaceConfig.model || spaceConfig.entitySchemaName
    : pageStore.loadedModel();
};
export type MaybeBoolean = boolean | Observable<boolean>;
export const canMatchWithPageModel = (models: string[]): MaybeBoolean => {
  const pageStore = inject(PageStore);

  const storeReady = toObservableSignal(inject(PageStore).ready).pipe(
    filter((v) => v)
  );
  const spaceConfig = inject(SUPER_CONFIG, { optional: true });
  const spaceConfigModel = spaceConfig
    ? models.includes(spaceConfig?.model || '')
    : false;
  const maybyLoadedModel = storeReady.pipe(
    map((e) => models.includes(pageStore.loadedModel()))
  );

  if (spaceConfigModel) {
    return spaceConfigModel;
  } else {
    return maybyLoadedModel;
  }
};

export const detailMatcher =
  (tab: { url: string }, index = 0) =>
    (route: Route, segments: UrlSegment[]): boolean => {
      return segments.length > 0 && segments[index].path === tab.url;
    };
export const storeReadyFn = (): Observable<boolean> =>
  toObservableSignal(inject(PageStore).ready).pipe(filter((v) => v));

export const storeLoadingFn = (): Observable<boolean> =>
  toObservableSignal(inject(PageStore).isLoading);

export const checkModel = (modelList: string[]): boolean => {
  const model = inject(PageStore).loadedModel();
  if (model) {
    return modelList.includes(model);
  }
  return false;
};

export const detailFilter = (filter: string) => (): FilterFieldConfig[] => {
  const entity = inject(PageStore).petPage();
  const filterKey: FilterFieldConfig = merge({}, EmptyFieldConfig, {
    active: () => true,
    component: FormFieldCode.AUTOCOMPLETE,
    displayValue: () => '',
    entitySchemaName: 'keyFilter',
    getFilter: () => byAny(filter, entity?.Id || ''),
    id: 'keyFilter',
  } as Partial<FilterFieldConfig>);
  return [filterKey];
};
