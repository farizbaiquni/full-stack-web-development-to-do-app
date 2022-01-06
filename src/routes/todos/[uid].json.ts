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

export const patch: RequestHandler<{}, FormData> = (request) => {
    return api(request, {
        todo: request.body.get("todo"),
        done: request.body.has("done") && request.body.get("done") == "true" ? true : false,
    })
}