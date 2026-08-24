import { Locator, Page } from "@playwright/test";

export class HomePage{
    readonly page:Page;
    readonly homePageHeading:Locator;
    readonly backpackAddToCartButton:Locator;
    readonly backpackRemoveFromCartButton:Locator;
    readonly cartIcon:Locator;

    constructor(page:Page){
        this.page=page;
        this.homePageHeading=page.getByText("Swag Labs");
        this.backpackAddToCartButton=page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.backpackRemoveFromCartButton=page.getByTestId('remove-sauce-labs-backpack');
        this.cartIcon=page.getByTestId('shopping-cart-link');
    }

    async backPackAddToCart(){
        await this.backpackAddToCartButton.click();
    }

    async goToCartLink(){
        await this.cartIcon.click();
    }
}