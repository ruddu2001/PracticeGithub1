import {expect} from "@playwright/test"
import {test} from "../custom_fixtures_folder/Custom_Fixture_and_POM";


test("Cart_Verification_POM+Custom_Fixture",async({page,login_page,home_page})=>{
    login_page.openApplication("https://www.saucedemo.com/");
    login_page.login("standard_user","secret_sauce");
    await expect(home_page.homePageHeading).toHaveText("Swag Labs");
    await home_page.backPackAddToCart();
    await expect(home_page.cartIcon).toHaveText("1");
    await expect(home_page.backpackRemoveFromCartButton).toBeVisible();
    await home_page.goToCartLink();
})