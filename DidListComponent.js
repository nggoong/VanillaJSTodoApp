import TodoComponent from "./TodoComponent.js";
import TodoListComponent from "./TodoListComponent.js";
import { did } from './values.js';

export default class DidListComponent extends TodoComponent {
    todoDiv;
    todoCompo;
    setup() {
        this.state = did;
        console.log('didcompo setup')
    }
    templete() {
        return`
        ${this.state.map((didlist) => {
            return `
            <div class='did-list-item list-item' data-index=${didlist.id}>
                <div class='did-list-text list-text'>
                    <p>${didlist.text}</p>
                </div>
                <div class='did-list-btns list-btns'>
                    <button class='did-cancel-btn'> cancel </button>
                    <button class='did-delete-btn'> delete </button>
                </div>
            </div>
            `
        }).join('')}
        `
    }

    didToTodo(str) {

    }
    deleteDid(index) {
        did.splice(index, 1);
        for(let i = index; i < did.length; i++) {
            did[i].id -= 1;
        }
    }

    setEvent() {
        

        this.target.addEventListener('click', ({ target })=> {
            console.log(did);
            let itemId = parseInt(target.parentNode.parentNode.dataset.index);
            console.log(itemId);
            let itemIndex = itemId;

            if(target.classList.contains('did-delete-btn')) {
                this.todoDiv = document.querySelector('.todo-list');
                this.todoCompo = new TodoListComponent(this.todoDiv);

                this.deleteDid(itemIndex);
                this.setup();
                this.todoCompo.setup();
                this.render();
                this.todoCompo.render();
                this.todoCompo = null
            }

            if(target.classList.contains('did-cancel-btn')) {
                this.setup();
                this.render();
            }
        })
    }

}



// todoCompo = null
// this.todocompo
// this.todoDiv