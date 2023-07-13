$(Document).ready(function() {
    //Header Style
$(".nav-link").on('click' , function() {
    $(this).addClass('active').parent().siblings().find(".nav-link").removeClass('active')
  })


  //Smooth Scroll Header
  var headerHeight = $("nav").innerHeight()
  $("nav .nav-link").click(function () {
      var id =$(this).attr('id');
      $("html,body").animate({
          scrollTop: $("." + id).offset().top - headerHeight
      }, 900)
  })

  //Filter Images //Mixitup jQuery Plugin Library
  

 //Scroll To Top App
 $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $(".scrollTop").show()
    }
    else{
     $(".scrollTop").hide()

    }
 })

 $(".scrollTop").click(function(){
     $("html,body").animate({
         scrollTop: 0
     }, 900)
 })

/*Owl-carousel */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
})

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
}); //jQuery End