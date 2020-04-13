'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');


const render = () => {
    const todoData = [];
for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    let boo = localStorage.getItem(key) == 'true' ? true : false;
    const newDo = {
        value : key,
        completed: boo
    };
    console.log(boo);
    
    todoData.push(newDo);
  };
        todoList.textContent = '';
        todoCompleted.textContent = '';
    todoData.forEach(function(item){
        const li = document.createElement('li');
        const val = item.value;

        li.classList.add('todo-item');
        li.innerHTML =' <span class="text-todo">' + val +
        '</span>' + '<div class="todo-buttons">' +
        '<button class="todo-remove"></button>' +
        '<button class="todo-complete"></button>' + '</div>';
        if (item.completed){
            todoCompleted.append(li);
        }else{
            todoList.append(li);
        }

        const todoComplete = li.querySelector('.todo-complete');
        todoComplete.addEventListener('click',function(){
            item.completed = !item.completed;
            localStorage.setItem(item.value,item.completed);
            render();
        });
        const todoDelete = li.querySelector('.todo-remove');
        todoDelete.addEventListener('click', function(event){
            localStorage.removeItem(item.value);
            render();
        });
        localStorage.setItem(item.value,item.completed);
       
    });
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();
    const newTodo = {
        value : headerInput.value,
        completed: false
    };

    todoData.push(newTodo);
    render();
    headerInput.value = '';
});

render();





 