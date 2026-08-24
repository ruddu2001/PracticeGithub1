import {test} from "@playwright/test"

test.beforeEach("Practice of BeforeEach",async()=>{
    console.log("Executing beforeEach block.");
})

/*test.beforeEach("Practice of BeforeEach 1",async()=>{
    console.log("Executing beforeEach block 1.");
})

test.beforeEach("Practice of BeforeEach 2",async()=>{
    console.log("Executing beforeEach block 2.");
})

test.beforeEach("Practice of BeforeEach 3",async()=>{
    console.log("Executing beforeEach block 3.");
})

test.beforeEach("Practice of BeforeEach 4",async()=>{
    console.log("Executing beforeEach block 4.");
})

test.beforeEach("Practice of BeforeEach 5",async()=>{
    console.log("Executing beforeEach block 5.");
})*/

test("Practice Test 1",async({page})=>{
    console.log("Starting Practice Test 1");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 1");
})

test("Practice Test 2",async({page})=>{
    console.log("Starting Practice Test 2");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 2");
})

test("Practice Test 3",async({page})=>{
    console.log("Starting Practice Test 3");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 3");
})
/*
test.afterEach(async()=>{
    console.log("Executing afterEach block.");
})*/

test.beforeAll("Practice of beforeAll",async()=>{
    console.log("Executing beforeAll block.");
})

test.afterAll("Practice of afterAll",async()=>{
    console.log("Executing afterAll block.");
})

test.describe("Practice of Describe",async()=>{
    /*test.beforeAll("Practice of beforeAll",async()=>{
       console.log("Executing beforeAll block.");
    })*/
    /*test.beforeEach("Practice of BeforeEach",async()=>{
       console.log("Executing beforeEach block.");
    })*/
    /*test.afterEach(async()=>{
       console.log("Executing afterEach block.");
    })*/
    /*test.afterAll("Practice of afterAll",async()=>{
       console.log("Executing afterAll block.");
    })*/
    test("Practice Test 4",async({page})=>{
       console.log("Starting Practice Test 4");
       await page.goto("https://www.saucedemo.com/");
       console.log(await page.title());
       console.log("Ending Practice Test 4");
    })
    test("Practice Test 5",async({page})=>{
       console.log("Starting Practice Test 5");
       await page.goto("https://www.saucedemo.com/");
       console.log(await page.title());
       console.log("Ending Practice Test 5");
    })
    test("Practice Test 6",async({page})=>{
       console.log("Starting Practice Test 6");
       await page.goto("https://www.saucedemo.com/");
       console.log(await page.title());
       console.log("Ending Practice Test 6");
    })
})

test("Practice Test 7",async({page})=>{
    console.log("Starting Practice Test 7");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 7");
})
