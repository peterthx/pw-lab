import { test, expect } from "@fixtures/Page.Fixtures";

test.describe("Added Item to Cart", async () => {

  test.beforeEach(async ({ loginPage, standardUser }) => {
    await loginPage.navigateTo();
    await loginPage.login(standardUser.username, standardUser.password);
  });

  test("should be added a single item successfully", async ({ cartPage, inventoryPage, checkoutPage }) => {
    await inventoryPage.btnAddBackpack.click();
    await cartPage.clkCartBadge();
    expect(await cartPage.chkItem()).toBeTruthy();
    await cartPage.chkout();
    await checkoutPage.inputAddress("John", "Smith", "1989 San Francisco US");
    await expect(checkoutPage.lblSubtotal).toContainText("$29.99");
    await expect(checkoutPage.lblTax).toContainText("$2.40");
    await expect(checkoutPage.lblTotal).toContainText("$32.39");
  });
});
