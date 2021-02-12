var app = new Vue({
  el: "#app",
  editIndex: -1,
  data: {
    todos: [],
    newItem: {
      id: 0,
      title: "",
      date: "",
      status: "未着手",
      isDone: false,
    },
  },
  methods: {
    addItem: function () {
      let item = {
        id: this.newItem.id,
        title: this.newItem.title,
        date: this.newItem.date,
        status: this.newItem.status,
        isDone: false,
      };
      if (this.newItem.title.length === 0) return;
      if (this.newItem.title.length > 20) return;
      this.todos.push(item);
      this.newItem.title = "";
      this.newItem.id++;
      this.newItem.date = "";
      this.newItem.status = "未着手";
    },
    deleteItem: function () {
      let newTodos = this.todos.filter((todo) => {
        return todo.isDone === false;
      });
      this.todos = newTodos;
      // this.todos = this.todos.filter((todo) => todo.id !== target);
    },
  },
});
