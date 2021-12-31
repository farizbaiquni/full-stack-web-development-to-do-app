let todos: Todo[] = []

export const api = (request, data?: Record<string, any>) => {
    let status = 500
    let body = {}
    
    switch(request.method.toUpperCase()){
        case "GET":
            body = todos
            status = 200
            break

        case "POST":
            todos.push(data as Todo)
            body = data
            status = 200
            break

        case "DELETE":
            todos = todos.filter(todo => todo.uid !== request.params.uid)
            status = 200
            break

        case "PATCH":
            todos = todos.map( todo => {
                if(todo.uid === request.params.uid){
                    if(data.todo) todo.todo = data.todo as string
                    else todo.done = data.done as boolean
                }
                return todo
            })
            break
            

        default:
            break

    }

    if(request.method.toUpperCase() !== "GET" && request.headers.accept !== "application/json"){
        return {
            headers: {
                status: 303,
                location: "/"
            }
        }
    }

    return {
        status,
        body
    }
}