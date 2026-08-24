import {test,request,expect} from "@playwright/test"

/*let requestContext;
test.beforeAll("Request Context Creation for all tests",async()=>{
    requestContext=await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
           Accept:"application/json"
        }
    })
})*/

/*test("API Testing Get Practice2",async({page})=>{
    const requestContext=await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    });
    const response=await requestContext.get("/booking/2");
    console.log(await response.json());
})*/

/*test("API Testing Get Practice2",async()=>{
    const response=await requestContext.get("/booking?firstname=John&lastname=Smith");
    console.log(await response.json());
})*/

/*test("API Testing Get Practice2",async()=>{
    const requestContext=await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    });
    const response=await requestContext.get("/booking",{
        params:{
            firstname:"John",
            lastname:"Smith"
        }
    });
    console.log(await response.json());

})*/

/*test("API Testing Get Practice 3",async()=>{
    const requestContext=await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
           Accept:"application/json"
        }
    })

    const response=await requestContext.get("/booking/10");
    console.log(await response.json());
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toMatchObject({
      "firstname": "Mark",
      "lastname": "Smith",
      "totalprice": 935,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2024-05-20",
        "checkout": "2025-05-22"
      },
      "additionalneeds": "Breakfast"
    })
    const jsonResponse=await response.json();
    expect(jsonResponse.firstname).toEqual("Mark");
})*/

test("API Testing Get Practice 4",async({page})=>{
    const requestContext=await request.newContext({
        baseURL:"https://api.demoblaze.com",
        extraHTTPHeaders:{
            "Content-Type":"application/json"
        }
    })

    const response=await requestContext.get("/entries");
    console.log(await response.json());
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    
    const jsonResponse=await response.json();
    console.log(jsonResponse.Items);
    console.log(jsonResponse.Items[0]);
    console.log(jsonResponse.Items[0].title);
    expect(jsonResponse.Items[0].cat).toBe("phone");

    expect(jsonResponse.Items[0]).toMatchObject({
            "cat": "phone",
            "desc": "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. ",
            "id": 1,
            "img": "imgs/galaxy_s6.jpg",
            "price": 360.0,
            "title": "Samsung galaxy s6"
    })

    await page.goto("https://www.demoblaze.com/");
    await expect(page.getByRole("link",{name:"Samsung galaxy s6"})).toHaveText(jsonResponse.Items[0].title);
})

