type ScopeNode = {
  name: string;
  children?: ScopeNode[];
  [key: string]: any;
};

export function transformWithProxy(plan: ScopeNode[], parentPath = ''): any {
  const result: any = {};

  plan.forEach((node) => {
    const { name, children, ...rest } = node;
    const currentPath = `${parentPath}/${name}`;

    // Рекурсивна трансформація дочірніх елементів
    const transformedChildren = children
      ? transformWithProxy(children, currentPath)
      : {};

    // Створення Proxy для кожного вузла
    result[name] = new Proxy(
      { ...rest, path: currentPath, ...transformedChildren },
      {
        get(target, prop) {
          if (prop in target) {
            // console.log(`Accessing property "${String(prop)}" of "${name}"`);
            return target[prop];
          }
          throw new Error(
            `Property "${String(prop)}" does not exist on "${name}"`
          );
        },
        set(target, prop, value) {
          // console.log(
          //   `Setting property "${String(prop)}" of "${name}" to`,
          //   value
          // );
          target[prop] = value;
          return true;
        },
      }
    );
  });

  return result;
}

// Вхідні дані
const scopesPlan = [
  {
    name: 'base',
    children: [
      {
        name: 'field',
        children: [{ name: 'type', type: 'lib' }, { name: 'name' }],
      },
      {
        name: 'entity',
        children: [{ name: 'type' }, { name: 'config' }],
      },
    ],
  },
];

// Виклик функції
const scopes = transformWithProxy(scopesPlan);
console.log(scopes.base.field.type.path); // Логування і доступ до властивості
