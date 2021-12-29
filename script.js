var playing = false;
var score, trialsLeft;

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
          }
     });

function addHearts(){
     for(i=0; i<trialsLeft; i++){
          $("#trialsLeft").append(" x ");
     }
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
