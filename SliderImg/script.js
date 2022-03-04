var models = [
    {
        name:'Susan Smith',
        image:'img/Susan Smith.jpg',
        job:'WEB DEVELOPER',
        info:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"

    },
    {
        name:'Anna Johnson',
        image:'img/Anna Johnson.jpg',
        job:'WEB DESIGNER',
        info:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        name:'Peter Jones',
        image:'img/Peter Jones.jpg',
        job:'INTERN',
        info:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        name:'Bill Anderson',
        image:'img/Bill Anderson.jpg',
        job:'THE BOSS',
        info:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
]

var index = 2;
var slaytCount = models.length;


document.querySelector('.left-arrow').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
})
document.querySelector('.right-arrow').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
})
function showSlide(i){
    index=i;
    if(i<0){
        index = slaytCount-1;
    }
    if(i>=slaytCount){
        index = 0;
    }
    document.querySelector('#person-img').setAttribute('src',models[index].image);
    document.querySelector('.name').textContent=models[index].name;
    document.querySelector('.job').textContent=models[index].job;
    document.querySelector('.info').textContent=models[index].info;
}



