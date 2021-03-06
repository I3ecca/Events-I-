
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
  //If we wanted all the p elements to slide up when clicked, we can do so like this:

  // $("p").click(function(){
  //   $(this).slideUp();
  // })

  //But issues arrise when we have a dynamically added p. 
  //This p will not have the click event added to it when it is added. 

  // $("#content").append("<p> This is a dynamically added paragraph</p>");

  //To remedy this issue we do this: Define the event handler on a parent element that is always on the page, then that parent element will delegate that event to be handled by its decendents/children.

  //With this newly written code, the desired result is achieved! We go to the parent element with the #content and we use the on() method to listen for the click and select child p elements. Now the "this" in the function will refer to the p's of content. 

  $("#content").on("click", "p", function(){
    $(this).slideUp();
  })

  $("#content").append("<p> This is a dynamically added paragraph</p>");


  // Mini Challenge! Add an event handler for mouse enter on the body tag with is then going to delegate to the li tags. Then change the li content font color. 


  $("body").on("mouseenter", "li", function(){
    $(this).stop().css("color", "blue");
  })
  $("body").on("mouseleave", "li", function(){
    $(this).stop().css("color", "black");
  })

});

//Passing Additional Data to Events
$(function(){

  // By passing a data object in as a parameter, we are adding data to the event!
  $("#btn-data").click({
    user: "Becca", 
    domain: "www.JQueryCourse.com"
  }, function(event){
    //Now we can use that event data for other things. 
    console.log(event.data);
    // The event.data will be passed into the greetuser function as the userdata. 
    greetUser(event.data)
  })
  // Now when we call greetUser, we can access the data in the event and use it to create a fun alert. 
  let greetUser = function(userdata){
    username = userdata.user;
    domain = userdata.domain;
    alert("Welcome Back, " + username + "!" + "\nWelcome to " + domain);
  }

});


//Coding Activity: Creating an Image Gallery with Lightbox Preview!
$(function(){

  // Please open this activity in the Events I JQuery Coding Activity Folder
  // Was much cleaner to do the activty in its own file. 
  
  // https://github.com/I3ecca/Events-I-Jquery-Coding-Activity-
})

//Handling KeyDown & KeyUp events. 
$(function(){
  // keypress() EVIL!! Unpredictable and not documented DO NOT USE.

  //Best to stick to keydown() event. 
  // You need the key codes to preform the appropriate action for the key pressed. 


  $("html").keydown(function(event){
    // .which will tell you which key was pressed!
    // This is good because there are cross browser inconsistensies for keycodes, but JQuery is great because it can use which to find out the right keycode to use. 
    console.log(event.which);
  })

  // Coding Challenge! Find out the keycode for the right arrow key, and then make the blue box move 10px to the right every time you press the right arrow key!. 

// Found out that right arrow key is 39, so we set the number to a variable we can find later. 

let arrowRight = 39;
let arrowLeft = 37;

$("html").keydown(function(event){

  // Make if statements that compare the number to that of which key is being pressed and what to do for each. 

  if (event.which == arrowRight){
    $(".blue-box").css("margin-left", "+=10px");
  };
  if (event.which == arrowLeft){
    $(".blue-box").css("margin-left", "-=10px");
  };
})



});
