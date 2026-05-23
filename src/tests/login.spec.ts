import { test, expect } from '@fixtures/Page.Fixtures';

test.describe('Login Tests', () => {
    test('should login successfully', async ({ loginPage,standardUser, page }) => {
        await loginPage.navigateTo();
        await loginPage.login(standardUser.username, standardUser.password);
        await expect(page).toHaveURL(/inventory.html/);
    });

    test('should show error for invalid credentials', async ({ loginPage,lockedoutUser, page }) => {
        await loginPage.navigateTo();
        await loginPage.login(lockedoutUser.username, lockedoutUser.password);
        await loginPage.assertErrorMessage();
       
    });
});
