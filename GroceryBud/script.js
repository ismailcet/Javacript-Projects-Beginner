const submitBtn=document.querySelector('#submit');
const deleteAll=document.querySelector('#delete-All');
let itemList=document.querySelector('.grocery-list');
let alert=document.querySelector('.alert');
const input=document.querySelector('#grocery');
let editElement;
let editFlag=false;
let editId='';


//********** Eventlisteners **********
//Click Submit Button
submitBtn.addEventListener('click',addItem);
//Click Delete All
deleteAll.addEventListener('click',clearAll);
//Display Items onload
window.addEventListener('DOMContentLoaded',setupItems);


//**********  Functions **********

//Add Item
function addItem(e){
    e.preventDefault();
    const value=document.querySelector('#grocery').value;
    const id=new Date().getTime().toString();

    if(value !== '' && !editFlag){
        let html='';
        html=`          <article class="grocery-item" id='${id}'>
                            <p class="title">${value}</p>
                            <div class="btn-container">
                                <a href="#" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <a href="#" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </a>
                            </div>
                        </article>`;
        itemList.innerHTML+=html;
        deleteAll.style.display='block';
        alertDisplay('Başarıyla Eklendi','success');
        const deleteBtns=document.querySelectorAll('.delete-btn');
        const editBtns=document.querySelectorAll('.edit-btn');  
        deleteBtns.forEach((deleteBtn)=>deleteBtn.addEventListener("click", deleteItem));
        editBtns.forEach((editBtn)=>editBtn.addEventListener("click", editItem))
        input.value = "";
        //Add item LS
        addToLocalStorage(id,value);
    }else if(value !== '' && editFlag){
        let html='';
        html=`          <article class="grocery-item" id='${editId}'>
                            <p class="title">${value}</p>
                            <div class="btn-container">
                                <a href="#" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <a href="#" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </a>
                            </div>
                        </article>`;
        editElement.innerHTML += html;
        alertDisplay('Değer Değişti','success');

        //Edit LS
        editLocalStorage(editId,value);
        setBackToDefault();
    }else{
        alertDisplay('Lütfen Bir Değer Giriniz ! ','danger');
    }
}
//Delete All
function clearAll(){
    itemList.innerHTML='';
    alertDisplay('Hepsi Silindi','danger');
    setBackToDefault();
    localStorage.removeItem('items');
    deleteAll.style.display='none';

}
//Delete Item
function deleteItem(e){
    const element=e.target.parentElement.parentElement.parentElement;
    const deleteId=element.getAttribute('id');
    itemList.removeChild(element);
    if(itemList.children.length === 0){
        deleteAll.style.display='none';
    }
    setBackToDefault();
    removeFromLocalStorage(deleteId);
}
//Edit Item
function editItem(e){
    const element=e.target.parentElement.parentElement.parentElement;
    const deleteId=element.getAttribute('id');
    //Set Edit item
    editElement = e.target.parentElement.parentElement.parentElement;
    //set form value
    input.value=editElement.innerText;
    editFlag=true;
    editId=editElement.getAttribute('id');

    //Change submit to edit
    submitBtn.textContent='edit';
}
//Alert Function
function alertDisplay(text,action){
    alert.textContent=text;
    alert.classList.add(`alert-${action}`);

    //Remove Alert
    setTimeout(function(){
        alert.textContent='';
        alert.classList.remove(`alert-${action}`);
    },1000);
}


function setBackToDefault(){
    input.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}
//------------ Local Storage ------------

//add to local storage
function addToLocalStorage(id,value){
    const item=[id,value];
    let items=getLocalStorage();
    items.push(item);
    localStorage.setItem('items',JSON.stringify(items));
}
//Get Items
function getLocalStorage(){
    return localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
}
//Delete Item to Local Storage
function removeFromLocalStorage(id){
    
    let items=getLocalStorage();
    items=items.filter((item)=>{
        if(item[0]!==id){
            return item;
        }
    })
    localStorage.setItem('items',JSON.stringify(items));
}
//Edit Item in Local Storage
function editLocalStorage(id,value){
    let items=getLocalStorage();
    items=items.map((item)=>{
        if(item.id===id){
            item.value=value;
        }
        return item;
    });
    localStorage.setItem('items',JSON.stringify(items));
}

// ****** setup items **********

//Setup
function setupItems(){
    let items=getLocalStorage();
    if(items.length > 0){
        items.forEach((item)=>{
            //createListItem(item.id,item.value);
            console.log(items);
        });
        
    }
    deleteAll.style.display='block';
}
function createListItem(id,value){
    let html=`  <article class="grocery-item" id='${id}'>
                    <p class="title">${value}</p>
                    <div class="btn-container">
                        <a href="#" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a href="#" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </a>
                    </div>
                </article>`;
    itemList.innerHTML +=html;
    const deleteBtns=document.querySelectorAll('.delete-btn');
    const editBtns=document.querySelectorAll('.edit-btn');  
    deleteBtns.forEach((deleteBtn)=>deleteBtn.addEventListener("click", deleteItem));
    editBtns.forEach((editBtn)=>editBtn.addEventListener("click", editItem))
}
