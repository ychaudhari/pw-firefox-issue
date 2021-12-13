import { test, expect } from '@playwright/test';

test('basic test1', async ({ page }) => {
  console.log('test 1');
  await page.goto('https://google.com/');
});

test('basic test2', async ({ page }) => {
  console.log('test 2');
  await page.goto('https://google.com/');
});

test('basic test3', async ({ page }) => {
  console.log('test 3');
  await page.goto('https://google.com/');
});

test('basic test4', async ({ page }) => {
  console.log('test 4');
  await page.goto('https://google.com/');
});