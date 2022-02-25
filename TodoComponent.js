

export default class TodoComponent {
    state;
    target;
    constructor(target) {
        this.target = target;
        this.setup();
        this.render();
        this.setEvent();
    }
    setup(){console.log('component setup')};
    templete(){ console.log('parent templete')}
    render() {
        this.target.innerHTML = this.templete();
        console.log('rendered');
    }
    setEvent() {};

    todoComplete(str) {};

    deleteTodo(index) {};
}