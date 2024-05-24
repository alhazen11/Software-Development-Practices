class Task {
  constructor(name, priority, dueDate) {
    this.name = name;
    this.priority = priority;
    this.dueDate = new Date(dueDate); // Kesalahan logika potensial: tidak ada validasi untuk tanggal yang valid
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
    } else {
      console.error(`Task "${taskName}" not found.`);
    }
  }

  getTaskByPriority(priority) {
    return this.tasks.filter((task) => task.priority === priority);
  }

  getOverdueTasks() {
    const now = new Date();
    return this.tasks.filter((task) => task.dueDate < now);
  }

  printTasks() {
    this.tasks.forEach((task) => {
      console.log(
        `Task: ${task.name}, Priority: ${task.priority}, Due: ${task.dueDate}`
      );
    });
  }
}

// Contoh penggunaan aplikasi
const myTodoList = new TodoList();

myTodoList.addTask(new Task("Buy groceries", "high", "2023-05-01"));
myTodoList.addTask(new Task("Wash the car", "medium", "2023-06-01"));
myTodoList.addTask(new Task("Write code", "low", "2023-07-01"));
myTodoList.addTask(new Task("Pay bills", "high", "2023-04-01"));

// Kesalahan logika: seharusnya memfilter berdasarkan "high"
const highPriorityTasks = myTodoList.getTaskByPriority("medium");
console.log("High priority tasks:");
highPriorityTasks.forEach((task) => {
  console.log(task.name);
});

// Kesalahan logika: seharusnya menghapus tugas yang ada
myTodoList.removeTask("Go to gym");

// Kesalahan logika: memeriksa tugas yang belum jatuh tempo
const overdueTasks = myTodoList.getOverdueTasks();
console.log("Overdue tasks:");
overdueTasks.forEach((task) => {
  console.log(task.name);
});

// Menampilkan semua tugas
myTodoList.printTasks();
