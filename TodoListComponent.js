import DidListComponent from './DidListComponent.js';
import TodoComponent from './TodoComponent.js';
import { todo, did } from './values.js';

export default class TodoListComponent extends TodoComponent {
    setup() {
        this.state = todo;
        this.state.map((todolist)=> {
            console.log(todolist.text);
        })
        this.id = todo.length - 1;

        console.log(this.id);
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
    

    todoToDid(str) {
        let didlist = did;
        let didDiv = document.querySelector('.did-list');
        const didCompo = new DidListComponent(didDiv);

        didlist.push({
            id: did.length -1,
            text: str,
            isComplete: true
        })

        didCompo.setup();
        didCompo.render();
    }

    deleteTodo(id) {

    }

    setEvent() {
        this.target.addEventListener('click', ({ target }) => {
            let itemId = target.parentNode.parentNode.dataset.index;
            let itemIndex = itemId;
            if(target.classList.contains('todo-complete-btn')) {
               this.todoToDid(todo[itemIndex].text);
            }
            if(target.classList.contains('todo-delete-btn')) {

            }
        })
    }
}