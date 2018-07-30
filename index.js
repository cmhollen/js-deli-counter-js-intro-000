function takeANumber(currentLine, newName){
  
  for(var i = 0; i < katzDeliLine.length; i++){
    katzDeliLine.push(currentLine++);
    
  }
  return `Welcome, ${newName}. You are number ${currentLine} in line.`;
}