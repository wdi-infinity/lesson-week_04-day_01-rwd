$(function(){
    $("header nav > ul > li:nth-child(4) ul li:nth-child(1)").on("click",function(event){
    //  $("header nav > ul > li:nth-child(4) ul li").show();
      event.preventDefault();
      $(this).siblings().slideToggle();
    })
});

