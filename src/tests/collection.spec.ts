import test from "@playwright/test";
import { collection } from "../entity/payloads/collection.data";
import { ApplicationTypes } from "../types/Collections";

test.describe("Collection API Tests", () => {
  test("Create Collection API", async () => {
    await test.step("Test Data Creation for Collection API", async () => {
      const collectionData = collection({
        stateCode: 'A',
        typeCode: ApplicationTypes.Release,
        acceptanceDays: '30'
      });
      console.log(collectionData);
    });
  });
});
