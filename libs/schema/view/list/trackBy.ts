// TODO - @ann - замінити на https://ngxtension.netlify.app/utilities/directives/trackby-id-prop/

export const trackByFn = (index: number, item: any): any => {
  return item.Id || item.id || index;
};
