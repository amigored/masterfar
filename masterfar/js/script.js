let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}

document.addEventListener("DOMContentLoaded", function() {
   var logo = document.querySelector(".logo1");

   logo.addEventListener("click", function(event) {
       event.preventDefault();
       // Ждем 50 миллисекунд перед началом прокрутки
       setTimeout(function() {
           // Прокручиваем страницу вверх
           window.scrollTo({
               top: 0,
               behavior: "smooth" // Плавная прокрутка
           });
       }, 50);
   });
});