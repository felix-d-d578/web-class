window.addEventListener("load", function () {
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function() {
      document.querySelector(".preloader").style.display="none"
    },3000)
  })


const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function(){

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        responsive: responsive
    });  
      // AOS Instance
      AOS.init({
        duration: 800,
        easing: 'slide',
        once: false
      });
      
      // arousel Instance
      $('.carousel').carousel();

});



//course item
const filterContainer=document.querySelector(".course-filter"),
    filterBtns=filterContainer.children,
    totalFilterBtn=filterBtns.length,
    courseItems=document.querySelectorAll(".course-item"),
    totalcourseItem=courseItems.length;    

    for (let i=0; i< totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click", function (){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

              const filterValue=this.getAttribute("data-filter");
              for(let k=0; k<totalcourseItem; k++){
                  if (filterValue === courseItems[k].getAttribute("data-category")){
                    courseItems[k].classList.remove("hide")  
                    courseItems[k].classList.add("show");
                  } else {
                    courseItems[k].classList.remove("show");
                    courseItems[k].classList.add("hide");
                  }
                  if(filterValue === "all"){
                    courseItems[k].classList.remove("hide")  
                    courseItems[k].classList.add("show"); 
                  }
              }
        })
        
    }
    
  AOS.init({
    duration: 800,
    easing: 'slide',
    once: false
  });


  // initialize swiper

  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
 
 jQuery(document).ready(function($) {
 
   "use strict"; 
  var siteCarousel = function () {
     if ( $('.nonloop-block-13').length > 0 ) {
       $('.nonloop-block-13').owlCarousel({
         center: false,
         items: 1,
         loop: true,
         stagePadding: 0,
         margin: 0,
         autoplay: true,
         nav: true,
         navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
         responsive:{
           600:{
             margin: 0,
             nav: true,
             items: 2
           },
           1000:{
             margin: 0,
             stagePadding: 0,
             nav: true,
             items: 3
           },
           1200:{
             margin: 0,
             stagePadding: 0,
             nav: true,
             items: 4
           }
         }
       });
     }
 
     $('.slide-one-item').owlCarousel({
       center: false,
       items: 1,
       loop: true,
       stagePadding: 0,
       margin: 0,
       autoplay: true,
       pauseOnHover: false,
       nav: true,
       navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
     });
 
 
     $('.slide-one-item-alt').owlCarousel({
       center: false,
       items: 1,
       loop: true,
       stagePadding: 0,
       margin: 0,
       smartSpeed: 1000,
       autoplay: true,
       pauseOnHover: true,
       onDragged: function(event) {
         console.log('event : ',event.relatedTarget['_drag']['direction'])
         if ( event.relatedTarget['_drag']['direction'] == 'left') {
           $('.slide-one-item-alt-text').trigger('next.owl.carousel');
         } else {
           $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
         }
       }
     });
     $('.slide-one-item-alt-text').owlCarousel({
       center: false,
       items: 1,
       loop: true,
       stagePadding: 0,
       margin: 0,
       smartSpeed: 1000,
       autoplay: true,
       pauseOnHover: true,
       onDragged: function(event) {
         console.log('event : ',event.relatedTarget['_drag']['direction'])
         if ( event.relatedTarget['_drag']['direction'] == 'left') {
           $('.slide-one-item-alt').trigger('next.owl.carousel');
         } else {
           $('.slide-one-item-alt').trigger('prev.owl.carousel');
         }
       }
     });
     
 
     $('.custom-next').click(function(e) {
       e.preventDefault();
       $('.slide-one-item-alt').trigger('next.owl.carousel');
       $('.slide-one-item-alt-text').trigger('next.owl.carousel');
     });
     $('.custom-prev').click(function(e) {
       e.preventDefault();
       $('.slide-one-item-alt').trigger('prev.owl.carousel');
       $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
     });
     
   };
   siteCarousel();
 
   var siteStellar = function() {
     $(window).stellar({
       responsive: false,
       parallaxBackgrounds: true,
       parallaxElements: true,
       horizontalScrolling: false,
       hideDistantElements: false,
       scrollProperty: 'scroll'
     });
   };
   // siteStellar();
 
 });

 $('.client-area .owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  dots: true,
  responsive: {
      0: {
          items: 1
      },
      560: {
          items: 2
      }
  }
})
