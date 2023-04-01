'use strict';
const btnNavElement = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
const linkAll = document.querySelectorAll('.active--link');
const backDrop = document.querySelector('.back-drop');
const btnCloseBackDrop = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const dotEl = document.querySelector('.dots');
const dotsEl = document.querySelectorAll('.dot');
const hiddenTestimonial = document.querySelectorAll('.hidden-testimonial');
const accordion = document.querySelector('.accordion');
const dropDown = document.querySelectorAll('.icon');
const showHidden = document.querySelectorAll('.accordion__');
const accordionActive = document.querySelectorAll('.accordion--active');

btnNavElement.addEventListener('click', function (e) {
  // e.preventDefault;
  headerEl.classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault;

    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

function clearAccordion() {
  for (let i = 0; i < showHidden.length; i++) {
    showHidden[i].classList.add('hidden-box');
  }
}

for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener('click', function () {
    clearAccordion();
    showHidden[i].classList.toggle('hidden-box');
  });
  console.log('ddd');
}
