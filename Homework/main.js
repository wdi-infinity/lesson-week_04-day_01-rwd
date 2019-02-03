// when the page load the function will execute
$(function(){
     $("header nav > ul > li:nth-child(4) > ul > li:nth-child(1)").on("click",function(event){
        event.preventDefault();
        $(this).siblings().slideToggle();// hide and show when menu click
     });
});

// bonus

//step 1
//https://codepen.io/anon/pen/XOgrwv

// step 2
// https://codepen.io/anon/pen/KJqKpJ?editors=0100