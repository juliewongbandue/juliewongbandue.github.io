$(function() {
  console.log("jquery live")
  var $adj = $(".adjectives")
    $adj.typed({
        strings: ["super cool ^200", "kinda cool ^300", "a creative ^300", "a painter ^300", "a wanna-be designer ^500", "a web developer.", ],
        typeSpeed: 0
    });

    // $(".frontEndDiv").mouseover(e => {
    //   console.log("i was hovered!");
    //   $(".backEndDiv").flip();
    // });
    // $(".frontEndDiv").mouseout(e => {
    //   console.log("unhovered")
    //   $(".backEndDiv").flip(true);
    // });

    $(".frontEndDiv").flip({
      trigger: 'hover'
    })

    $(".backEndDiv").flip({
      trigger: 'hover'
    })

});
