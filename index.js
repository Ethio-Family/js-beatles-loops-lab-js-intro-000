// add solution here

function theBeatlesPlay(musicians, instruments) {

  var newArray = new Array();
  for (let i = 0; i < musicians.length; i++) {
    newArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return newArray;
}

// Create a function johnLennonFacts.
// This function will accept one argument, an array of facts about John Lennon
// (note that it might not be exactly the following facts): const

function johnLennonFacts(facts) {

  var i = 0;
  while(facts.length > i) {
    facts[i] = facts[i] + "!!!";
    ++i;
  }
  return facts;
}



function iLoveTheBeatles(number) {

  var i = 0;
  var newArray = new Array();

do {
  number++;
  newArray[i] = "I love the Beatles!";
  ++i;
} while (number < 15);

return newArray;
}
