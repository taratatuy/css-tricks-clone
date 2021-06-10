"use strict";

function setStickyObserver() {
  function showSticky(e) {
    e[0].target.classList.toggle('_showed', e[0].intersectionRatio != 0);
  }

  var options = {
    rootMargin: '0px 0px -90%  0px',
    threshold: 0
  };
  var obs = new IntersectionObserver(showSticky, options);
  var plate = document.querySelector('.sidebar__sticky-card');
  obs.observe(plate);
}

setStickyObserver();