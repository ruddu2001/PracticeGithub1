import {test,expect} from "@playwright/test"

test("Assertions Practice",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    
     await expect(await page.locator("[data-test='login-button']")).toHaveCount(1);
     await expect(await page.locator("[data-test='login-button']")).toBeEnabled();
    // await expect(await page.locator("[data-test='login-button']")).toBeDisabled();
     await expect.soft(await page.locator("[data-test='login-button']")).toBeDisabled();
     await expect(await page.locator("[data-test='login-button']")).toBeVisible();
    //await expect(await page.locator("[data-test='login-button']")).toBeHidden();
     await expect(await page.locator("[data-test='login-button']")).toHaveText("Login");
     await expect(await page.locator("[data-test='login-button']")).toHaveAttribute("value","Login");
     await expect(await page.locator("[data-test='login-button']")).toHaveId("login-button");
     
     await expect(page).toHaveURL("https://www.saucedemo.com/");
     await expect(page).toHaveTitle("Swag Labs");
     await expect(page,"This is custom error message for practice.").not.toHaveTitle("Swag Labs");






})