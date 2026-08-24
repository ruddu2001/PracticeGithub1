import {test} from "@playwright/test"

test("Handle new page",async({context})=>{
    const page=await context.newPage();
    await page.goto("https://testpages.eviltester.com/pages/navigation/windows-names/");
    const newPagePromise=context.waitForEvent("page");
    await page.locator("#gobasicajax").click();
    const newPage=await newPagePromise;
    await newPage.locator("#window-name-button").click();
})
