import {test,expect} from "@playwright/test"

test("Handle Multiple Environments",async({page})=>{
    //console.log(process.env.URL);
    //console.log(process.env.USERNAME1);
    //console.log(process.env.PASSWORD);
    
    //const url=<string> process.env.URL;
    const url=process.env.URL as string;
    const username=process.env.USERNAME as string;
    const password=process.env.PASSWORD as string;
   
    await page.goto(url);
    await page.locator("#user-name").fill(username);
    await page.locator("#password").fill(password);
    await page.locator("#login-button").click();

})