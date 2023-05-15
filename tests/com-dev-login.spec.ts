import { test, expect } from '@playwright/test';


test('login on the Prod COM project', async ({ page, context }) => {
  // Відкриваємо сайт
  await page.goto('https://pin-up.casino/');
  
  
  // Відкриваємо форму логіну та перевіряємо її заголовок
  await page.locator('[id="login"]').click();
  await expect (page.locator('[class="popup__header-text popup__header--reg"]')).toHaveText('Sign in');

  // Заповнюємо поля логіну та паролю
  await page.locator('[id="auth_email"]').fill('test54@tobolin.net');
  await page.locator('[id="auth_password"]').fill('Pinup2013');  
  
  // Тицяємо на кнопку "Log In"
  await page.locator('//*[@id="popup--auth"]/form/button').click();

  // Перевіряємо чи є кнопка "Профіль" на новій сторінці, щоб переконатись що ми дійсно залогінились
  await expect (page.locator('[class="button button_green"]')).toHaveText('Профиль');

});