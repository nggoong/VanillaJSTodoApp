import TodoListComponent from "./TodoListComponent.js";

class TodoList {
    constructor() {
        const todolist = document.querySelector('.todo-list');
        new TodoListComponent(todolist);
    }
}

new TodoList();