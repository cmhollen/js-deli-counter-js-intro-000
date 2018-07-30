function takeANumber(currentLine, newName){
  var katzDeliLine = [];

  while(0 < currentLine){

    katzDeliLine.push(currentLine++);
  }
  return `Welcome, ${newName}. You are number ${currentLine} in line.`;
  }
