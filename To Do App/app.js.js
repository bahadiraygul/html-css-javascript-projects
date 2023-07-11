const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search = document.querySelector('.search input');



const generateTemplate = todo =>{
    const html = 
    `
    <li class="list-group-item d-flex justify-content-between align-items-center delete">
        <span>${todo}</span>
        <i class="fa-solid fa-trash-can" style="color: #511f26;"></i>
    </li>
    
    `;
    list.innerHTML +=html;
}

addForm.addEventListener('submit',e =>{

    e.preventDefault();
    const todo = addForm.add.value;

    if(todo.length)
    {
        generateTemplate(todo);
        addForm.reset();
    }
  
})
//DELETE ITEMS

list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete'));
    {
        e.target.parentElement.remove();
    }
})

const filterTodos = (term) =>{
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLocaleLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLocaleLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}

search.addEventListener('keyup',()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})
