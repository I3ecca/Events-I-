
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

});

//Adding the mouse enter and mouse leave handlers
$(function(){

  let blueBox = $(".blue-box");
//all Lowercase for mouse enter. 
  blueBox.mouseenter(function(){
    $(this).stop().fadeTo(100, 0.7);
  });
//again, all lowercase! This allows the blue box to fade back to original opacity when the mouse leaves.

//If you out your mouse over the blue box too fast, it will have the animation continue. We do not want this so using the stop() method, we can telll it to stop the previous animation before starting the new one!
  blueBox.mouseleave(function(){
    $(this).stop().fadeTo(500, 1);
  })

  //Mini Challenge, rewrite the code for the blue box using the hover function. (I went and just a made a new pink box to apply this to)
  //This is pretty much shorthand for the mouse enter and mouse leave functions. 

    let pinkBox = $(".pink-box");

    pinkBox.hover(
      function(){
        $(this).stop().fadeTo(100, .7);
      }, 
      
      function(){
      $(this).stop().fadeTo(100, 1);
      }
    );

});

// Adding The same Handler for Multiple Events
$(function(){
  // Using the on() method, you can add the same handler to multiple events.\
  
  // .on("click", function() {...})

  $("html").on("click keydown", function(){
    console.log("mouse was clicked or key was pressed");
  });

  // Mini Challenege, chang the image in the image gallery once it is clicked using the on() method. 



  let imgSwitch = function() {
    //Set the images equal to an array of all the image sources. 
    let images = [
        "img/laptop-mobile_small.jpg",
        "img/laptop-on-table_small.jpg",
        "img/people-office-group-team_small.jpg"
    ];
    // set i equal to the starting point of 0. 
    let i = 0;
    //To cycyle through the images, we use modulo. This way we always get y equal to 1, 2 and 0. 
    i = (i + 1) % images.length;
    console.log(i);
    //Fadeout the current gallery picture and change the src of the image to the index of the next src and fade it back in. 
    $(this).fadeOut(function() {
        $(this).attr("src", images[i]).fadeIn();
    })
};
  // the code that calls the img switch on the element selected when clicked. 
  $(".gallery").find("img").on("click", imgSwitch);

});

// Modularlizing Event Hnadlers (No more Inline functions)
$(function(){

  // You can pass in longer more complicated functions as variables so it makes code easier to read. 

  // You can do this by naming a function OR setting a variable to an annon function.
  
  // The functions can either be inside this function or outside of it and it will still work. Make sure it is within scope. 

  let logClick = function(){
    console.log("Im a varable set to an annon function!");
    console.log("A mouse was clicked or a key was pressed");; 
  }

  function logEvent() {
    console.log("I am a named function!"); 
    console.log("A mouse was clicked or a key was pressed");
    }

  $(".orange-box").on("click keydown", logClick);
  $(".orange-box").on("click keydown", logEvent);


  //Take a look at previous code for the image swicth to see how long functions can be condensed this way!


});

//Delegated Events
$(function(){

});

