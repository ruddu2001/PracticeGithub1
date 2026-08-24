import {expect} from "@playwright/test";
import {test} from "../custom_fixtures_folder/Hooks_fixtures";

test("Adding or Removing item from / to cart verification",async({page,loginlogoutfixture})=>{
    await page.getByText("Sauce Labs Backpack").click();
    await page.locator("#add-to-cart").click();
    await page.getByTestId("shopping-cart-link").click();
    await expect(page.getByTestId("inventory-item-name")).toHaveText("Sauce Labs Backpack");
    await expect(page.locator("#remove-sauce-labs-backpack")).toBeVisible();
    await page.locator("#remove-sauce-labs-backpack").click();
    await expect(page.locator("#remove-sauce-labs-backpack")).not.toBeVisible();
})

test("Cart Verification",async({page,loginlogoutfixture})=>{
    await page.getByTestId("shopping-cart-link").click();
    await expect(page.locator(".inventory_item_name")).not.toBeVisible();
})
