import { APIRequestContext, APIResponse, request } from "@playwright/test";


export const posthttpCall = async (url: string, payload: any) => {

  
    const apiContext = await request.newContext();
    try {

      const   response = await apiContext.post(url, {
            data: payload,
            ignoreHTTPSErrors: true
        });
        const body = await response.json();
        return {
            status: response.status(),
            body: body,
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