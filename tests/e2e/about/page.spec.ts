import { test, expect } from '@playwright/test'
const URL = process.env.BASE_URL || 'http://localhost:3000/about'

test('has name', async ({ page }) => {

  await page.goto(URL)

  await expect(page.getByText('Mario Leonardo', { exact: true })).toBeVisible()
})
