import { Page, Locator } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly username_tf:Locator;
    readonly password_tf:Locator;
    readonly login_btn:Locator;
     
    constructor(page:Page){
         this.page=page;
         this.username_tf=page.getByPlaceholder("Username");
         this.password_tf=page.getByPlaceholder("Password");
         this.login_btn=page.locator("#login-button");
    }

    async openApplication(url:string){
        await this.page.goto(url);
    }

    async login(username:string,password:string){
        await this.username_tf.fill(username);
        await this.password_tf.fill(password);
        await this.login_btn.click();
    }
}