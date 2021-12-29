<div class="todo-list">
  <form action="" method="">
    <input type="hidden" name="done" value="" />
    <button aria-label="Mark done / not done" class="toggle">
      <i class="fa fa-2x fa-check" aria-hidden="true" />
    </button>
  </form>

  <form action="" method="" id="text">
    <input type="text" />
    <button aria-label="Save" class="save">
      <i class="fa fa-2x fa-floppy-o" aria-hidden="true" />
    </button>
  </form>

  <form action="" method="">
    <input type="hidden" name="done" value="" />
    <button aria-label="Delete" class="delete">
      <i class="fa fa-2x fa-trash" aria-hidden="true" />
    </button>
  </form>
</div>

<style>
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
