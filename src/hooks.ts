import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({request, resolve}) => {
    if(request.query.has("_method")){
        switch(request.query.get("_method")){
            case "delete":
                request.method = request.query.get("_method").toUpperCase()
                break
            case "patch":
                request.method = request.query.get("_method").toUpperCase()
                break
        }
    }
    const response = await resolve(request)
    return response
}