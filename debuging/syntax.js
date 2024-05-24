class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1 {
      this.tasks.splice(index, 1);
    }
  }

  printTasks() {
    this.tasks.forEach(task => {
      console.log(task);
    }
  }
}

const myTodoList = new TodoList();

myTodoList.addTask("Buy groceries");
myTodoList.addTask("Wash the car");
myTodoList.addTask("Write code");

myTodoList.removeTask("Wash the car";

myTodoList.printTasks();