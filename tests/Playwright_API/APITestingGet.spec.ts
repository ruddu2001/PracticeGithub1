import {request, test} from "@playwright/test"

// Using this approach, requestcontext will be applicable across all the tests for sending different requests.
let requestContext1;
test.beforeAll("Before All the Test",async()=>{
    requestContext1=await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    });
})

test("Playwright API Testing with Get Call Practice1",async({request})=>{
    const response1=await request.get("https://restful-booker.herokuapp.com/booking",{
        headers:{
            Accept:"application/json"
        }
    });
    console.log(await response1.json());
})

// In this approach, requestcontext will be applicable for sending the different requests only within the test block.
// If we want baseURL common for all the calls within the test block.
test("Playwright API Testing with Get Call Practice2",async()=>{
    const requestContext=await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    });
    const response1=await requestContext.get("/booking");
    console.log(await response1.json());
})

// If we want baseURL common for all the calls across all the tests.
/*test("Playwright API Testing with Get Call Practice2",async()=>{
    const response2=await requestContext1.get("/booking");
    console.log(await response2.json());
})*/

//Here, BaseURL is given in playwright.config.js file
// If you want baseURL common for all the calls across all the spec files.
/*test("Playwright API Testing with Get Call Practice2",async({request})=>{
    const response2=await request.get("/booking");
    console.log(await response2.json());
})*/