import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const get: RequestHandler = (request) => {
    return api(request)
}

export const post: RequestHandler<{}, FormData> = (request) => {
    return api(request, {
        uid: `${Date.now()}`,
        created_at: new Date(),
        todo: request.body.get("todo"),
        done: false
    })
}