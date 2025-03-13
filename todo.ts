// INTERFACE FOR TYPESCRIPT COMPILIER

// interface TodoItem {
//     id: number;
//     task: string;
//     completed: boolean;
//   }

//   class TodoList {
//     private todos: TodoItem[] = [];
//     private nextId: number = 1;

//     addTodo(task: string): void {
//       const newTodo: TodoItem = {
//         id: this.nextId++,
//         task,
//         completed: false,
//       };
//       this.todos.push(newTodo);
//       console.log(`Added: ${task}`);
//     }

//     completeTodo(id: number): void {
//       const todo = this.todos.find((todo) => todo.id === id);
//       if (todo) {
//         todo.completed = true;
//         console.log(`Completed: ${todo.task}`);
//       } else {
//         console.log(`Todo with ID ${id} not found.`);
//       }
//     }

//     removeTodo(id: number): void {
//       this.todos = this.todos.filter((todo) => todo.id !== id);
//       console.log(`Removed todo with ID ${id}`);
//     }

//     listTodos(): void {
//       console.log("Todo List:");
//       this.todos.forEach((todo) => {
//         console.log(`${todo.id}: ${todo.task} - ${todo.completed ? "Done" : "Pending"}`);
//       });
//     }
//   }

//   // Example usage
//   const myTodos = new TodoList();
//   myTodos.addTodo("Learn TypeScript");
//   myTodos.addTodo("Build a project");
//   myTodos.listTodos();
//   myTodos.completeTodo(1);
//   myTodos.listTodos();
//   myTodos.removeTodo(2);
//   myTodos.listTodos();

import * as readline from "readline";

interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

class TodoList {
  private todos: TodoItem[] = [];
  private nextId: number = 1;

  addTodo(task: string): void {
    const newTodo: TodoItem = {
      id: this.nextId++,
      task,
      completed: false,
    };
    this.todos.push(newTodo);
    console.log(`✅ Added: ${task}`);
  }

  completeTodo(id: number): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = true;
      console.log(`✅ Completed: ${todo.task}`);
    } else {
      console.log(`❌ Todo with ID ${id} not found.`);
    }
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log(`🗑 Removed todo with ID ${id}`);
  }

  listTodos(): void {
    console.log("\n📌 Todo List:");
    this.todos.forEach((todo) => {
      console.log(
        `${todo.id}: ${todo.task} - ${
          todo.completed ? "✅ Done" : "⏳ Pending"
        }`
      );
    });
  }
}

// Set up CLI input handling
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const myTodos = new TodoList();

function showMenu() {
  console.log("\n📌 Todo List Menu:");
  console.log("1. Add a task");
  console.log("2. Complete a task");
  console.log("3. Remove a task");
  console.log("4. List tasks");
  console.log("5. Exit");
  rl.question("Choose an option: ", (option) => {
    handleOption(option);
  });
}

function handleOption(option: string) {
  switch (option) {
    case "1":
      rl.question("Enter task: ", (task) => {
        myTodos.addTodo(task);
        showMenu();
      });
      break;
    case "2":
      rl.question("Enter task ID to complete: ", (id) => {
        myTodos.completeTodo(parseInt(id));
        showMenu();
      });
      break;
    case "3":
      rl.question("Enter task ID to remove: ", (id) => {
        myTodos.removeTodo(parseInt(id));
        showMenu();
      });
      break;
    case "4":
      myTodos.listTodos();
      showMenu();
      break;
    case "5":
      console.log("👋 Exiting... Goodbye!");
      rl.close();
      break;
    default:
      console.log("❌ Invalid option. Try again.");
      showMenu();
  }
}

// Start the application
showMenu();
