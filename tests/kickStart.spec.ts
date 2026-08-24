import {chromium, test} from "@playwright/test"

test("Basic Start with Playwright",async({page})=>{
    await page.goto("https://www.google.com");
    await page.getByRole('button', { name: 'Google apps' }).click();
    console.log("My first test.");
})

test("Basic Start with Playwright 1",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.google.como");
    await page.getByRole('button', { name: 'Google apps' }).click();
    console.log("My first test.");
})

test("My second test script",()=>{
    console.log("My second test.");
})
