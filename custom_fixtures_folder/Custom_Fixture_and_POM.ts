import {test as baseTest} from "@playwright/test"
import {LoginPage} from "../tests/pom_class/LoginPage.ts"
import { HomePage } from "../tests/pom_class/HomePage.ts";

type myFixtures={
    login_page: LoginPage;
    home_page:HomePage;
}

export const test=baseTest.extend<myFixtures>({
    login_page:async({page},use)=>{
        let login_page=new LoginPage(page);
        await use(login_page);
    },

    home_page:async({page},use)=>{
        let home_page=new HomePage(page);
        await use(home_page);
    }
})