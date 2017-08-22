$(function() {
  console.log("jquery live");
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

  $(".frontEndDiv").flip({
    trigger: "hover"
  });

  $(".backEndDiv").flip({
    trigger: "hover"
  });

  // $(window).scroll(()=> {
  //   var scroll = $(window).scrollTop();
  //   var skillsDivTop = $(".projectsDivHeader").offset().top;
  //   var skillsDivHeight = $(".projectsDivHeader").height()
  //   if (scroll > skillsDivTop + skillsDivHeight){
  //       $(".projectsDivHeader").addClass('fixed')
  //   }
  // })

});
