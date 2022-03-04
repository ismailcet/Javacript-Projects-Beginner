let count = 0;
//Event Listener
let value=document.querySelector('.numbers');
let btns=document.querySelectorAll('.btn');
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const selector=e.target.id;
        if(selector == 'decrease'){
            count--;
        }else if(selector == 'increase'){
            count++;
        }else{
            count = 0;
        }
        if(count > 0){
            value.style.color='#008000';
        }
        if(count < 0){
            value.style.color='#ff0000';
        }
        if(count == 0){
            value.style.color='#102a42';
        }
        value.textContent=count;
        e.preventDefault();
    });
});