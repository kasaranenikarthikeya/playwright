const { test, expect } = require('@playwright/test');

test('homepage has title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});
