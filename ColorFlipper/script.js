
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



const button=document.querySelector('#buttons');
button.addEventListener('click',function(){
    document.querySelector('html').style.backgroundColor=getRandomColor();
    document.querySelector('.color').textContent=getRandomColor();
});
