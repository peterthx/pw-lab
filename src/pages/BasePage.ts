import { Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto('/');
  }

  async wait(ms: number) {
    await this.page.waitForTimeout(ms);
  }
}