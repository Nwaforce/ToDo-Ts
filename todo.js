"use strict";
// interface TodoItem {
//     id: number;
//     task: string;
//     completed: boolean;
//   }
Object.defineProperty(exports, "__esModule", { value: true });
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
var readline = require("readline");
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    TodoList.prototype.addTodo = function (task) {
        var newTodo = {
            id: this.nextId++,
            task: task,
            completed: false,
        };
        this.todos.push(newTodo);
        console.log("\u2705 Added: ".concat(task));
    };
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.completed = true;
            console.log("\u2705 Completed: ".concat(todo.task));
        }
        else {
            console.log("\u274C Todo with ID ".concat(id, " not found."));
        }
    };
    TodoList.prototype.removeTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
        console.log("\uD83D\uDDD1 Removed todo with ID ".concat(id));
    };
    TodoList.prototype.listTodos = function () {
        console.log("\n📌 Todo List:");
        this.todos.forEach(function (todo) {
            console.log("".concat(todo.id, ": ").concat(todo.task, " - ").concat(todo.completed ? "✅ Done" : "⏳ Pending"));
        });
    };
    return TodoList;
}());
// Set up CLI input handling
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var myTodos = new TodoList();
function showMenu() {
    console.log("\n📌 Todo List Menu:");
    console.log("1. Add a task");
    console.log("2. Complete a task");
    console.log("3. Remove a task");
    console.log("4. List tasks");
    console.log("5. Exit");
    rl.question("Choose an option: ", function (option) {
        handleOption(option);
    });
}
function handleOption(option) {
    switch (option) {
        case "1":
            rl.question("Enter task: ", function (task) {
                myTodos.addTodo(task);
                showMenu();
            });
            break;
        case "2":
            rl.question("Enter task ID to complete: ", function (id) {
                myTodos.completeTodo(parseInt(id));
                showMenu();
            });
            break;
        case "3":
            rl.question("Enter task ID to remove: ", function (id) {
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
