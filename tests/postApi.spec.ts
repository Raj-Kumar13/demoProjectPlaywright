
import { test, expect } from "@playwright/test";
import { posthttpCall } from "../api/httpCalls";
import manager from "../env/manager";
import data from "../test-data/login/success.json";

test.describe("Testing of all API calls", () => {

    test(" Testing of POST API Call", async () => {


        const response:any = await posthttpCall(`${manager.baseUrl}/auth/login`, 
            data
        );
        expect(response.status).toBe(200);

        console.log("Response Body: ", response.body);
    })

});