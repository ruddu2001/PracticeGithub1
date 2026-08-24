import {test as baseTest} from "@playwright/test"

type myFixtures={
    fixture1:any;
} 

type MyWorkerFixtures={
    workerFixture1:any
}

export const test=baseTest.extend<myFixtures,MyWorkerFixtures>({
    fixture1:async({},use:any)=>{
        const fixture1="I am Fixture 1."
        console.log("Before part of Fixture 1");
        await use(fixture1);
        console.log("After part of Fixture 1");    
    },

    workerFixture1:[async({},use:any)=>{
        const workerfixture1="I am Worker Fixture 1."
        console.log("Before part of Worker Fixture 1");
        await use(workerfixture1);
        console.log("After part of Worker Fixture 1");    
    },{scope:"worker"}]
})