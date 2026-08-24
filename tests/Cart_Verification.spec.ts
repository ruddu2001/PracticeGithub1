import {test,expect} from "@playwright/test"
import {LoginPage}  from "./pom_class/LoginPage.ts"
import { HomePage } from "./pom_class/HomePage.ts";

test("Verification of Cart",async({page})=>{
    let login_page=new LoginPage(page);
    await login_page.openApplication("https://www.saucedemo.com/");
    await login_page.login("standard_user","secret_sauce");
    let home_page=new HomePage(page);
    await expect(home_page.homePageHeading).toHaveText("Swag Labs");
    await home_page.backPackAddToCart();
    await expect(home_page.cartIcon).toHaveText("1");
    await expect(home_page.backpackRemoveFromCartButton).toBeVisible();
    await home_page.goToCartLink();
})