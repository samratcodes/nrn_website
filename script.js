const menu =document.querySelector('.menu');
const cross= document.querySelector('.cross');
const nav= document.querySelector('.navbar');
const main = document.querySelector('main');
const change=()=>{
    menu.classList.toggle('active');
    cross.classList.toggle('active');
}

menu.addEventListener('click', function(e){
    e.preventDefault();
      nav.style.display = "flex";
    change();
});
cross.addEventListener('click', function(e){
    e.preventDefault();
    change();
        nav.style.display = "none";
});