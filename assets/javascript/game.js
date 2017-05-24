$(document).ready(function() {
var random = Math.floor(Math.random()*101+19)
$('#randomNumber').text(random);

// random number assignments for crystals and the guessing number

var crystalnumr = Math.floor(Math.random()*11+1)
var crystalnumg = Math.floor(Math.random()*11+1)
var crystalnumb = Math.floor(Math.random()*11+1)
var crystalnumy = Math.floor(Math.random()*11+1)

// variable assignments

var userTotal = 0;
var wins = 0;
var losses = 0;

$('#win').text(wins);
$('#loss').text(losses);

// successful 

function win(){
alert("You won!");
  wins++; 
  $('#win').text(wins);
  reset();
}

// unsuccessful

function loss(){
alert ("You lose!");
  losses++;
  $('#loss').text(losses);
  reset();
 };

 // reset program

 function reset(){
      random=Math.floor(Math.random()*101+19);
      console.log(random)
      $('#randomNumber').text(random);
      crystalnumr = Math.floor(Math.random()*11+1);
      crystalnumb = Math.floor(Math.random()*11+1);
      crystalnumy = Math.floor(Math.random()*11+1);
      crystalnumg = Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

      // crystal on click commands

$('#crystalnumr').on ('click', function(){
	userTotal = userTotal + crystalnumr;
	$('#finalTotal').text(userTotal);
		if (userTotal == random) {
			win();
		}
		else if (userTotal > random){
			loss();
		}
})

$('#crystalnumb').on ('click', function(){
	userTotal = userTotal + crystalnumb;
	$('#finalTotal').text(userTotal);
		if (userTotal == random) {
			win();
		}
		else if (userTotal > random){
			loss();
		}
})

$('#crystalnumg').on ('click', function(){
	userTotal = userTotal + crystalnumg;
	$('#finalTotal').text(userTotal);
		if (userTotal == random) {
			win();
		}
		else if (userTotal > random){
			loss();
		}
})

$('#crystalnumy').on ('click', function(){
	userTotal = userTotal + crystalnumy;
	$('#finalTotal').text(userTotal);
		if (userTotal == random) {
			win();
		}
		else if (userTotal > random){
			loss();
		}
})


});


