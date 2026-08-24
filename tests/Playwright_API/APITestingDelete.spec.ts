import { test, expect, request } from "@playwright/test"

test("Delete Call for API Testing", async () => {
    const requestContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            "Accept": "application/json"
        }
    })

    const responseDelete = await requestContext.delete("/booking/3", {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
    });
    expect(responseDelete.status()).toBe(201);
    expect(responseDelete.statusText()).toEqual("Created");

    const responseGet=await requestContext.get("/booking/3");
    expect(responseGet.status()).toBe(404);
})