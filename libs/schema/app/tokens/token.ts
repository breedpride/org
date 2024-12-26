import { InjectionToken } from '@angular/core';
import { MenuItem } from 'primeng/api';

export const MENU = new InjectionToken<MenuItem[]>('MENU');
export const MENU_ORIENTATION = new InjectionToken<string>('MENU_ORIENTATION');
export const LAYOUT_TYPE = new InjectionToken<string>('LAYOUT_TYPE');
export const WHITE_LOGO = new InjectionToken<boolean>('WHITE_LOGO');
