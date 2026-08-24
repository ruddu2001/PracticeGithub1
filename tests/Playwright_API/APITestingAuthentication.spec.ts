import { test, expect, request } from "@playwright/test"

let tokenValue: any;
/*test("Making Post Call", async () => {
    const requestContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            "Accept": "application/json"
        }
    });

    const response = await requestContext.put("/booking/1", {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "Wish",
            "lastname": "Infinite100",
            "totalprice": 1000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Pan Cakes 1"
        }
    })

    expect(response.status()).toBe(200);
})*/

test.beforeAll("Authentication Token Generation", async ({ request }) => {
    const response = await request.post("/auth", {
        data: {
            "username": "admin",
            "password": "password123"
        }
    })

    const tokenJson = await response.json();
    tokenValue = await tokenJson.token;
})

test("Authentication of Put Call using Token", async ({ request }) => {
    const response = await request.put("/booking/10", {
        headers: {
            Cookie: `token=${tokenValue}`
        },
        data: {
            "firstname": "Wish",
            "lastname": "Infinite 1020",
            "totalprice": 1022,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Pan Cakes 3"
        }
    });

    expect(response.status()).toBe(200);
})

/*test("Authentication of Delete Call using Token", async ({ request }) => {
    const response = await request.delete("/booking/10", {
        headers: {
            Cookie: `token=${tokenValue}`
        },
    })
    
    expect(response.status()).toBe(201);
})*/

