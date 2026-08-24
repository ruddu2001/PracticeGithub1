import {test,expect} from "@playwright/test";

test.beforeEach("Login to Sauce Labs",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
})

test.afterEach("Logout from Sauce Labs",async({page})=>{
    await page.getByRole("button",{name:"Open Menu"}).click();
    await page.locator("#logout_sidebar_link").click();
})

test("Adding or Removing item from / to cart verification",async({page})=>{
    await page.getByText("Sauce Labs Backpack").click();
    await page.locator("#add-to-cart").click();
    await page.getByTestId("shopping-cart-link").click();
    await expect(page.getByTestId("inventory-item-name")).toHaveText("Sauce Labs Backpack");
    await expect(page.locator("#remove-sauce-labs-backpack")).toBeVisible();
    await page.locator("#remove-sauce-labs-backpack").click();
    await expect(page.locator("#remove-sauce-labs-backpack")).not.toBeVisible();
})

test("Cart Verification",async({page})=>{
    await page.getByTestId("shopping-cart-link").click();
    await expect(page.locator(".inventory_item_name")).not.toBeVisible();
})
