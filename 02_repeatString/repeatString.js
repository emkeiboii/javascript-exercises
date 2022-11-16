const repeatString = function(string, num) {
  let stringHolder = "";
  for(let i = 0; i < num; i++){
    stringHolder += string;
  } if (num < 0){
    stringHolder = 'ERROR'
  }
  return stringHolder
};

const randomNumber = (Math.floor(Math.random)*1000)

repeatString('hey', 3)
repeatString('hey', 10)
repeatString('hey', 1)
repeatString('hey', 0)
repeatString('hey', randomNumber)
repeatString('', 10)

// Do not edit below this line
module.exports = repeatString;
