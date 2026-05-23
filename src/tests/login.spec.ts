import { test, expect } from "@fixtures/Page.Fixtures";

test.describe("Login Tests", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateTo();
  });

  test("should login successfully", async ({
    loginPage,
    standardUser,
    page,
  }) => {
    await loginPage.login(standardUser.username, standardUser.password);
    await expect(page).toHaveURL(/inventory.html/);
  });

  test("should logout successfully", async ({
    logoutPage,
    loginPage,
    standardUser,
    page,
  }) => {
    await loginPage.login(standardUser.username, standardUser.password);
    await expect(page).toHaveURL(/inventory.html/);

    await logoutPage.logout();
    await expect(page).toHaveURL(/www.saucedemo.com/)
  });

  test("should show error for invalid credentials", async ({
    loginPage,
    lockedoutUser,
  }) => {
    await loginPage.login(lockedoutUser.username, lockedoutUser.password);
    await loginPage.assertErrorMessage();
  });
});
