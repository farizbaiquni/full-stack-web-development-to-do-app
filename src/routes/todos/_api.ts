let todos: Todo[] = []

export const api = (request, todo?: Todo) => {
    let status = 500
    let body = {}
    
    switch(request.method.toUpperCase()){
        case "GET":
            return {
                status: 200,
                body: todos
            }

        case "POST":
            todos.push(todo)

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

        default:
            return {
                status,
                body
            }

    }
}