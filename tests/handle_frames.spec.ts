import {test} from "@playwright/test"

test("Handle iframe with name",async({page})=>{
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form");
    const iframe_res=await page.frame("iframeResult");
    await iframe_res?.locator("#fname").fill("Rudransh");
    await iframe_res?.locator("[value='Submit']").click();
})

test("Handle iframe with frame locator",async({page})=>{
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form");
    const iframe_res=await page.frameLocator("#iframeResult");
    await iframe_res.getByLabel("First name:").fill("Rudransh");
})