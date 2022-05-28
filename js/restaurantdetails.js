let stars=document.querySelectorAll('.star');
stars.forEach((star,index)=>{
    star.addEventListener('mouseover',function(){
        starHover(index);
    });
    star.addEventListener('mouseleave',function(){
        starLeave(index);
    });
    star.addEventListener('click',function(){
        starSet(index);
    });
});
function starHover(index){
    for(let i=0;i<=index;i++){
        stars[i].classList.add('hovered');
    }
}
function starLeave(index){
    for(let i=0;i<=index;i++){
        stars[i].classList.remove('hovered');
    }
}

function starSet(index){
    //remove all previously added states that affect the color of the star
    stars.forEach((star)=>{
        star.classList.remove('given');
        star.classList.remove('hovered');
    })
    for(let i=0;i<=index;i++){
        //give all the stars up to and including the current clicked star the color gold
        stars[i].classList.add('given');
    }
}

let overlay=document.querySelector('.overlay');
let close=document.querySelector('.overlay .close-icon');
let reviewpopupbutton=document.querySelector('#review-popup-button')
close.addEventListener('click',toggleOverlay);
reviewpopupbutton.addEventListener('click',toggleOverlay);

function toggleOverlay(){
    overlay.classList.toggle('hide');
}
