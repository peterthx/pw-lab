import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  //--- add item ---
  get btnAddBackpack(): Locator {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  get btnAddBoltTshirt(): Locator {
    return this.page.locator(
      '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
    );
  }

  get btnAddOnesie(): Locator {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
  }

  get btnAddBikeLigh(): Locator {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }

  get btnAddFleeceJacket(): Locator {
    return this.page.locator(
      '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
    );
  }

  get btnAddAllTheThingsTshirtRed(): Locator {
    return this.page.locator(
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',
    );
  }

  //--- remove items
  get btnRemoveBackpack(): Locator {
    return this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  }

  get btnRemoveBoltTshirt(): Locator {
    return this.page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
  }

  get btnRemoveOnesie(): Locator {
    return this.page.locator('[data-test="remove-sauce-labs-onesie"]');
  }

  get btnRemoveBikeLight(): Locator {
    return this.page.locator('[data-test="remove-sauce-labs-bike-light"]');
  }

  get btnRemoveFleeceJacket(): Locator {
    return this.page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
  }

  get btnRemoveAllTheThingsTshirtRed(): Locator {
    return this.page.locator(
      '[data-test="remove-test.allthethings()-t-shirt-(red)"]',
    );
  }

  public async addAllItemsToCart() {
    while (
      (await this.page.locator('[data-test^="add-to-cart-"]').count()) > 0
    ) {
      await this.page.locator('[data-test^="add-to-cart-"]').first().click();
    }
  }
}
