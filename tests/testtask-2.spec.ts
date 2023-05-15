import { test, expect } from '@playwright/test';


test('test scenario 2', async ({ page, context }) => {
  // Відкриваємо сайт та перевіряємо заголовок на сторінці
  await page.goto('https://the-internet.herokuapp.com/');
  await expect (page.locator('[class="heading"]')).toHaveText('Welcome to the-internet');

  // Тицяємо на кнопку "Multiple Windows"
  await page.locator('[href="/windows"]').click();

  // Перевіряємо текст на щойно відкритій сторінці
  await expect (page.locator('[class="example"] h3')).toHaveText('Opening a new window');

  // Тицяємо на кнопку "Click Here"
  await page.locator('[href="/windows/new"]').click();
 
  // Змінюємо контекст, переходимо на нову вкладку та чекаємо поки вона завантажиться
  const pagePromise = context.waitForEvent('page');
  const newPage = await pagePromise;
  await newPage.waitForLoadState();

  // Перевіряємо чи на новій вкладці відобразився очікуваний текст
  await expect(newPage.locator('[class="example"]')).toHaveText('New Window');

});