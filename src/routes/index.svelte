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

    const { message } = await result.json();
    return {
      error: new Error(message),
    };
  };
</script>

<script lang="ts">
  import TodoList from "$lib/todo-list.svelte";
  const title = "Todos";
  export let todos: Todo[];
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="todos">
  <h1>{title}</h1>
  <form action="/todos.json" method="post">
    <input
      type="text"
      name="todo"
      aria-label="Add a todo"
      placeholder="+ Type to add a todo"
      autocomplete="off"
    />
  </form>

  {#each todos as todo}
    <TodoList {todo} />
  {/each}
</div>

<style>
  .todos {
    width: 42rem;
    display: flex;
    flex-direction: column;
    align-items: center;
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
