const section=document.querySelector('.section-container');
const answers=document.querySelectorAll('.answer');
section.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-plus')){
        let question = e.target.parentElement.parentElement.parentElement;
        let title=e.target.parentElement.parentElement;
        question.children[1].classList.add('addShow');
        title.children[2].classList.add('addShow');
        title.children[1].classList.add('addHidden');

    }
    if(e.target.classList.contains('fa-minus')){
        let question = e.target.parentElement.parentElement.parentElement;
        let title=e.target.parentElement.parentElement;
        question.children[1].classList.remove('addShow');
        title.children[2].classList.remove('addShow');
        title.children[1].classList.remove('addHidden');
    }
});
document.querySelector('selamaa');