
export function calculateOverlapByTopBottom(
  a_top: number,
  a_bottom: number,
  b_top: number,
  b_bootom: number
): number {
  const top = Math.max(a_top, b_top);
  const bottom = Math.min(a_bottom, b_bootom);

  if (top < bottom) {
    return bottom - top;
  }

  return 0; // No overlap
}

export function maxVisibilityPercent<T>(
  prev: T & { visibilityPersent?: undefined | number },
  current: T & { visibilityPersent?: undefined | number }
): T {
  if (prev && current) {
    if (
      prev.visibilityPersent !== undefined &&
      prev.visibilityPersent !== null &&
      current.visibilityPersent !== undefined &&
      current.visibilityPersent !== null &&
      prev.visibilityPersent > current.visibilityPersent
    ) {
      return prev;
    }
  }
  return current;
}
