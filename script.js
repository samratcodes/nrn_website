const menu =document.querySelector('.menu');
const cross= document.querySelector('.cross');
const nav= document.querySelector('.navbar');
const main = document.querySelector('main');
const objectiveGoals = document.querySelector(".objectiveGoals");
const executiveBoards= document.querySelector(".executiveBoards");
const advisors = document.querySelector(".advisors");
const projects = document.querySelector("#Projects");
const liItems = document.querySelectorAll(".dropdown li");
const options = [objectiveGoals, executiveBoards, advisors];



const map = L.map("map1").setView([37.5650337, 126.809329], 5);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([37.5650337, 126.809329])
  .addTo(map)
  .bindPopup("Seoul, South Korea")
  .openPopup();

// const visible= function(data){
//     options.forEach((li) => {
//       if (data !== li) {
//         li.style.display = "none";
//       } else if (data == li) {
//         data.style.display = "flex";
//       }
//     });
//       }

// liItems.forEach((li) => {
//  li.addEventListener('click', function(e){
   
//     e.preventDefault();
// if(li.id=='objectiveGoals'){
// visible(objectiveGoals);
// }
// else if (li.id == "executiveBoards") {
//   visible(executiveBoards);
// }
// else if (li.id == "advisors") {
//  visible(advisors);
// }

// });
//   });

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