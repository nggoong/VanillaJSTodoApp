import DidListComponent from "./DidListComponent.js";

class DidList {
    constructor() {
        const didlist = document.querySelector('.did-list');
        new DidListComponent(didlist);
    }
}

new DidList();