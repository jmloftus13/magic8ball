$ (document).ready (function() {

var eightBall = {};
eightBall.listOfAnswers = [ "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

  $("#answer").hide();

eightBall.fortuneTeller = function (question) {
  $("#8ball").effect("shake");
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  $("#answer").fadeIn(4000);
  var randomNum = Math.random ();
  var randomNumArray = randomNum * eightBall.listOfAnswers.length;
  var randomIndex = Math.floor(randomNumArray);
  var randomAnswer = this.listOfAnswers[randomIndex];

  $("#answer").text(randomAnswer);
  console.log("You asked, " + question + "? and the Magic 8-Ball says, " + this.listOfAnswers[randomIndex]);
};

  var onClick = function() {
    setTimeout (
      function() {
    var question = prompt("Ask the Magic 8-Ball a Question");
	  eightBall.fortuneTeller(question);
	}, 500);

    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
  };

$("#questionButton").click(onClick);

});
