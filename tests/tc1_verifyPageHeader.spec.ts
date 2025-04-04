import { test, expect } from '@playwright/test';


  test('tc1_verifyPageHeader', async ({ page }) => {
    await test.step('Verifing page title',async () => {
      await page.goto('https://www.tmhcc.com/en');
  const pageTitle = await page.title();
  console.log('Print page title :', pageTitle)
  await page.getByText('MANAGE COOKIES REJECT COOKIES').click();
      
    })
    await test.step('Verifing About us page header',async () => {
  await page.locator('#header').getByRole('link', { name: 'About us' }).click();
  await expect(page.locator('#header').getByRole('heading', { name: 'About us' })).toHaveText('About us');
  console.log('Verified About us page header')})
  await test.step('Verifing News & articles page header',async () => {
  await page.getByText('News & articles Back News &').click();
  await expect(page.getByRole('heading', { name: 'News & articles' })).toHaveText('News & articles');
  console.log('Verified News & articles page header')})
  await test.step('Verifing Products page header',async () => {
  await page.locator('#header').getByRole('link', { name: 'Products', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Products', exact: true })).toHaveText('Products');
  console.log('Verified Products page header')})
  await test.step('Verifing Underwriting teams page header',async () => {
  await page.getByRole('link', { name: 'Underwriting teams' }).first().click();
  await expect(page.getByRole('heading', { name: 'Underwriting teams' })).toHaveText('Underwriting teams');
  console.log('Verified Underwriting teams page header')})
  await test.step('Verifing Broker portals page header',async () => {
  await page.getByRole('link', { name: 'Broker portals' }).click();
  await expect(page.getByRole('heading', { name: 'Broker portal login' })).toHaveText('Broker portal login');
  console.log('Verified Broker portal login page header')})
  await test.step('Verifing Claims page header',async () => {
  await page.getByRole('link', { name: 'Claims' }).click();
  await expect(page.getByRole('heading', { name: 'Make a claim' })).toHaveText('Make a claim');
  console.log('Verified Make a claim page header')})
  await test.step('Verifing Careers page header',async () => {
  await page.getByRole('link', { name: 'Careers', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Careers' })).toHaveText('Careers');
  console.log('Verified Careers page header')})})