import { ResizeResult } from 'ngxtension/resize';

export type BPDOMRect = {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
  x: number;
  y: number;
};
export const defaultBPDOMRect: BPDOMRect = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0,
  x: 0,
  y: 0,
};

export const getFullSize = (e: ResizeResult): BPDOMRect => ({
  height: e.height,
  width: e.width,
  top: e.top,
  left: e.left,
  bottom: e.bottom,
  right: e.right,
  x: e.x,
  y: e.y,
});
export const getContentSize = (e: ResizeResult): BPDOMRect => {
  const content = e.entries[0].contentRect;
  console.log('content', e);
  return {
    height: content.height,
    width: content.width,
    top: content.top,
    left: content.left,
    bottom: content.bottom,
    right: content.right,
    x: content.x,
    y: content.y,
  };
};
