var katzDeliLine = [];
function takeANumber(currentLine, newName){

  katzDeliLine.push(currentLine + 1);



  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
  }
