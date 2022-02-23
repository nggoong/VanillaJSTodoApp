import TodoComponent from "./TodoComponent.js";
import { did } from './values.js';

export default class DidListComponent extends TodoComponent {
    setup() {
        this.state = did;
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
        this.state.splice(index, 1);
        for(let i = index; i<this.state.length; i++) {
            this.state[i].id -= 1;
        }
    }

    setEvent() {
        this.target.addEventListener('click', ({ target })=> {
            let itemId = parseInt(target.parentNode.parentNode.dataset.index);
            let itemIndex = itemId;

            if(target.classList.contains('did-delete-btn')) {
                this.deleteDid(itemIndex);
                this.setup();
                this.render();
            }

            if(target.classList.contains('did-cancel-btn')) {
                this.setup();
                this.render();
            }
        })
    }

}