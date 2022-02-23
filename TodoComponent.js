

export default class TodoComponent {
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

    deleteTodo(index) {
        // 삭제하는 로직
        this.setup();
        // this.render();
    }

    deleteDid(index) {
        // 삭제하는 로직
        this.setup();
        // this.render();
    }
}