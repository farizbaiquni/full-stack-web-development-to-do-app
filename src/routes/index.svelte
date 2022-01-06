<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = async ({ fetch }) => {
    const result = await fetch("/todos.json");
    if (result.ok) {
      const todos = await result.json();
      return {
        props: { todos },
      };
    }

    const { errorMessage } = await result.json();
    return {
      error: new Error(errorMessage),
    };
  };
</script>

<script lang="ts">
  import TodoList from "$lib/todo-list.svelte";
  import { enhance } from "$lib/actions/form";
  const title = "Todos";
  export let todos: Todo[];

  const addedNewTodo = async (respone: Response, form: HTMLFormElement) => {
    const data = await respone.json();
    todos = [...todos, data];
    console.log(todos);
    form.reset();
  };
  const updateTodo = async (res: Response) => {
    const data = await res.json();
    todos = data;
  };
  const deleteTodo = async (res: Response) => {
    const data = await res.json();
    todos = data;
  };
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="todos">
  <h1>{title}</h1>
  <form
    action="/todos.json"
    method="post"
    use:enhance={{ result: addedNewTodo }}
  >
    <input
      type="text"
      name="todo"
      aria-label="Add a todo"
      placeholder="+ Type to add a todo"
      autocomplete="off"
    />
    <input type="submit" hidden />
  </form>

  {#each todos as todo}
    <TodoList {todo} {updateTodo} {deleteTodo} />
  {/each}
</div>

<style>
  .todos {
    width: 42rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  form {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  input {
    width: 80%;
    font-size: 20px;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
  }
</style>
