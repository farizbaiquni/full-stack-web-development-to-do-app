import type { Request, RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const get = (request: Request) => {
    return {
        status: 200,
        body: request.params.uid
    }
}

export const del: RequestHandler<{}, FormData> = (request) => {
    return api(request)
}