var playing = false;
var score, trialsLeft;
var fruits = ["apple", "banana","cherries","grapes","mango","orange","watermelon","strawberry","pear"];

$(function(){
     //click on start reset button
     $("#startreset").click(function(){
          //we are playing
          if (playing){

               //reload page
               location.reload();
          } else {

               //we are not playing
               playing = true; //game initiated

               //set score to 0
               score = 0;
               $("#scoreValue").html(score);

               //show trials left
               $("#trialsLeft").show();
               trialsLeft=3;
               addHearts();

               //change button text to reset game
               $("#startreset").html("Reset Game");

               //start sending Fruits
               startAction();
          }
     });


//functions

//add hearts in the life bar
function addHearts(){
     for(i=0; i<trialsLeft; i++){
          $("#trialsLeft").append('<img src="images/heart.png" class="life">');
     }
}

//start sending fruits
function startAction(){
     $("#fruit1").show();
     chooseFruit(); //choose a random fruit

     $("#fruit1").css({'left' : Math.round(Math.random()*550), 'top':-50});

}

//generate a random fruit
function chooseFruit(){
     $("#fruit1").attr('src', "images/" + fruits[Math.round(Math.random()*8)] + ".png");
}

});


//click on start reset button

          //yes
               //reload page
          //no
               //show trials left
               //change button text to "reset game"
               //1. create a random fruint
               //define a random stem
               //2.move fruite down one step
