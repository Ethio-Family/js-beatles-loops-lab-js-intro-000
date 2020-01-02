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

  var newArray = new Array();

  function incrementVariable() {
  number = number + 1;
  return number;
}


do {
  "I love the Beatles!";
} while (incrementVariable() < 15);
  //newArray[number] = "I love the Beatles!";
  //++number;

return newArray;
}
