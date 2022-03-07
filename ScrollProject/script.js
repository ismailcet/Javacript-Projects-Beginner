const date=document.querySelector('#date');
date.innerHTML=new Date().getFullYear();


// Close List
const toggle=document.querySelector('.nav-toggle');
const listOpen=document.querySelector('.nav-links');
toggle.addEventListener('click',showLinks);




//Functions
function showLinks(){
    listOpen.style.height=='0px'?listOpen.style.height='200px':listOpen.style.height='0px';
}
