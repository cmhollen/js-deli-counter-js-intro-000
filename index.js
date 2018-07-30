var katzDeliLine = [];
function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName)
  return "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line."
  }

function newServing(line){

  if (!line.length){
    return'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${line.shift()}`;
  }

}
