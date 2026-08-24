import {test} from "@playwright/test"

test("Practice getBy methods",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    //await page.getByLabel("Name").fill("testcodeautomate@gmail.com");
    await page.getByLabel("Nam",{exact:false}).fill("Rudransh");
    
    await page.getByPlaceholder("Enter Your Email").fill("abc@gmail.com");

    //console.log(await page.getByText("Register").textContent());

    //await page.goto("https://demoapps.qspiders.com/ui/image/broken?sublist=4");
    //console.log(await page.getByAltText("Men Shirt").textContent());

    await page.getByRole("button",{name:"Register"}).click();
    
    await page.goto("https://www.saucedemo.com/");
   // await page.getByTestId("username").fill("abcd")
})