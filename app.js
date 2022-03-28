//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//eventlistners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);


//functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');//adding the class name to the div
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECKED MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);
    //Trash BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);
    //APPEND TO List
    todoList.appendChild(todoDiv);
    //CLEAR TODO INPUT VALUE
    todoInput.value="";

}
function deleteCheck(e){
    const item=e.target;
    //DELETE
    if(item.classList[0]==="trash-button"){
        const todo=item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitioned', function(){})
        // todo.remove();
    }
    //CHECK MARK
    if(item.classList[0]==="complete-button"){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }

}