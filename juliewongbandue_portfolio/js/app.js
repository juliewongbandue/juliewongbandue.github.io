
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

  //BURGER ANIMATION
  $('.nav').hide()
  const $projectHeader = $('.projectsDivHeader')
  $projectHeader.hide()

	$('#nav-icon').click(function(){
    console.log('clicked');
    $(this).toggleClass('open')
    $('.nav').slideToggle()
  })

  $('.navLink').click(function(){
    $('#nav-icon').removeClass('open')
    $('.nav').slideToggle()
  })

  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    console.log('scroll: ', scroll)
    console.log('innerHeight: ', window.innerHeight + $('.skillsDiv').height())
    const diff = window.innerHeight + $('.skillsDiv').height()
    if(scroll >= diff){
      $projectHeader.show()
    } else {
      $projectHeader.hide()
    }
  })


});
