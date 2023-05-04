class App {

    constructor(id) {
        document.querySelector(`#${id}`);
    }
}


class Button {
    element;
    
    constructor(parent, btnText, className) {
        this.element = document.createElement('button');
        this.element.textContent = btnText;
        parent.appendChild(this.element);
        this.element.classList.add(className);
    }
}


const app = new App('root');
const btn = new Button(app, 'Продолжить', 'btn-green');
