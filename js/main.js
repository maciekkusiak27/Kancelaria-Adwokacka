//menu buttons
const homeBtn = document.getElementById('homeBtn');
const aboutUsBtn = document.getElementById('aboutUsBtn');
const servicesBtn = document.getElementById('servicesBtn');
const contactBtn = document.getElementById('contactBtn');
//sekcje
const home = document.getElementById('home');
const aboutUs = document.getElementById('aboutUs');
const services = document.getElementById('services');
const contact = document.getElementById('contact');

const menu = [...document.querySelectorAll('nav div')]
const sections = [...document.querySelectorAll('section')]
let active = 0;

const changeActive = () => {
  const activeMenu = menu.findIndex(menu => menu.classList.contains('active'));
  menu[activeMenu].classList.remove('active');
  menu[active].classList.add('active');
}
const changeActiveSection = () => {
  const activeMenu = sections.findIndex(sections => sections.classList.contains('activeSection'));
  sections[activeMenu].classList.remove('activeSection');
  sections[active].classList.add('activeSection');
}
let img = document.querySelector('img');
let nav = document.querySelector('nav');
let bckOne = document.getElementById('bckOne');
let bckTwo = document.getElementById('bckTwo');


function changeSlide(){
  console.log(this);
 
    if ($(window).width() < 600) {
      console.log('mobilka')
      if(this == homeBtn){
        home.scrollIntoView(); 
      }else if(this == aboutUsBtn){
        aboutUs.scrollIntoView(); 
      }else if(this == servicesBtn){
        services.scrollIntoView(); 
      }else if(this == contactBtn){
        contact.scrollIntoView(); 
}}
else {
   if(this == homeBtn){
      active = 0;
    }else if(this == aboutUsBtn){
      active = 1;
    }else if(this == servicesBtn){
      active = 2;
    }else if(this == contactBtn){
      active = 3;
    }
}


if(active == 0 || active == 2){
  img.removeAttribute('id');
      nav.classList.add("navleft");
      nav.classList.remove("navright");
      bckOne.classList.remove('bckmove');
      bckTwo.classList.remove('bckmove');
}else{
  img.setAttribute("id", "imgleft");
  nav.classList.add("navright");
  nav.classList.remove("navleft");
  bckOne.classList.add('bckmove');
  bckTwo.classList.add('bckmove');
}

changeActive()
changeActiveSection();
navBarLinks.classList.remove('on');
}

homeBtn.addEventListener('click', changeSlide);
aboutUsBtn.addEventListener('click', changeSlide);
servicesBtn.addEventListener('click', changeSlide);
contactBtn.addEventListener('click', changeSlide);

const hamburger = document.getElementById('hamburger');
const navBarLinks = document.getElementsByClassName('menu')[0];
hamburger.addEventListener("click", () => {
    navBarLinks.classList.toggle('on');
    // console.log('nav')
})


let scrolltop = document.getElementById('scrolltop');
scrolltop.addEventListener('click', () =>{
  window.scrollTo(0,0);
})


let mobi = document.getElementById('mobilka');
const scrolling = document.addEventListener('scroll', ()=>{
  mobi.style.transform = `translate(-50%,0) rotate(${window.scrollY/360}deg)`
})

// mapa
// let map;

// function initMap() {
//   const myLatLng = { lat: 50.06659639479382, lng: 19.96218816936808}
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: myLatLng,
//     zoom: 16,
//   });
//   new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "Hello World!",
//   });
// }