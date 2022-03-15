  //testimonial
 $('.testimonial-slider').owlCarousel({
  autoplayhoverpause: true,
  autoplaytimeout:100,
  items: 1,
  nav: false,
  loop: false,
  animateOut: 'fadeOut',
  video: true
});

//carousel productos
 $('.productos-').owlCarousel({
 	
 	autoplayhoverpause: true,
 	autoplaytimeout:100,
 	items: 3,
 	nav: false,
 	loop: true,
  animateOut: 'fadeOut',

 });
$('.productos-crousel').owlCarousel({
    loop:true,
    dots:false,
    center:true, 
    //autoplay:true,
    //autoplayTimeout:1000,
    //autoplayHoverPause:true,   
    //nav: false,
    //rewind: false,    
    
    dotsEach:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:10,
        },
        400:{
            items:1,
            margin:30,
            stagePadding:100,
        },
        800:{
            items:3,
            margin:10,
        },
        1000:{
            items:3,
            margin:5,
        }
    }
})
 const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

btn.onclick = ()=>{
    widget.style.display="none";
    post.style.display="block";
    editBtn.onclick = ()=>{
        widget.style.display="block";
        post.style.display="none";
    }
    return false;
}
window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});



