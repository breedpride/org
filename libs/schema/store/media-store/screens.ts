export const screens = {
  lg: '1280px',
  md: '960px',
  sm: '600px',
  xl: '1440px',
  xxl: '1536px',
  xxxl: '1920px',
};
export type ScreenKeys = keyof typeof screens;
export const mediaScreens = Object.entries(screens)
  .map(([alias, screen]: ScreenKeys | string[]) => ({
    [alias]: `(min-width: ${screen})`,
  }))
  .reduce((result, item) => ({ ...result, ...item })) as Record<
  ScreenKeys,
  string
>;
