const date=document.querySelector('#date');
date.innerHTML=new Date().getFullYear();


// Close List
const toggle=document.querySelector('.nav-toggle');
const listOpen=document.querySelector('.nav-links');
const openNav=document.querySelector('.nav-center');
toggle.addEventListener('click',showLinks);

//Functions
function showLinks(){
    listOpen.style.height=='0px'?listOpen.style.height='200px':listOpen.style.height='0px';
    
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

//Smooth Scroll
const scrollLinks=document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();

        const id=e.currentTarget.getAttribute('href').slice(1);
        const element=document.getElementById(id);

        const navHeight=nav.getBoundingClientRect().height;
        const containerHeight=openNav.getBoundingClientRect().height;
        const fixedNav=nav.classList.contains('fixed-nav');
        let position=(element.offsetTop - navHeight)-50;
        
        if (!fixedNav) {
            position = position - navHeight;
          }
          if (navHeight > 80) {
            position = position + containerHeight;
          }
      
          window.scrollTo({
            left: 0,
            top: position,
          });
          // close
          listOpen.style.height = 0;
    })
})