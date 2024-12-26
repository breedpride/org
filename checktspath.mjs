import fs from "fs";
import { createRequire } from "module";
import path from "path";
const __dirname = import.meta.url.replace("file://", "");
const require = createRequire(import.meta.url);
// const data = require("./data.json");
// Шлях до вашого tsconfig.json
      const tsconfigPath = path.join(__dirname, "../");
// Завантажуємо tsconfig.json
  const tsconfig = require("./tsconfig.base.json");

    //       Функція для перевірки існування файлу або директорії
function checkPathExists(relativePath) {
  const fullPath = path.join(__dirname, "../", relativePath);
  return fs.existsSync(fullPath);
}

// Перевіряємо всі шляхи в полі "paths" tsconfig.json
const pathsToCheck = tsconfig.compilerOptions.paths || {};
const missingPaths = [];

Object.keys(pathsToCheck).forEach(alias => {
  const paths = pathsToCheck[alias];

  paths.forEach(p => {
    if (!checkPathExists(p)) {
      missingPaths.push({ alias, path: p });
    }
  });
});

if (missingPaths.length > 0) {
  console.log("Наступні файли або директорії не знайдено:");
  missingPaths.forEach(({ alias, path }) => {
    console.log(`Alias: ${alias}, Path: ${path}`);
  });
} else {
  console.log(" шляхи існують.");
}
