import { test, expect, request } from "@playwright/test"
import apiJson from "../../test-data/apiData.json"

test("API Testing - Pass Request Body from JSON for Post Call", async () => {
    const requestContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            "Accept": "application/json"
        }
    })

    const response = await requestContext.post("/booking", {
        data: apiJson
    });

    const jsonResponse = await response.json();
    expect(jsonResponse.booking).toMatchObject(apiJson.postcalldata);
    expect(jsonResponse.booking.additionalneeds).toEqual(apiJson.postcalldata.additionalneeds);
})

test("API Testing - Pass Request Body from JSON for Put Call", async () => {
    const requestContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            "Accept": "application/json"
        }
    })

    const response = await requestContext.put("/booking/1", {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:apiJson.putcalldata
    })

    const jsonResponse = await response.json();
    expect(jsonResponse).toMatchObject(apiJson.putcalldata);
    expect(jsonResponse.firstname).toEqual(apiJson.putcalldata.firstname);

})