import TodoComponent from './TodoComponent.js';
import { todo } from './values.js';

export default class TodoListComponent extends TodoComponent {
    setup() {
        this.state = todo;
        this.state.map((todolist)=> {
            console.log(todolist.text);
        })
    }

    templete() {
        return `
            ${this.state.map((todolist) => {
                return `
                <div class='todo-list-item list-item' data-index=${todolist.id}>
                    <div class='todo-list-text list-text'>
                        <p>${todolist.text}</p>
                    </div>
                    <div class='todo-list-btns list-btns'>
                        <button class='todo-complete-btn'> complete </button>
                        <button class='todo-delete-btn'> delete </button>
                    </div>
                </div>
                `
            }).join('')}
        `
    }
}