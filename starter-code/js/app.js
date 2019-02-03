$(function(){
    $('header nav > ul > li:nth-child(4) ul li:first-child').on('click', function(event){
        event.preventDefault();
        $(this).siblings().slideToggle();
    })
});