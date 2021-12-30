/// <reference types="@sveltejs/kit" />

type Todo = {
    uid: string,
    created_at: Date,
    todo: string,
    done: boolean,
}