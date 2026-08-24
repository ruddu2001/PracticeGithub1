import {test,expect} from "@playwright/test";

test("Annotate Test Practice Test 1",{
    annotation:{
        type:"Jira Story",
        description:"https://www.google.com"
    },tag:"@UI"
},async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
})

test.skip("Annotate Test Practice Test 2",{
    annotation:[{
        type:"Skip Reason",
        description:"Because of requirement change, I want to skip the test."
    },{
        type:"Google Title Verification",
        description:"https://www.google.com"
    }]
},async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
})

test.describe("Describe Block 1",{
    annotation:{
        type:"Skip Reason",
        description:"Because of requirement change, I want to skip the test."
    }
},async()=>{
    
    test("Practice Test1",async({})=>{
        console.log("Practice Test 1");
    })

    test("Practice Test2",async({})=>{
        console.log("Practice Test 2");
    })

    test("Practice Test3",async({})=>{
        console.log("Practice Test 3");
    })
})