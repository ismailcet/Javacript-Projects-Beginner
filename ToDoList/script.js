const form = document.querySelector('form');
const input=document.querySelector('#input-item');
const btnDelete=document.querySelector('#deleteAll');
const taskList=document.querySelector('#task-list');
let items ;


//Load İtems
loadItems();

//Call Event Listeners
eventListener();



function eventListener(){
    //Submit Listener
    form.addEventListener('submit',addNew);

    //Delete Listener
    taskList.addEventListener('click',deleteItem);

    //Delete All İtems
    btnDelete.addEventListener('click',deleteAll);
}

function addNew(e){
    if(input.value == ''){
        alert("Enter The words ! ");
    }
    
    createItems(input.value);
    
    //save to local storage
    setItemToLS(input.value);

    //clear input
    input.value = '';

    e.preventDefault();
}

function loadItems(){
    items = getItemsFromLS();

    items.forEach(function(item){
        createItems(item);
    })
}


//get items from local storage
function getItemsFromLS(){
    if(localStorage.getItem('items') ===null){
        items=[];
    }else{
        items=JSON.parse(localStorage.getItem('items'));
    }
    return items;
}
//set item to local storage
function setItemToLS(text){
    items=getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));

}
//delete item from local storage
function deleteItemFromLS(text){
    items=getItemsFromLS();

    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);
        }
    });
    localStorage.setItem('items',JSON.stringify(items));
}


function createItems(text){
    const li =document.createElement('li');
    li.className='list-group-item';

        //Create a
    const a = document.createElement('a');
    a.className='delete-item';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';

    //add text to li
    li.appendChild(document.createTextNode(text));

    //add a to li
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);    
    
}

function deleteItem(e){
    
        if(e.target.className==='fas fa-times'){
            if(confirm('Are You Sure ?'));
                e.target.parentElement.parentElement.remove();

                //delete item from local storage
                deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    e.preventDefault();
}

function deleteAll(e){
    if(confirm('Are You Sure ?'));
        taskList.innerHTML='';
    localStorage.clear();
    e.preventDefault();
}