const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');


navToggle.addEventListener('click',()=>{
document.body.classList.toggle('nav-open');
document.body.style.overflow=document.body.style.overflow=='hidden' ? 'auto': 'hidden'
});

navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
        document.body.style.overflow='initial'   
    });
})

var bigImg = document.getElementById("big-img");
var smallImg = document.getElementsByClassName("small-img");


smallImg[0].addEventListener('click',()=>{
 bigImg.src = smallImg[0].src
});
smallImg[1].addEventListener('click',()=>{
    bigImg.src = smallImg[1].src
   
   });
   smallImg[2].addEventListener('click',()=>{
    bigImg.src = smallImg[2].src
   });
   smallImg[3].addEventListener('click',()=>{
    bigImg.src = smallImg[3].src
   });

   function changeBgColor(color){
       const main = document.querySelector('#main');
       main.style.background = color;
   }

   function changeColor(color){
    const main = document.querySelector('#main');
    document.body.style.color = green
}
/*
smallImg[0].onclick = function (){
    bigImg.src = smallImg[0].src
}
smallImg[1].onclick = function (){
    bigImg.src = smallImg[1].src
}
smallImg[2].onclick = function (){
    bigImg.src = smallImg[2].src
}
smallImg[3].onclick = function (){
    bigImg.src = smallImg[3].src
}
*/