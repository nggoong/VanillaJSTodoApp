import TodoListComponent from "./TodoListComponent.js";
import { todo } from './values.js';

(()=>{

    class TodoList {
        todoInstance;
        constructor() {
            const todolist = document.querySelector('.todo-list');
            this.todoInstance = new TodoListComponent(todolist);
        }
    }


    let TodoListCompo = new TodoList();

    var todoSubmitButton = document.querySelector('.todo-submit-btn');

    todoSubmitButton.addEventListener('click', ()=> {
        let newValueId = todo.length;
        let newValueText = document.querySelector('.todo-create-input').value;

        if(!newValueText) return;

        let newValue = {id: newValueId, text: newValueText, isComplete: false}
        todo.push(newValue);

        document.querySelector('.todo-create-input').value = '';

        TodoListCompo.todoInstance.render();
        
    })


})();