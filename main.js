var specialChar = [
     "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    "."
];
 var numericChar = ["0","1","2","3","4","5","6","7","8","9"]

 var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

 var upperCase = [
     "A",
     "B",
     "C",
     "D",
     "E",
     "F",
     "G",
     "H",
     "I",
     "J",
     "K",
     "L",
     "M",
     "N",
     "O",
     "P",
     "Q",
     "R",
     "S",
     "T",
     "U",
     "V",
     "W",
     "X",
     "Y",
     "Z"
 ]

 // slider bar value
 var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


//  for (var i = 0; i < 10; i++) {
//     // Randomly chooses a choice from the options array. This is the Computer's guess.
//     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];