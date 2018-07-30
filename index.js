var katzDeliLine = [];
function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName)
  return "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line."
  }

function newServing(katzDeliLine){
  var served;
  if (!katzDeliLine.length){
    served = 'There is nobody waiting to be served!';
  } else {
    served = katzDeliLine[0];
  }
  katzDeliLine.shift();
  return served;
}
