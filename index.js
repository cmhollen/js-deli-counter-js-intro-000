var katzDeliLine = [];
function takeANumber(currentLine, newName){

  katzDeliLine.push(currentLine + 1);
  var greeting = `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;


  return greeting;
  }
