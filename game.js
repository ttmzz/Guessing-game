var listRandom = [];
var listNumber = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if(!started) {
    $("p").css("color", "rgba(34, 34, 34, 0.705)").text("Adivinhe um número entre 0 e 10.");
    nextSequence();
    $(".but").fadeIn(100).fadeOut(100).fadeIn(100);
    started = true;
 }
});

$("form").submit(function(e) {
  e.preventDefault();
  $(".but").fadeIn(100).fadeOut(100).fadeIn(100);
  var number = document.getElementById("n").value;
  listNumber.push(number);
  checkAnswer(listNumber.length -1);
  //alert("Number" + listNumber);
});

function checkAnswer(currentLevel) {
  if(listRandom[currentLevel] != listNumber[currentLevel]) {
    if(listNumber.length == listRandom.length) {
        setTimeout(function() {
          nextSequence();
        }, 1000);
      }
    } else {
    $("p").css( "color", "green").text("Acertou na tentativa " + level + ".");
    $("h3").css( "color", "red").text("Pressione qualquer tecla para reiniciar.");
    setTimeout(function() {
      $("h3").text("");
    }, 6000);
    startOver();
  }
}

function nextSequence() {
  listNumber;
  level++;
  var random = Math.floor(Math.random() * 11);
  listRandom.push(random);
  //alert("Random " + listRandom);
}

function startOver() {
 level = 0;
 listRandom = [];
 listNumber = [];
 started = false;
}
