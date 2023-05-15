import { test, expect } from '@playwright/test';


test('test scenario 1', async ({ page }) => {
  // Відкриваємо сайт
  await page.goto('https://the-internet.herokuapp.com/');

  // Перевіряємо заголовок
  await expect (page.locator('[class="heading"]')).toHaveText('Welcome to the-internet');
  
  // Тицяємо на аутентифікацію
  await page.locator('[href="/login"]').click();

  // Перевіряємо текст на сторінці
  await expect (page.locator('[class="example"] h2')).toHaveText('Login Page');

  // Заповнюємо інпути
  await page.locator('[id="username"]').fill('tomsmith');
  await page.locator('[id="password"]').fill('SuperSecretPassword!');

  // Тицяємо на кнопку логіну
  await page.locator('[type="submit"]').click();

  // Перевіряємо, що на сторінці відобразився очікуваний текст
  await expect (page.locator('[class="flash success"]')).toContainText('You logged into a secure area!');

});