

export default class TodoComponent {
    id;
    state;
    target;
    constructor(target) {
        this.target = target;
        this.setup();
        this.render();
        this.setEvent();
    }
    setup(){};
    templete(){ return ''; }
    render() {
        this.target.innerHTML = this.templete();
    }
    setEvent() {};

    todoToDid(str) {
        // 리스트를 옮기는 로직

        this.setup();
        // this.render();
    }

    didToTodo(str) {
        // 리스트를 옮기는 로직

        this.setup();
        // this.render();
    }

    deleteTodo(id) {
        // 삭제하는 로직
        this.setup();
        // this.render();
    }

    deleteDid(id) {
        // 삭제하는 로직
        this.setup();
        // this.render();
    }

    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}