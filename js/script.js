// слайдер
// const swiper = new Swiper('.swiper', {
//     navigation: {
//       nextEl: '.next',
//       prevEl: '.previus',
//     },
//     // loop: true,
//     effect: 'coverflow',
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 60,
//         modifier: 3,
//         slideShadows : false
//     },
//     slidesPerView: 1,
//     centeredSlides : true,
//     breakpoints: {
//         780: {
//             slidesPerView: 2, 
//         }
//     }
//   });
// бургер-меню
let burgerMenuOpen = document.querySelector('.burger-menu');
let burgerMenuExit = document.querySelector('.burger-menu-exit');
let menu = document.querySelector('.nav_box-mob');
burgerMenuOpen.addEventListener('click', openMenu);
burgerMenuExit.addEventListener('click', openMenu);
function openMenu() {
  menu.classList.toggle('active')
  console.log('ok')
}
