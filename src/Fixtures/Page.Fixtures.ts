import { test as base } from "@playwright/test";
import { usersData } from "@data/users";
import { LoginPage } from "@pages/LoginPage";
import { InventoryPage } from "@pages/InventoryPage";
import { LogoutPage } from "@pages/LogoutPage";

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  logoutPage: LogoutPage;
  standardUser: typeof usersData.standardUser;
  lockedoutUser: typeof usersData.lockedoutUser;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  logoutPage: async ({ page }, use) => {
    await use(new LogoutPage(page));
  },
  standardUser: async ({}, use) => {
    await use(usersData.standardUser);
  },
  lockedoutUser: async ({}, use) => {
    await use(usersData.lockedoutUser);
  },
});

export { expect } from "@playwright/test";
