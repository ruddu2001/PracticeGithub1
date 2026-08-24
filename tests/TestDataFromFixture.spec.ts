import {test,expect} from "../custom_fixtures_folder/TestDataFixture";

test.beforeEach("Login",async({page,loginData})=>{
    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill(loginData.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(loginData.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await expect(page.getByRole("heading",{name:"Dashboard"})).toBeVisible();
})

test("Add Candidate for Recruitment",async({page,testData})=>{
    await page.getByRole('link', { name: 'Recruitment' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill(testData.fname);
    await page.getByRole('textbox', { name: 'Middle Name' }).fill(testData.mname);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(testData.lname);
    await page.getByRole('textbox', { name: 'Type here' }).first().fill(testData.email);
    await page.getByRole('button', { name: 'Save' }).click();
    //await expect(page.locator('#app')).toContainText("Sam D Warn");
})