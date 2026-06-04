
import { test, expect } from "@playwright/test";
import { postHttpCall } from "../api/httpCalls";
import manager from "../env/manager";
import data from "../test-data/login/success.json";

test.describe("Testing of all API calls", () => {

    test(" Testing of POST API Call", async () => {
        const response: any = await postHttpCall(
            `${manager.baseUrl}/auth/login`,
            data
        );
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({
            success: true,
            token: 'jwt-token-123',
            refreshToken: 'refresh-token-456',
            user: {
                id: 101,
                name: 'John Smith',
                email: 'john@test.com',
                role: 'customer'
            }
        });
    })

});