let button=document.querySelector('.bars');
let nav=document.querySelector('nav');
document.querySelector('.bars').addEventListener('click',(e)=>{

    if(e.target.classList.contains('fa-bars')){
        button.innerHTML='<i class="fas fa-times"></i>';
        $(nav).slideDown(1000);

    }
    if(e.target.classList.contains('fa-times')){
        button.innerHTML='<i class="fas fa-bars"></i>';
        $(nav).slideUp(1000);
    }
    e.preventDefault();
});