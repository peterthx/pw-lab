import { test as base } from "@playwright/test";
import { usersData } from "@data/users";
import { LoginPage } from "@pages/LoginPage";

type MyFixtures = {
  loginPage: LoginPage;
  standardUser: typeof usersData.standardUser;
  lockedoutUser: typeof usersData.lockedoutUser;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  standardUser: async ({}, use) => {
    await use(usersData.standardUser);
  },
  lockedoutUser: async ({}, use) => {
    await use(usersData.lockedoutUser);
  },
});

export { expect } from "@playwright/test";
