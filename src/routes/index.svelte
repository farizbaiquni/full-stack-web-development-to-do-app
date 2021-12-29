<script>
  import TodoList from "$lib/todo-list.svelte";
  const title = "Todos";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<form action="" method="">
  <input
    type="text"
    aria-label="Add a todo"
    placeholder="+ Type to add a todo"
  />
</form>

<TodoList />
