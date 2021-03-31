
//How to add click event listener using JQuery
$(function(){
// To create an event listener. You would select the element you want to apply the event listener. Then using the click() method, we specify that the event is a click and we pass in what we want to happen on that click. 
  $("#btn-click").click(function(event){
    console.log(event);
    alert("Button was clicked!");
  });

// Quick mini challenge! Add a click event listener to the red box of the page. That when you click it it will fade to 50% opacity.

// I also added to change the cursor to a pointer so I know it is clickable. 
$(".red-box").css("cursor", "pointer");


$(".red-box").click(function(){
 
  $(".red-box").fadeTo(2000,.50);
})

});

//How to add hover handlers in Jquery
$(function(){

  $("#btn-hover").hover(function(){
    alert("The button was hovered!");
  })

  //Quick mini Challenge! Select the green box and when it is hovered, change the inner text to "I was hovered!".

  $(".green-box").hover(function(){
    $(this).text("I was hovered!");
  });

})