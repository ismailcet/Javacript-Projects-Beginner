let video=document.querySelector('.video-container');
let button=document.querySelector('.switch-btn');

const preloader=document.querySelector('.preloader');

//Functions
function videoCtrl(e){

    if(button.classList.contains('slide')){
        button.classList.remove('slide');
        video.play();
    }else{
        video.pause();
        button.classList.add('slide');
    }
    e.preventDefault();
}


window.addEventListener('load',()=>{
    preloader.classList.add('hide-preloader');
})
button.addEventListener('click',videoCtrl);
