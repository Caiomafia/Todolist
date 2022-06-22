const inputTArefa = document.querySelector('.input-Tarefas');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
const excluirTarefas = document.querySelector('.excluir')



function criarLi(){
    const li = document.createElement('li');
   return li;
}

function criarButton(li){  
 const button = document.createElement('button');
button.classList.add('btnExcluir')
 li.appendChild(button) ;
  button.innerHTML = '<i class="fa fa-trash"></i>';
}


function criarTarefa(textoInput){
     const li = criarLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    if(li.classList) li.classList.add("lista");
    limpaInput();
    criarButton(li);

}

    

    function limpaInput(){ inputTArefa.value='';  inputTArefa.focus()  ;    }
    
    
inputTArefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){criarTarefa(inputTArefa.value)}      } )


btnTarefa.addEventListener('click' , function(){ 
    if(!inputTArefa.value)return; 
    criarTarefa(inputTArefa.value)  
             });

           




document.addEventListener('click' ,function(e){
    const el = e.target;
    if(el.classList.contains('btnExcluir')){
        el.parentElement.remove();
    }
})

document.addEventListener('click' ,function(e){
    const el = e.target;
    if(el.classList.contains('excluir')){
        tarefas.innerHTML='';
    }
})
   
