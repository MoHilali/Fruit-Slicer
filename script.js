var playing = false;
var score, trialsLeft, step;
var action; //used for the set interval function
var fruits = ["apple", "banana", "cherries", "grapes", "mango", "orange", "watermelon", "strawberry", "pear"];

$(function() {
     //click on start reset button
     $("#startreset").click(function() {
          //we are playing
          if (playing) {
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
               trialsLeft = 3;
               addHearts();

               //
               $("#gameover").hide();

               //change button text to reset game
               $("#startreset").html("Reset Game");

               //start sending Fruits
               startAction();
          }
     });


     //functions

     $("#fruit1").mouseover(function(){
          score++;
          $("#scoreValue").html(score);//update score

          $("#slicesound")[0].play(); //play sound

          //stop fruit
          clearInterval(action);

          //hide fruit
          $("#fruit1").hide("explode", 500); // slice fruit

          //send new fruit
          setTimeout(startAction, 500);
     });

     //add hearts in the life bar
     function addHearts() {
          $("#trialsLeft").empty();
          for (i = 0; i < trialsLeft; i++) {
               $("#trialsLeft").append('<img src="images/heart.png" class="life">');
          }
     }

     //start sending fruits
     function startAction() {
          //generate a fruit
          $("#fruit1").show();
          chooseFruit(); //choose a random fruit

          //random horizontal position
          $("#fruit1").css({
               'left': Math.round(Math.random() * 550),
               'top': -50
          });

          //generate a random step
          step = 1 + Math.round(Math.random() * 5);

          //move fruit down by one step every 10 ms
          action = setInterval(function() {
               //move fruit by one step
               $("#fruit1").css('top', $("#fruit1").position().top + step);

               //check if the fruit is too low
               if ($("#fruit1").position().top > $("#fruitsContainer").height()) {
                    //check if we have trials left
                    if (trialsLeft > 1) {
                         //generate a fruit
                         $("#fruit1").show();
                         chooseFruit(); //choose a random fruit

                         //random horizontal position
                         $("#fruit1").css({
                              'left': Math.round(Math.random() * 550),
                              'top': -50
                         });

                         //generate a random step
                         step = 1 + Math.round(Math.random() * 5);

                         //reduce trials by one
                         trialsLeft--;

                         //populate the life bar with the new number of hears
                         addHearts();
                    } else {
                         //Game Over
                         playing = false; //we are not playing anymore
                         $("#startreset").html("Start Game"); //change button ro Start Game
                         $("#gameover").show();
                         $("#trialsLeft").hide();
                         $("#gameover").html('<p>Game Over!</p> <p>Your score is ' + score + '</p>');
                         stopAction();
                    }
               }
          }, 10);

     }

     //generate a random fruit
     function chooseFruit() {
          $("#fruit1").attr('src', "images/" + fruits[Math.round(Math.random() * 8)] + ".png");
     }

     //stop dropping fruits
     function stopAction(){
          clearInterval(action);
          $("#fruit1").hide();
     }

});
