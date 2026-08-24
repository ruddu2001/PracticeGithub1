import { test, expect, request } from "@playwright/test"

test("Fetch and Validate Response Header", async () => {
    const requestContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            "Accept": "application/json"
        }
    });

    const response=await requestContext.get("/booking/10");
    const responseHeader=await response.headers();
    console.log(responseHeader);
    expect(responseHeader.server).toEqual("Heroku");
    expect(responseHeader.via).toEqual("1.1 heroku-router");
    expect(responseHeader["x-powered-by"]).toEqual("Express");

    console.log("***********************************************");

    const responseHeaderArray=await response.headersArray();
    console.log(responseHeaderArray);
    expect(responseHeaderArray.length).toBe(10);

    console.log("***********************************************");

    responseHeaderArray.forEach((header)=>{
        console.log(header.name+"::"+header.value);
    })
})