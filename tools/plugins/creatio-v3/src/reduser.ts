type ScopesPlan = Array<{
  name: string;
  children?: ScopesPlan;
  [key: string]: any;
}>;

/**
 * Функція для трансформації плану в рекурсивну структуру з побудовою шляхів.
 * @param plan Вхідний план
 * @param parentPath Батьківський шлях для побудови
 * @returns Рекурсивна структура з шляхами
 */
export function transformScopesPlan(plan: ScopesPlan, parentPath = ''): any {
  return plan.reduce<Record<string, any>>((acc, item) => {
    const { name, children, ...rest } = item;

    console.log(rest);
    const currentPath = parentPath + '/' + name || '';
    console.log('rest', rest['path']);
    console.log('currentPath', currentPath);
    console.log('currentPath', parentPath);
    if (children && children.length > 0) {
      acc[name] = transformScopesPlan(children, currentPath);
    } else {
      const { ...restWithoutChildren } = rest;
      acc[name] = { ...restWithoutChildren, path: currentPath };
    }

    return acc;
  }, {});
}

// Приклад вхідних даних
const scopesPlan = [
  {
    name: 'base',
    children: [
      {
        name: 'field',
        children: [
          {
            name: 'type',
            type: 'lib',
          },
          {
            name: 'name',
          },
        ],
      },
      {
        name: 'entity',
        children: [
          {
            name: 'type',
          },
          {
            name: 'config',
          },
        ],
      },
    ],
  },
];

export const getStructure = () => transformScopesPlan(scopesPlan);
// Виклик функції
const transformedPlan = transformScopesPlan(scopesPlan);

// Результат
console.log(transformedPlan);

const node = { name: 'test', type: 'customType' };
const { ...rest } = node;
console.log(rest); // { type: "customType" }
