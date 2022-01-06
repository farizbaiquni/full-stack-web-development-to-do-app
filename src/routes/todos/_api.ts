import prismaClient from "$lib/prisma"

const prisma = new prismaClient()

let todos: Todo[] = []

export const api = async (request, todoData?: Record<string, any>) => {
    
    let status = 500
    let body = {}
    
    switch(request.method.toUpperCase()){
        case "GET":
            body = await prisma.todo.findMany({
                orderBy: {
                    created_at: "asc"
                }
            })
            status = 200
            break

        case "POST":
            body = await prisma.todo.create({
                data: {
                    created_at: todoData.created_at as Date,
                    todo: todoData.todo as string,
                    done: todoData.done as boolean,
                }
            })
            status = 200
            break

        case "DELETE":
            await prisma.todo.delete({
                where: {
                    uid: request.params.uid
                }
            })
            status = 200
            body = await prisma.todo.findMany({
                orderBy: {
                    created_at: "asc"
                }
            })
            status = 200
            break

        case "PATCH":
            body = await prisma.todo.update({
                where: {
                    uid: request.params.uid
                },

                data: {
                    todo: todoData.todo,
                    done: todoData.done,
                }

            })
            body = await prisma.todo.findMany({
                orderBy: {
                    created_at: "asc"
                }
            })
            status = 200

            break
            

        default:
            break

    }

    //This one will be used if not using ajax fetch (js disabled)
    if(request.method.toUpperCase() !== "GET" && request.headers.accept !== "application/json"){
        return {
            status: 303,
            headers: {
                location: "/"
            }
        }
    }

    return {
        status,
        body
    }
}