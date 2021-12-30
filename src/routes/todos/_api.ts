let todos: Todo[] = []

export const api = (request, data?: Record<string, any>) => {
    let status = 500
    let body = {}
    
    switch(request.method.toUpperCase()){
        case "GET":
            return {
                status: 200,
                body: todos
            }

        case "POST":
            todos.push(data as Todo)

            return {
                status: 303,
                headers: {
                    location: "/"
                }
            }

        case "DELETE":
            todos = todos.filter(todo => todo.uid !== request.params.uid)
            return {
                status: 303,
                headers: {
                    location: "/"
                }
            }

        case "PATCH":
            todos = todos.map( todo => {
                if(todo.uid === request.params.uid){
                    todo.todo = data.todo as string
                }
                return todo
            })
            return {
                status: 303,
                headers: {
                    location: "/"
                }
            }

        default:
            return {
                status,
                body
            }

    }
}