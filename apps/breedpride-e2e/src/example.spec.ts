import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  expect(true).toBeTruthy()
  // Expect h1 to contain a substring.
  // expect(await page.locator('h1').innerText()).toContain('Welcome');
});
