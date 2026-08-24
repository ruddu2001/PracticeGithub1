import {test,expect} from "@playwright/test"

test("Handle Alert Dialogs",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog",(dialog)=>{
       expect(dialog.type()).toEqual("alert");
       expect(dialog.message()).toEqual("I am a JS Alert");
       dialog.accept();
    })
    await page.getByRole("button",{name:"Click for JS Alert"}).click();
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
})

test("Handle Confirm Dialogs",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog",(dialog)=>{
        expect(dialog.type()).toEqual("confirm");
        expect(dialog.message()).toEqual("I am a JS Confirm");
        dialog.accept();
        //dialog.dismiss();
    })
    await page.getByRole("button",{name:"Click for JS Confirm"}).click();
    await expect(page.locator("#result")).toHaveText("You clicked: Ok");
    //await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
})

test("Handle Prompt Dialogs",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog",(dialog)=>{
        expect(dialog.type()).toEqual("prompt");
        expect(dialog.message()).toEqual("I am a JS prompt");
        dialog.accept("Hii everyone");
        //dialog.dismiss();
    })
    await page.getByRole("button",{name:"Click for JS Prompt"}).click();
    await expect(page.locator("#result")).toHaveText("You entered: Hii everyone");
    //await expect(page.locator("#result")).toHaveText("You entered: null");
})