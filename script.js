const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const imgContainer = document.getElementsByClassName("container")[0];

counter =0;


const images =[
    'img-0',
    'img-1',
    'img-2',
    'img-3',
    'img-4',
    'img-5',
];

leftBtn.addEventListener("click",function(e){
    counter--
    if(counter < 0){
        counter =images.length-1;
    }
    imgContainer.style.backgroundImage =`url('/img/${images[counter]}.jpg')`;
});

rightBtn.addEventListener("click",function(){
    counter++
    if(counter > images.length -1){
        counter =0;
    }

    imgContainer.style.backgroundImage =`url('/img/${images[counter]}.jpg')`
})



