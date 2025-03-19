const addTodoBtn = document.querySelector('.open-modal-button')
const modalScreen = document.querySelector('.modal-screen')
const modal = document.querySelector('.modal')
const xBtn = document.querySelector('.x-btn')
const cancelBtn = document.querySelector('.cancel')
const inputElement = document.querySelector('input')
const createTodoBtn = document.querySelector('.create')
const todosContainer = document.querySelector('.todos-container')






let todos = []





function addTodo() {
    modalScreen.classList.remove('hidden')
}


function hideModal() {
    modalScreen.classList.add('hidden')
}


document.addEventListener('keydown', (evt) => {
    if(evt.key === "Escape") {
        hideModal();
    }
})


document.addEventListener('keydown', (evt) => {
    if(evt.key === "Enter") {
        createTodo()
    }
})


document.addEventListener('click', (evt) => {
    if(!modal.contains(evt.target) && !addTodoBtn.contains(evt.target)) {
        hideModal();
    }
})


function createTodo() {
    let todoTitle = inputElement.value

    if(inputElement.value !== "") {
        let newTodo = {
            id: `todo-${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}`,
            title: todoTitle,
            isCompleted: false
        }

        todos.push(newTodo)

        setToLocalstorage(todos)

        inputElement.value = ""

        hideModal();

        showTodos()
    }
}



function setToLocalstorage(array) {
    localStorage.setItem('todos', JSON.stringify(array))
}



function showTodos() {
    todosContainer.innerHTML = "";

    todos.forEach(function (todo) {
        todosContainer.insertAdjacentHTML(
            "beforeend",
            `
            <article class="todo" id="${todo.id}">
                <div class="todo-data">
                    <div class="checkbox">
                        <i class="fa-solid"></i>
                    </div>
                    <div>
                        <p class="todo-title">${todo.title}</p>
                    </div>
                </div>

                <div class="todo-buttons">
                    <button class="delete">Delete</button>
                    <button class="complete">Complete</button>
                </div>
            </article>
            `
        );
    });
}


function getData() {
    let todosData = JSON.parse(localStorage.getItem("todos"))

    if(todosData) {
        todos = todosData
        showTodos()
    }

}

getData()



function removeTodo(event) {
    if (event.target.className === "delete") {
        let parentElement = event.target.closest('article');
        let todoId = parentElement.id;

        todos = todos.filter(todo => todo.id !== todoId);

        showTodos();

        setToLocalstorage(todos);

    }
}



function completeHandler(event) {
    if (event.target.classList.contains('complete')) {

        const todoElement = event.target.closest('article');

        const checkIcon = todoElement.querySelector('.fa-solid');

        const todoTitle = todoElement.querySelector('.todo-title');


        if (checkIcon) {
            checkIcon.classList.toggle('fa-check');
        }

        if(todoTitle) {
            todoTitle.classList.toggle('line-trough')
        }
    }
}



addTodoBtn.addEventListener('click', addTodo)
xBtn.addEventListener('click', hideModal)
cancelBtn.addEventListener('click', hideModal)
createTodoBtn.addEventListener('click', createTodo)
todosContainer.addEventListener('click', removeTodo)
todosContainer.addEventListener('click', completeHandler)








