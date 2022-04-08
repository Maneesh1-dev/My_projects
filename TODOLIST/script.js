//selector
const todoinput =document.querySelector(".todo-input"); 
const todobutton =document.querySelector(".todobutton"); 
const todolist =document.querySelector(".todo-list"); 
const filteroption= document.querySelector(".filter-todo");

document.addEventListener("DOMcontentloaded", getTodos)
todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click", deletecheck);
filteroption.addEventListener("click", filtertodo);


function addtodo(event){
    event.preventDefault();
    //todo div
        const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");
        
    //craete li
    const newtodo = document.createElement('li');
    newtodo.innerText =todoinput.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);

    //todo to local storage
    savelocaltodos(todoinput.value);
    // check mark button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML=' <i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton); 

    // check trash button
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML=' <i class="fas fa-trash"></i>';
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);  

    //append todo list
    todolist.appendChild(todoDiv);
    todoinput.value ="";

}
function deletecheck(e){
    const item =e.target;

    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        
        todo.addEventListener('transitionend', function(){
            todo.remove();

        });
    }

if(item.classList[0]=== "complete-btn"){
    const todo =item.parentElement;
    todo.classList.toggle("completed");

}
}

function filtertodo(e){
    const todos = todolist.childNodes;
    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display ="flex";
            break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display ="flex";

                }else{
                    todo.style.display ="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display ="flex";
                }else{
                    todo.style.display ="none";
                }
                break;
        }
    });
}


function savelocaltodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todo.forEach(function(todo){
        //todo div
        const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");
        
    //craete li
    const newtodo = document.createElement('li');
    newtodo.innerText =todo;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);

  
    // check mark button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML=' <i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton); 

    // check trash button
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML=' <i class="fas fa-trash"></i>';
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);  

    //append todo list
    todolist.appendChild(todoDiv);
    });
}


function removelocaltodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex), 1);
    localStorage.setItem("todos",JSON.stringify(todos));
}