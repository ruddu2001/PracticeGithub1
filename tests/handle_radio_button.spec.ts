import {test,expect} from "@playwright/test"

test("handle radio button",async({page})=>{
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    const male_radio=await page.locator("#male");
    await male_radio.check();
    await expect(male_radio).toBeChecked();
    const female_radio=await page.locator("#female");
    await female_radio.check();
    await expect(male_radio).not.toBeChecked();

})