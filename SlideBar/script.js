let menu=document.querySelector('.sidebar');
document.querySelector('.menu').addEventListener('click',()=>{
    if(menu.classList.contains('show')){
        menu.classList.remove('show');
    }else{
        menu.classList.add('show');
    }
});
document.querySelector('.close-tag').addEventListener('click',()=>{
    menu.classList.remove('show');
});