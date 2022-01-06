<script type="ts">
  import { enhance } from "./actions/form";
  export let updateTodo;
  export let deleteTodo;
  export let todo: Todo;
</script>

<div class="todo-list" class:done={todo.done}>
  <form
    action="/todos/{todo.uid}.json?_method=patch"
    method="post"
    use:enhance={{ result: updateTodo }}
  >
    <input type="hidden" name="done" value={todo.done ? "false" : "true"} />
    <button
      aria-label="Mark as {todo.done ? 'not done' : 'done'}"
      class="toggle"
      type="submit"
    >
      <i class="fa fa-2x fa-check" aria-hidden="true" />
    </button>
  </form>

  <form
    action="/todos/{todo.uid}.json?_method=patch"
    method="post"
    id="text"
    use:enhance={{ result: updateTodo }}
  >
    <input type="text" value={todo.todo} name="todo" />
    <button aria-label="Save" class="save" type="submit">
      <i class="fa fa-2x fa-floppy-o" aria-hidden="true" />
    </button>
  </form>

  <form
    action="/todos/{todo.uid}.json?_method=delete"
    method="post"
    use:enhance={{ result: deleteTodo }}
  >
    <button aria-label="Delete" class="delete" type="submit">
      <i class="fa fa-2x fa-trash" aria-hidden="true" />
    </button>
  </form>
</div>

<style>
  .done {
    opacity: 0.6;
  }

  .done .toggle i {
    opacity: 1;
  }

  .done .save {
    display: none;
  }

  .toggle i {
    opacity: 0;
  }

  .todo-list {
    display: flex;
    margin-top: 20px;
    width: 100%;
  }

  .todo-list #text {
    display: flex;
    flex: 1;
  }

  .todo-list #text input {
    flex: 1;
    padding: 0 5px;
  }

  .todo-list .toggle {
    opacity: 0.5;
    width: 80%;
    height: 80%;
    border-radius: 100%;
    margin-right: 5px;
  }

  .todo-list .save {
    opacity: 0.5;
  }

  .todo-list .delete {
    opacity: 0.5;
  }

  .toggle:hover {
    transition: opacity 0.3s;
    opacity: 1;
  }

  .save:hover {
    transition: opacity 0.3s;
    opacity: 1;
  }

  .delete:hover {
    transition: opacity 0.3s;
    opacity: 1;
  }
</style>
