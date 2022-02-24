import DidListComponent from './DidListComponent.js';
import TodoComponent from './TodoComponent.js';
import { todo, did } from './values.js';

export default class TodoListComponent extends TodoComponent {
    setup() {
        this.state = todo;
        console.log(this.state);
    }

    templete() {
        return `
            ${this.state.map((todolist) => {
                if(!todolist.isComplete) {
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
                }
                else {
                    return `
                    <div class='todo-list-item list-item' data-index=${todolist.id}>
                        <div class='todo-list-text list-text'>
                            <p class="complete">${todolist.text}</p>
                        </div>
                        <div class='todo-list-btns list-btns'>
                            <button class='todo-complete-btn'> cancel </button>
                            <button class='todo-delete-btn'> delete </button>
                        </div>
                    </div>
                    `
                }
                
            }).join('')}
        `
        
    }
    
    todoComplete(index) {
        let changedValue = {...this.state[index], isComplete:!this.state[index].isComplete};
        this.state.splice(index, 1);
        this.state = [...this.state, changedValue];
        this.state.sort(function(a, b) {
            return a.id - b.id;
        });
        console.log(this.state);
        
    }

    deleteTodo(index) {
        console.log(index);
        this.state.splice(index, 1);
        
            for(let i = index; i < this.state.length; i++) {
                this.state[i].id -= 1;
            }
        
    }

    setEvent() {
        this.target.addEventListener('click', ({ target }) => {
            let itemId = target.parentNode.parentNode.dataset.index;
            let itemIndex = parseInt(itemId);
            if(target.classList.contains('todo-complete-btn')) {
               this.todoComplete(itemIndex);
               this.render();
            }
            if(target.classList.contains('todo-delete-btn')) {
                this.deleteTodo(itemIndex);
                this.render();
            }
        })
    }
}