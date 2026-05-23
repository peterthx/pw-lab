import { Page } from "@playwright/test";
import { dev } from "../.env/baseURL";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto(dev.URL);
  }

  async wait(ms: number) {
    await this.page.waitForTimeout(ms);
  }
}