import type { RequestHandler } from "@sveltejs/kit";

let todos: Todo[] = []

export const get = () => {
    return {
        status: 200,
        body: todos,
    }
}

export const post: RequestHandler<{}, FormData> = (request) => {
    todos.push({
        created_at: new Date(),
        todo: request.body.get("todo"),
        done: false
        
    })
    
    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}