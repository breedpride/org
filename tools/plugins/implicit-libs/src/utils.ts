import { stat } from 'node:fs/promises';
import { dirname, join } from 'node:path/posix';
import { globIterate } from 'glob';
import { logger } from '@nx/devkit';

/**
 * Checks if there are `index.ts` files in parent folders.
 * This is useful to exclude folders with `index.ts` which are inside other libs.
 */
export async function hasIndexInParentTree(
  folderPath: string,
): Promise<boolean> {
  let previousFolderPath: string;

  do {
    previousFolderPath = folderPath;
    folderPath = dirname(folderPath);
    try {
      await stat(join(folderPath, 'index.ts'));
      return true;
    } catch (error) {
      if (
        error instanceof Error &&
        'code' in error &&
        error.code === 'ENOENT'
      ) {
        continue;
      }
      throw error;
    }
  } while (folderPath !== previousFolderPath);

  return false;
}

export function getProjectInfo(projectPath: string):
  | {
      platform: string;
      scope: string;
      type: string;
      name?: string;
    }
  | undefined {
  const parts = projectPath.split('/');

  if (parts.length !== 4) {
    logger.warn(`Invalid project path ${projectPath}`);
    return;
  }
  const [platform, scope, nameAndType] = parts.slice(-3);
  const nameAndTypeParts = nameAndType.split('-');
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const type = nameAndTypeParts.at(-1)!;
  const name =
    nameAndTypeParts.length > 1
      ? nameAndTypeParts.slice(0, -1).join('-')
      : undefined;

  // if (!allowedLibraryTypes.includes(type)) {
  //   logger.warn(
  //     `Invalid project path ${projectPath}. Last folder should be one of the allowed types: ${allowedLibraryTypes}`
  //   );
  //   // return;
  // }

  return {
    name,
    platform,
    scope,
    type,
  };
}

const allowedLibraryTypes = [
  'domain',
  'feature',
  'infra',
  'model',
  'ui',
  'utils',
];

export async function hasFileMatching(
  path: string,
  globPattern: string,
): Promise<boolean> {
  const { done } = await globIterate(globPattern, {
    cwd: path,
  }).next();
  return !done;
}
