type Input = Array<
  { name?: string; children?: any[] } | [string, any] | Record<string, any>
>;
type Output = {
  name?: string;
  children?: Output[];
  [key: string]: any;
};

/**
 * Функція для трансформації вхідних даних.
 * @param input Вхідні дані у вигляді масиву
 * @returns Трансформовані дані
 *
 */
function transform(input: Input): Output {
  const result: Output = {};

  input.forEach((item) => {
    if (Array.isArray(item)) {
      // Якщо масив складається з 2 елементів, обробляємо його як пару ключ-значення
      if (item.length === 2 && typeof item[0] === 'string') {
        result[item[0]] = item[1];
      }
    } else if (typeof item === 'object' && !Array.isArray(item)) {
      if (item.children) {
        // Якщо об'єкт має дочірні елементи, обробляємо їх рекурсивно
        result.children = result.children || [];
        result.children.push(transform(item.children));
      } else {
        // Якщо це об'єкт, додаємо його ключі як властивості
        Object.assign(result, item);
      }
    }
  });

  return result;
}

const input = [
  { name: 'next' },
  {
    children: [
      ['name', 'test'],
      { key: {} },
      ['firstIsMaybyKey', { type: 'secondIsValue' }],
    ],
  },
];

const a = transform(input);

const outputTemporary = {
  name: 'next',
  children: [
    { name: 'test' },
    { key: {} },
    { firstIsMaybyKey: { type: 'secondIsValue' } },
  ],
};
// основні правила - якщо це масив з 2 значень - дуже вірогідно, що це кей- велюе пара.
// якщо в масиві зустрічаеться {'someKey': 'someValue} - то це проперті батьківського об'єкта
// }
// const output = {
//     name: 'next',
//     children : {test: {name: 'test'}, key: {key: {}}, firstIsMaybyKey: {firstIsMaybyKey: {type: 'secondIsValue'}}}
//         {name: 'test'},
//         {key: {}},
//         {firstIsMaybyKey: {type: 'secondIsValue'}}
//     ]
// }
