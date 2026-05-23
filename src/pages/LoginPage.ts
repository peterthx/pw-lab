import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get usernameInput(): Locator {
    return this.page.locator("#user-name");
  }

  get passwordInput(): Locator {
    return this.page.locator("#password");
  }

  get loginButton(): Locator {
    return this.page.locator("#login-button");
  }

  get errMessage() {
    return this.page.locator('[data-test="error"]');
  }

  public async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  public async assertErrorMessage() {
    await expect(this.errMessage).toHaveText(
      "Epic sadface: Sorry, this user has been locked out.",
    );
  }
}
