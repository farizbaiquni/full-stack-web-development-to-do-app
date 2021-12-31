<script type="ts">
  export let todo: Todo;
</script>

<div class="todo-list" class:done={todo.done}>
  <form action="/todos/{todo.uid}.json?_method=patch" method="post">
    <input type="hidden" name="done" value={todo.done ? "" : "true"} />
    <button
      aria-label="Mark as {todo.done ? 'not done' : 'done'}"
      class="toggle"
    >
      <i class="fa fa-2x fa-check" aria-hidden="true" />
    </button>
  </form>

  <form action="/todos/{todo.uid}.json?_method=patch" method="post" id="text">
    <input type="text" value={todo.todo} name="todo" />
    <button aria-label="Save" class="save" type="submit">
      <i class="fa fa-2x fa-floppy-o" aria-hidden="true" />
    </button>
  </form>

  <form action="/todos/{todo.uid}.json?_method=delete" method="post">
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

  .toggle {
    border-radius: 100%;
    margin-right: 5px;
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
  }

  .todo-list .toggle {
    opacity: 0.5;
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
