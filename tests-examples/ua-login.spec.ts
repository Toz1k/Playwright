import { test, expect } from '@playwright/test';


test('login user by email', async ({ page }) => {
  await page.goto('https://pin-up.ua');
  await page.locator('[data-testid="loginBtn"]').click({timeout: 10_000});
  await page.locator('[data-testid="loginFormAuthInput"]').fill('test3@tobolin.net');
  await page.locator('[data-testid="loginFormPasswordInput"]').fill('Pinup2013');
  await page.locator('[data-testid="loginBtn"]').click;
  await expect(page.locator('[data-testid="profileBtn"]')).toBeVisible();

});