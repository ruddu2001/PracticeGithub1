import { test, request, expect } from "@playwright/test"

/*test("API Testing Post Practice1", async () => {
    const requestContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            "Content-Type": "application/json"
        }
    });

    const response = await requestContext.post("/booking", {
        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse);
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    expect(response.ok()).toBeTruthy();
    expect(jsonResponse.booking).toMatchObject({
        firstname: 'Jim',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
    })
    expect(jsonResponse.booking.additionalneeds).toEqual("Breakfast");

})*/

test("API Testing Post Practice2",async({page})=>{
    const requestContext=await request.newContext({
        baseURL:"https://api.demoblaze.com",
        extraHTTPHeaders:{
            "Content-Type":"application/json"
        }
    })

    const response=await requestContext.post("/addtocart",{
        data:{"id":"114af6ec-1466-8a3c-532e-b49326e0f436","cookie":"cnVkcmFuc2hyYXRob3JlMjdAZ21haWwuY29tMTc4ODAwMw==","prod_id":1,"flag":true}
    })

    await page.goto("https://www.demoblaze.com/index.html");
    await page.getByRole("link",{name:"Log in"}).click();
    await page.locator("#loginusername").fill("rudranshrathore27@gmail.com");
    await page.locator("#loginpassword").fill("Ruddu@2001");
    await page.getByRole("button",{name:"Log in"}).click();
    await expect(page.locator("#tbodyid").filter({hasText:"Samsung galaxy s6"})).toBeVisible();
})

