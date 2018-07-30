var katzDeliLine = [];
function takeANumber(currentLine, newName){
  var newPlace = currentLine + 1;
  katzDeliLine.push(newPlace);
  var greeting = `Welcome, ${newName}. You are number ${newPlace} in line.`;


  return greeting;
  }
