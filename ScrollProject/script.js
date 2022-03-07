const date=document.querySelector('#date');
date.innerHTML=new Date().getFullYear();


// Close List
const toggle=document.querySelector('.nav-toggle');
const listOpen=document.querySelector('.nav-links');
toggle.addEventListener('click',showLinks);

//Functions
function showLinks(){
    listOpen.style.height=='0px'?listOpen.style.height='200px':listOpen.style.height='0px';
    const openNav=document.querySelector('.nav-center');
    openNav.addEventListener('click',(e)=>{
        if(e.target.classList.contains('scroll-link')){
            listOpen.style.height='0px'
        }
        
    })
}

//  Fixed Navbar
const nav=document.querySelector('#nav');
window.addEventListener('scroll',changeNav);

function changeNav(){
    if(window.scrollY>=80){
        nav.classList.add('fixed-nav');
    }else{
        nav.classList.remove('fixed-nav');
    }
}