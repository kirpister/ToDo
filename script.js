const form = document.querySelector('form');
const reset = document.querySelector('.reset');
const input = document.querySelector('#item');

let todoItems = [];

let ulList = document.querySelector('#todos');
ulList.addEventListener('click', function(el) {
  if (el.target.tagName === 'LI') {
    el.target.classList.toggle('strike-through');
  }
}, false);

const todoList = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ulList.appendChild(li);
    };

form.addEventListener('submit', function (e) {
    e.preventDefault();
    input.value = input.value.toUpperCase();
    todoItems.push(input.value);     
     todoList(input.value);
     input.value = '';
});

todoItems.forEach(item => {
    todoList(item);
});

console.log(todoItems);

reset.addEventListener('click', function () {
    while (ulList.firstChild) {
        ulList.removeChild(ulList.firstChild);
    }
    todoItems = [];
});

