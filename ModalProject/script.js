document.querySelector('.btn').addEventListener('click',()=>{
    document.querySelector('.overlay').classList.add('open-model');
});
document.querySelector('.times').addEventListener('click',()=>{
    document.querySelector('.overlay').classList.remove('open-model');
});