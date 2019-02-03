$(function(){
    
    $('header nav > ul >li:nth-child(4) ul li:nth-child(1)').on('click',function(event){

       event.preventDefault();
       $(this).siblings().slideToggle(); /** we can exchange 'this' by "event.target"  it's all the same */


/** siblings : that's mean all childs ('all family') */
    } ) 

} ) ;








