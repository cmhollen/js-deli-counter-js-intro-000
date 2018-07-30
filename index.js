var katzDeliLine = [];
function takeANumber(currentLine, newName){
  var greeting;
  if(currentLine === 0){
    greeting = 'The line is empty';
  } else {
    greeting = `Welcome, ${newName}. You are number ${currentLine + 1} in line.`;
  }
   


  return greeting;
  }
