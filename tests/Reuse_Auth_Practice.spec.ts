import { test, expect } from '@playwright/test';

//If we don't want to use auth state for a test script.
//test.use({storageState:{cookies:[],origins:[]}})

test.beforeEach(async({page})=>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  /*await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  await expect(page.getByRole("heading",{name:"Dashboard"})).toBeVisible();*/
})

test('Verify timesheet card navigation on Dashboard Page', async ({ page,context }) => {
  //await context.clearCookies();
  await expect(page.locator('#app')).toContainText('Quick Launch');
  await expect(page.getByLabel('Topbar Menu').getByText('Timesheets')).toBeVisible();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Timesheets');
});

test('Add Candidate for Recruitment',async({page})=>{
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Abhinash');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('Singh');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Rana');
  await page.getByRole('textbox', { name: 'Type here' }).first().fill('abhinashsingh123@gmail.com');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('#app')).toContainText('Abhinash Singh Rana');
})