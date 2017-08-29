
$(function() {
  console.log("jquery live");
  // TYPED ANIMATION
  var $adj = $(".adjectives");
  $adj.typed({
    strings: [
      "super cool ^200",
      "kinda cool ^300",
      "a creative ^300",
      "a painter ^300",
      "a wanna-be designer ^500",
      "a web developer."
    ],
    typeSpeed: 0
  });

  // AOS SCROLL ANIMATION
  AOS.init({
    duration: 1200
  })

  //BURGER ANIMATION
  $('.nav').hide()

	$('#nav-icon').click(function(){
    console.log('clicked');
    $(this).toggleClass('open')
    $('.nav').slideToggle()
  })

  $('.navLink').click(function(){
    $('#nav-icon').removeClass('open')
    $('.nav').slideToggle()
  })

});
