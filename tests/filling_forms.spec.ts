import {test} from "@playwright/test"

test("Filling forms",async({page})=>{
    /*await page.goto("https://ultimateqa.com/filling-out-forms");
    await page.locator('#et_pb_contact_name_0').fill("test code hii");
    await page.locator('#et_pb_contact_message_0').fill("Hii, this is me Rudransh");*/

    await page.goto("https://www.google.com/");
    //await page.getByRole('combobox', { name: 'Search' }).fill("Playwright");
    //await page.getByRole('combobox', { name: 'Search' }).pressSequentially("Playwright",{delay:1000});
    //await page.locator("#APjFqb").pressSequentially("Playwright",{delay:1000});
    await page.locator("#APjFqb").pressSequentially("Playwright");
    await page.locator("#APjFqb").press("ArrowDown+ArrowDown+Enter",{delay:1000});

})