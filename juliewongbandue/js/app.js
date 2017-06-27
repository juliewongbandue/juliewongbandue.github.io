$(function() {
  var $adj = $(".adjectives")
  console.log ($adj)
    $adj.typed({
        strings: ["super cool ^200", "pretty cool ^300", "witty ^200", "faking it til I make it ^1000", "a lover ^1000of the interwebs  ^1000", "a creative ^300", "a painter ^300", "a wanna-be designer ^500", "a web developer."],
        typeSpeed: 0
    });
});
