import {test as baseTest} from "@playwright/test";

type MyFixtures={
    loginData:any,
    testData:any
}

export const test=baseTest.extend<MyFixtures>({
    loginData:{
        username:"Admin",
        password:"admin123"
    },
    testData:{
        fname:"Sam",
        mname:"D",
        lname:"Warn",
        email:"same@gmail.com"
    }
})

export {expect} from "@playwright/test";