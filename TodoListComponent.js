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

        didlist.push({
            id: did.length -1,
            text: str,
            isComplete: true
        })
    }

    deleteTodo(index) {
        console.log(index);
        todo.splice(parseInt(index), 1);
        
            for(let i = index; i < todo.length; i++) {
                todo[i].id -= 1;
            }
        
    }

    setEvent() {
        const didDiv = document.querySelector('.did-list');
        const didCompo = new DidListComponent(didDiv);

        this.target.addEventListener('click', ({ target }) => {
            let itemId = target.parentNode.parentNode.dataset.index;
            let itemIndex = itemId;
            if(target.classList.contains('todo-complete-btn')) {
               this.todoToDid(todo[itemIndex].text);
               this.deleteTodo(itemIndex);

               this.setup();
               this.render();
               didCompo.setup();
               didCompo.render();
            }
            if(target.classList.contains('todo-delete-btn')) {
                this.deleteTodo(itemIndex);
                this.setup();
                this.render();
            }
        })
    }
}