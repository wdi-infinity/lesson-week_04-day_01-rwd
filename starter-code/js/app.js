/*$(function(){
    $('header nav > ul > li:nth-child(1)').on('click' , function(event){
           console.log('humberger  clicked');
    })
});*/
$(function() {
    $('header nav > ul > li:nth-child(4) ul li:nth-child(1)').on('click', function(event) {
      event.preventDefault();
      $(this).siblings().slideToggle();
    })
  });