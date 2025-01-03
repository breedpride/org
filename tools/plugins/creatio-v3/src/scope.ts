type WithNamedValue<T extends string> = { name: T; value: unknown };
type WithChildren<T extends string> = { children: Array<WithNamedValue<T>> };
type t<Name extends string> = {
  name: Name;

  path?: string;
  scope?: string;
  children?: t<any>[];
};

export class Scope2<T extends t<any>> {
  path = '';
  name!: string;
  scope!: string;
  //   parent!: t<any>;

  constructor(collection: T[] | T) {
    // if (parent) {
    //   this.parent = parent;
    //   this.path = parent ? `${parent.path}/${parent.name}` : '';
    //   this.scope = parent.scope ? parent.scope : '';
    // }
    this.path = `${item.path}/${item.name}`;
    this.scope = item.scope ? item.scope : '';
    this.name = item.name;

    for (const item of collection) {
      if (item.children) {
        this[item.name as keyof this] = new Scope2(item.children) as any;
      }
    }
  }
  //   getPath() {
  //     return this.parent ? this.parent.getPath() + this.name : this.name;
  //   }
}

export interface ChildNode<TScope = unknown> {
  name: string;
  children?: ChildNode<TScope>[]; // Масив дочірніх вузлів
  scope?: TScope; // Довільний об'єкт для зберігання специфічних даних
}

export type Scope<
  TScope = unknown,
  TChildren extends Record<string, Scope<unknown, unknown>> = {}
> = {
  name: string;
  path: string;
  scope: TScope; // Посилання на "@module/node" або інші дані
  children: Array<TChildren[keyof TChildren]>; // Масив дочірніх вузлів
} & TChildren; // Типізовані поля для дочірніх вузлів

/**
 * Рекурсивна функція для побудови дерева Scope.
 * @param children Масив дочірніх вузлів
 * @param parentPath Шлях батьківського вузла
 * @returns Масив вузлів типу Scope
 */
export function buildScope<
  TScope = unknown,
  TNode extends ChildNode<TScope> = ChildNode<TScope>
>(
  children: TNode[],
  parentPath = ''
): Array<
  Scope<
    TNode['scope'],
    {
      [K in Extract<
        TNode['children'][number],
        { name: string }
      >['name']]: Scope<unknown, unknown>;
    }
  >
> {
  return children.map((child) => {
    const currentPath = `${parentPath}/${child.name}`;

    // Перетворюємо дочірні вузли
    const childScopes = buildScope(child.children || [], currentPath);

    // Формуємо об'єкт Scope
    const scope = {
      name: child.name,

      path: currentPath,
      scope: child.scope || ({} as TNode['scope']),
      children: childScopes,
    } as Scope<
      TNode['scope'],
      {
        [K in Extract<
          TNode['children'][number],
          { name: string }
        >['name']]: Scope<unknown, unknown>;
      }
    >;

    // Додаємо дочірні вузли як властивості
    for (const childScope of childScopes) {
      scope[childScope.name as keyof typeof scope] = childScope;
    }

    return scope;
  });
}

// Приклад вхідних даних
const inputData = [
  {
    name: 'folder1',
    scope: { module: 'Folder1Module' },
    children: [
      { name: 'file1', scope: { module: 'File1Module' } },
      { name: 'file2', scope: { module: 'File2Module' } },
    ],
  } as const,
  {
    name: 'folder2',
    scope: { module: 'Folder2Module' },
    children: [
      {
        name: 'subfolder1',
        scope: { module: 'Subfolder1Module' },
        children: [{ name: 'file3', scope: { module: 'File3Module' } }],
      } as const,
    ],
  } as const,
] as const;

// Виклик функції
export const scopes = buildScope(inputData);

// TypeScript тепер автоматично генерує підказки:
console.log(scopes[0].file1.scope.module); // "File1Module"
console.log(scopes[1].subfolder1.file3.path); // "/folder2/subfolder1/file3"
console.log(scopes[1]);
