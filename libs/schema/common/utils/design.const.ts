import { ResizeOptions } from 'ngxtension/resize';

export const TAB_MENU_HEIGHT = 42.88;
export const NAME_BLOCK_HEIGHT = 92.44;
// export const TAB_HEADER_CORRECTION = -2;
export const MARGIN_BETWEEN_TABS = 20;
export const TAB_STIKY_INVISIBLE = 36;
export const SCROLL_EMMITER_DELAY = 50;
export const SCROLL_HANDLER_DELAY = 20;

export const resizeOptionsWithScroll: ResizeOptions = {
  box: 'border-box',
  debounce: {
    scroll: 0,
    resize: 0,
  },
  scroll: true,
  emitInZone: false,
  emitInitialResult: true,
  offsetSize: true,
};
