

// show hide search box click the search icon.
searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =() =>{
	searchForm.classList.toggle('active');
}


// show  login form using toggle method
let loginForm=document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick=()=>{
	loginForm.classList.toggle('active');
}
// hide login formusing remove method
document.querySelector('#close-login-btn').onclick=()=>{
	loginForm.classList.remove('active');
}


// add scroll bar in right side of browser window.
window.onscroll = ()=>{
	// max width 768 px remove the search box
	searchForm.classList.remove('active');
	if(window.scrollY > 80){
		document.querySelector('.header .header-2').classList.add('active');
	}else{
		document.querySelector('.header .header-2').classList.remove('active');
	}
}


// add scroll bar in right side of browser window.
window.onload = ()=>{
	if(window.scrollY > 80){
		document.querySelector('.header .header-2').classList.add('active');
	}else{
		document.querySelector('.header .header-2').classList.remove('active');
	}

  fadeOut();
}

//loader function
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

// swiper js use books-slider class
var swiper = new Swiper(" .books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});




// swiper js use books-slider class
var swiper = new Swiper(".featured-silder", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});




// swiper js use arrivals-slider class

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
   breakpoints: {
    0: {
      slidesPerView: 1,
    },
     768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



// swiper js use reviews-slider class

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  //grabcursor mean hand form.
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
   breakpoints: {
    0: {
      slidesPerView: 1,
    },
     768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



// swiper js use reviews-slider class

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  //grabcursor mean hand form.
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
   breakpoints: {
    0: {
      slidesPerView: 1,
    },
     768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

