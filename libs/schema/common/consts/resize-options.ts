import { ResizeOptions } from 'ngxtension/resize';

export const scollableOptions: ResizeOptions = {
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
