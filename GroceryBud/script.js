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
//deleteAll.addEventListener('click',deleteAll);
//Display Items onload
//window.addEventListener('DOMContentLoaded',setupItems);


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
                                <a href="#" class="edit-btn" id="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <a href="#" class="delete-btn" id="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </a>
                            </div>
                        </article>`;
        itemList.innerHTML+=html;
        alertDisplay('Başarıyla Eklendi','success');
        const deleteBtn=document.querySelector('#delete-btn');
        const editBtn=document.querySelector('#edit-btn');  
        deleteBtn.addEventListener("click", deleteItem);
        editBtn.addEventListener("click", editItem);

        //Add item LS
        addToLocalStorage(id,value);
    }else if(value !== '' && editFlag){
        editElement.innerHTML = value;
        alertDisplay('Değer Değişti','success');

        //Edit LS
        editLocalStorage(editId,value);
        setBackToDefault();
    }else{
        alertDisplay('Lütfen Bir Değer Giriniz ! ','danger');
    }
}
//Delete Item
function deleteItem(){
    console.log('silinecek');
}
//Edit Item
function editItem(){
    console.log('edit');
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
function getLocalStorage(){
    return localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
}