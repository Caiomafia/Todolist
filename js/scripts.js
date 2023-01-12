/*Pegando elementos*/

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
let oldInputValue;

/*Funções*/ 

const SaveTodo =  (text) =>{

const todo = document.createElement("div");
todo.classList.add("todo");

const title = document.createElement("h3");
title.innerText = text;

todo.appendChild(title)

console.log(todo)

const donebtn = document.createElement("button");
donebtn.classList.add("finish-todo")
donebtn.innerHTML = `  <i class="fa-thin fa-plus"></i>` ;
todo.appendChild(donebtn)  

const editBtn = document.createElement("button");
editBtn.classList.add("edit-todo")
editBtn.innerHTML = ` <i class="fa-solid fa-pen"></i>` ;
todo.appendChild(editBtn)  

const removeBtn = document.createElement("button");
removeBtn.classList.add("remove-todo")
removeBtn.innerHTML = ` <i class="fa-solid fa-remove"></i>` ;
todo.appendChild(removeBtn)  


todoList.appendChild(todo)



todoInput.value = ''
todoInput.focus();
}


const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");

    
}


const upadeteTodo = (text) =>
{

}


//eventos
todoForm.addEventListener("submit", (e) => { 

e.preventDefault()

const inputValue = todoInput.value;

if(inputValue){
    //salvar o valor do input
    SaveTodo(inputValue)
}
else{ inputValue.innerText = ''}


})


document.addEventListener("click" , (e)  => { 

    const elTarget = e.target;
    const parentEl =elTarget.closest("div"); 
    let todoTitle;
    
    
    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText

    }
  
if (elTarget.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done");
}

if  (elTarget.classList.contains("remove-todo")){
    parentEl.remove();
}

if  (elTarget.classList.contains("edit-todo")){
   toggleForms();

   editInput.value = todoTitle;
   oldInputValue = todoTitle
}


})

cancelEditBtn.addEventListener("click" , (e) => {
    e.preventDefault();

    toggleForms();
})


editForm.addEventListener("submit" , (e) => {
    e.preventDefault();

    const editvalue = editInput;

    if(editvalue){
        updateTodo(editvalue)

        toggleForms();
    }
    
})