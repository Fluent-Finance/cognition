import { expect, test } from '@playwright/test';

test('index page has expected hero panel', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Interoperable Financial Infrastructure Bringing Banks')).toBeVisible();
});
