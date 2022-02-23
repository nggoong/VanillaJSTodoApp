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
                    <button class='did-complete-btn'> complete </button>
                    <button class='did-delete-btn'> delete </button>
                </div>
            </div>
            `
        }).join('')}
        `
    }

}