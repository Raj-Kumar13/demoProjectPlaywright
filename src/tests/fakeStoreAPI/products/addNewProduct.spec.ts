import { test, expect } from '@playwright/test';


test("Testing of add new Product API Call", async ({ request }) => {

    const payload = {
        "id": 0,
        "title": "string",
        "price": 0.1,
        "description": "string",
        "category": "string",
        "image": "http://example.com"
    }

    const response = await request.post('https://fakestoreapi.com/products', {
        data: payload
    });
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    console.log(JSON.stringify(responseBody, null, 2));

})
