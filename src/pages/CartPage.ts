import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clkCartBadge(): Promise<void> {
    await this.page.locator('[data-test="shopping-cart-badge"]').click();
    await expect(this.page).toHaveURL(/cart.html/);
  }

  async checkItem(): Promise<boolean> {
    const quantity = await this.page
      .locator('[data-test="item-quantity"]')
      .textContent();
    return quantity?.trim() === "1";
  }

  get lnkCart(): Locator {
    return this.page.locator(".shopping_cart_link");
  }

  get lnkCartShop(): Locator {
    return this.page.locator('[data-test="shopping-cart-link"]');
  }

  async checkout(): Promise<void>{
     return this.page.locator('[data-test="checkout"]').click();
  }
}
