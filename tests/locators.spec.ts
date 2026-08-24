import {test} from "@playwright/test"

test("understanding locators",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("//input[@name='user-name']").fill("standard_user");
    //We can also write ("css=input#password") but playwright will automatically put the prefix css, so no need. Same for xpath also.
    await page.locator("input#password").fill("secret_sauce");
    //await page.locator("#login-button").click();
    await page.locator("input[value=Login]").click();
    await page.locator("text='Sauce Labs Backpack'").click();
    //await page.locator("id=add-to-cart").click();
    await page.locator("data-test=add-to-cart").click();
})

test("Practice of locator method with options",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator(".form_group",{has: page.locator("#user-name")}).click();
    await page.locator(".form_group",{has: page.locator("#user-name")}).pressSequentially("standard_user");
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).click();
    await page.locator(".form_group",{hasNot: page.locator("#user-name")}).pressSequentially("secret_sauce");
    await page.locator("#login-button").click();
    //await page.locator("//a",{hasText:"Sauce Labs Bike Light"}).click();
    await page.locator(".inventory_item_name ",{hasNotText:/Sauce.*/}).click();
})