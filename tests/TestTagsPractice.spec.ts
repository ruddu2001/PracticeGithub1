import {test} from "@playwright/test";

test.describe("Describe Block 1",{tag:["@UI","@Sanity"]},async()=>{

    test("Practice Test1 @UI",async({})=>{
        console.log("Practice Test 1");
    })

    test("Practice Test2 @API",async({})=>{
        console.log("Practice Test 2");
    })

    test("Practice Test3 @UI",async({})=>{
        console.log("Practice Test 3");
    })
})

test("Practice Test4",{tag:["@UI","@Smoke"]},async({})=>{
    console.log("Practice Test 4");
})

test("Practice Test5",{tag:"@API"},async({})=>{
    console.log("Practice Test 5");
})

test("Practice Test6",{tag:"@API"},async({})=>{
    console.log("Practice Test 6");
})