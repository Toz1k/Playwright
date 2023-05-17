import { test, expect } from '@playwright/test';

test('login on the Prod UA SPA project', async ({ page, context }) => {
  // Відкриваємо сайт
  await page.goto('https://pin-up.ua/');
  await page.waitForTimeout(3_000);

  // Відкриваємо форму логіну 
  await page.locator('[data-testid="loginBtn"]').click();

  // Заповнюємо поля логіну та паролю
  await page.locator('[data-testid="loginFormAuthInput"]').fill('test3@tobolin.net');
  await page.locator('[data-testid="loginFormPasswordInput"]').fill('Pinup2013');  

  // Тицяємо на кнопку "Log In"
  await page.locator('[data-testid="loginBtn"]').click();

  // Перевіряємо чи є кнопки "Профіль" та "Каса" на новій сторінці, щоб переконатись що ми дійсно залогінились
  await expect (await page.locator('[data-testid="profileBtn"]')).toBeVisible();
  await expect (await page.locator('[data-testid="openCashboxBtn"]')).toBeVisible();
  
});