$(function() {
  $("header nav ul li:nth-child(4) ul li:nth-child(1)").on("click", event => {
    event.preventDefault();
    let a = event.target;
    a = $(a).parents()[0];
    console.log(a);
    $(a)
      .siblings()
      .slideToggle();
  });
});

// function(
//     event
//   ) {
//     event.preventDefault();
//     console.log(this);
//     $(this)
//       .siblings()
//       .slideToggle();
//   }
