type ScopeNode = {
  name: string;
  scope?: string;
  children?: ScopeNode[];
  [key: string]: unknown;
};

export function transformWithScope(
  plan: ScopeNode[],
  parentPath = '',
  parentScope = '',
): Record<string, any> {
  const result: Record<string, any> = {};

  plan.forEach(node => {
    const { name, scope, children, ...rest } = node;
    const currentPath = `${parentPath}/${name}`;
    const currentScope = scope || `${parentScope}/${name}`;

    // Рекурсивна трансформація дочірніх елементів
    const transformedChildren = children
      ? transformWithScope(children, currentPath, currentScope)
      : {};

    // Створення Proxy для кожного вузла
    result[name] = new Proxy(
      {
        ...rest,
        path: currentPath,
        scope: currentScope,
        children: transformedChildren,
      },
      {
        get(target, prop) {
          if (prop in target) {
            console.log(`Accessing property "${String(prop)}" of "${name}"`);
            return target[prop as keyof typeof target];
          }
          throw new Error(
            `Property "${String(prop)}" does not exist on "${name}"`,
          );
        },
        set(target, prop, value) {
          target[prop as keyof typeof target] = value;
          return true;
        },
      },
    );

    // Додавання дочірніх вузлів як властивостей
    Object.entries(transformedChildren).forEach(([childName, childNode]) => {
      result[name][childName] = childNode;
    });
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
        scope: '@base/field',
        children: [
          {
            name: 'common-type',
            scope: '@base-field-common-type',
            children: [{ name: 'common' }],
          },
          {
            scope: '@base-field-name',
            name: 'name',
          },
          {
            name: 'uid',
            scope: '@base-field-uid',
          },
        ],
      },
      {
        name: 'entity',
        scope: '@base/entity',
        children: [
          {
            name: 'type',
            scope: '@base-entity-type',
            children: [{ name: 'lookup' }],
          },
          {
            name: 'config',
            scope: '@base/entity/config',
          },
        ],
      },
    ],
  },
];

// Виклик функції
const scopes = transformWithScope(scopesPlan);

// Тестування
console.log(scopes.base.field['ref-type'].scope); // @base-entity-ref
console.log(scopes.base.field['ref-type']['lookup'].path); // /base/field/ref-type/lookup
console.log(scopes.base.entity['type'].scope); // @base-entity-type
console.log(scopes.base.entity['type']['lookup'].path); // /base/entity/type/lookup
