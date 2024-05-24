// Aplikasi untuk mengelola daftar tugas (To-Do List) dengan prioritas

class Task {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }
}

class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskName) {
    const index = this.tasks.findIndex((task) => task.name === taskName);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  getTaskByPriority(priority) {
    return this.tasks.filter((task) => task.priority === priority);
  }

  printTasks() {
    this.tasks.forEach((task) => {
      console.log(`Task: ${task.name}, Priority: ${task.priority}`);
    });
  }
}

const myTodoList = new TodoList();

myTodoList.addTask(new Task("Buy groceries", "high"));
myTodoList.addTask(new Task("Wash the car", "medium"));
myTodoList.addTask(new Task("Write code", "low"));

// Menampilkan tugas dengan prioritas tertentu (mengandung runtime error)
const highPriorityTasks = myTodoList.getTaskByPriority("High");
console.log("High priority tasks:");
highPriorityTasks.forEach((task) => {
  console.log(task.name);
});

// Menghapus tugas (mengandung runtime error)
myTodoList.removeTask("Go to gym");

// Menampilkan semua tugas
myTodoList.printTasks();
