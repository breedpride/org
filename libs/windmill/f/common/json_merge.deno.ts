import { merge as merge } from 'npm:ts-deepmerge';

export async function main(

  deps_data: Record<string, any>[],
  self_data: Record<string, any>,
  override_data: Record<string, any>

) {
  // Виконуємо глибоке злиття з урахуванням пріоритету
  const mergedData = merge({}, ...deps_data, self_data, override_data);

  return mergedData;
}

