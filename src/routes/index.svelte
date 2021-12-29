<script>
  import TodoList from "$lib/todo-list.svelte";
  const title = "Todos";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="todos">
  <h1>{title}</h1>
  <form action="" method="">
    <input
      type="text"
      aria-label="Add a todo"
      placeholder="+ Type to add a todo"
    />
  </form>

  <TodoList />
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
