import {test as baseTest} from "@playwright/test"

type myHooksFixtures={
    loginlogoutfixture:any;
}


export const test=baseTest.extend<myHooksFixtures>({
    loginlogoutfixture : async({page},use:any)=>{
       const loginlogoutfixture=undefined;
       //Login
       await page.goto("https://www.saucedemo.com/");
       await page.locator("#user-name").fill("standard_user");
       await page.locator("#password").fill("secret_sauce");
       await page.locator("#login-button").click();

       await use(loginlogoutfixture);

       //Logout
       await page.getByRole("button",{name:"Open Menu"}).click();
       await page.locator("#logout_sidebar_link").click();
    
    }
})