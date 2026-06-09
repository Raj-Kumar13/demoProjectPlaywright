import { APIRequestContext, APIResponse, request } from "@playwright/test";


export const postHttpCall = async (url: string, payload: any) => {


    const apiContext = await request.newContext();
    try {

        const response = await apiContext.post(url, {
            data: payload,
            ignoreHTTPSErrors: true
        });
        return {
            status: response.status(),
            body: response.ok() ? await response.json() : await response.text(),
            headers: response.headers()
        }
    }

    catch (error) {
        console.error(error);
    }
    finally {
        await apiContext.dispose();
    }
}