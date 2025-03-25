#!/bin/bash

echo "🧹 Cleaning Deno/Windmill lock files..."

# Видалити всі *.lock.json рекурсивно
find . -type f -name "*.lock" -exec rm -v {} \;

# Видалити deno.lock (якщо є)
if [ -f "deno.lock" ]; then
  rm -v deno.lock
fi

echo "✅ Done cleaning lock files."
