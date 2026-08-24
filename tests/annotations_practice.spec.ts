import {test} from "@playwright/test"

/* test.describe.only("Practice of describe",async()=>{
    //test.skip();
    test("Practice Test 1",async({page})=>{
      console.log("Starting Practice Test 1");
      console.log("Ending Practice Test 1");
    })

    test("Practice Test 2",async({page})=>{
      console.log("Starting Practice Test 2");
      console.log("Ending Practice Test 2");
    })

    test("Practice Test 3",async({page})=>{
      console.log("Starting Practice Test 3");
      console.log("Ending Practice Test 3");
    })
}) */
//test.skip(({browserName})=>browserName==='chromium')
test.describe("Practice of describe",async()=>{
    test.skip(({browserName})=>browserName==='chromium');
    test("Practice Test 1",async({page})=>{
      console.log("Starting Practice Test 1");
      console.log("Ending Practice Test 1");
    })

    test("Practice Test 2",async({page})=>{
      console.log("Starting Practice Test 2");
      console.log("Ending Practice Test 2");
    })

    test("Practice Test 3",async({page})=>{
      console.log("Starting Practice Test 3");
      console.log("Ending Practice Test 3");
    })
}) 

/* test.skip("Practice Test 4",async({page})=>{
    //test.skip();
    console.log("Starting Practice Test 4");
    console.log("Ending Practice Test 4");
})
 */
test.fixme("Practice Test 5",async({page,browserName})=>{
    //test.skip(browserName==='webkit');
    console.log("Starting Practice Test 5");
    console.log("Ending Practice Test 5");
})

test("Practice Test 6",async({page,browserName})=>{
    test.slow(browserName==='chromium');
    console.log("Starting Practice Test 6");
    console.log("Ending Practice Test 6");
})

test("Practice Test 7",async({page})=>{
    test.setTimeout(3000);
    console.log("Starting Practice Test 7");
    console.log("Ending Practice Test 7");
})

test("Practice Test 8",async({page})=>{
    test.fail();
    console.log("Starting Practice Test 8");
    console.log("Ending Practice Test 8");
})

test("Practice Test 9",async({page,browserName})=>{
    test.fail(browserName==='firefox');
    console.log("Starting Practice Test 9");
    console.log("Ending Practice Test 9");
})



