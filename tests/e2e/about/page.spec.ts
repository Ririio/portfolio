import { test, expect } from '@playwright/test';

test('has name', async ({ page }) => {
  await page.goto('http://localhost:3000/about');

  await expect(page.getByText('Mario Leonardo', { exact: true} )).toBeVisible()
});
