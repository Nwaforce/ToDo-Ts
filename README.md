# Todo List Application (TypeScript)

This repository contains two versions of a simple **Todo List Application** written in TypeScript:

1. **Basic Version**: A version that only runs predefined commands without user input.
2. **Interactive CLI Version**: A version that allows users to add, complete, remove, and list todos using console input.

---

## Features

- Add new todo items
- Mark todo items as completed
- Remove todo items
- List all todo items

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- TypeScript (install globally if not installed):
  ```sh
  npm install -g typescript
  ```

---

## Setting Up `package.json`

If you encounter issues related to `package.json`, follow these steps:

1. **Check for Errors in `package.json`**

   - Open `package.json` and ensure it has correct JSON syntax.
   - If there is a `"type"` field, ensure it is either `"commonjs"` or `"module"`, or remove it if unnecessary.

2. **Regenerate `package.json`**

   - If `package.json` is corrupted, delete it and recreate it using:
     ```sh
     rm package.json  # For macOS/Linux
     del package.json # For Windows
     npm init -y      # Generates a new package.json
     ```

3. **Use Node.js LTS Version**

   - Ensure you're running an LTS version of Node.js (recommended v20.x or v18.x) instead of experimental versions.
   - If using `nvm`, switch with:
     ```sh
     nvm use 20
     ```

4. **Run Your Code Without `package.json` Issues**
   - If you need to explicitly set the module type when running your script, use:
     ```sh
     node --input-type=module todo.js
     ```

---

## Running the **Basic Version** (No User Input)

### 1️⃣ Clone the repository

```sh
  git clone <repo-url>
  cd <repo-folder>
```

### 2️⃣ Compile the TypeScript file

```sh
  tsc todo.ts
```

### 3️⃣ Run the compiled JavaScript file

```sh
  node todo.js
```

This will execute the script and display predefined todo operations.

---

## Running the **Interactive CLI Version** (Accepts User Input)

### 1️⃣ Open the project folder

```sh
  cd <repo-folder>
```

### 2️⃣ Compile the TypeScript file

```sh
  tsc todo.ts
```

### 3️⃣ Run the compiled JavaScript file

```sh
  node todo.js
```

### 4️⃣ Follow the on-screen menu

The application will prompt you with options:

- Press `1` to add a task
- Press `2` to complete a task
- Press `3` to remove a task
- Press `4` to list tasks
- Press `5` to exit

---

## File Structure

```
|-- todo.ts       # TypeScript source code
|-- todo.js       # Compiled JavaScript file
|-- README.md     # Documentation
```

---

## Technologies Used

- TypeScript
- Node.js
- Readline (for user input in CLI version)

---

## License

This project is open-source. Feel free to modify and improve it!

---

## Author

Developed by **Henry** 🚀
