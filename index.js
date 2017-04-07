function check(number){
  var sum = sumDigits(doubleOdds(number));
  return sum % 10 === 0;
}

function doubleOdds(number){
  var numberString = (""+ number).split("");
  var doubleNumberString = numberString[0];
  for(var i = 1; i < numberString.length; i++){
    if(i % 2 !== 0){
      var double = Number(numberString[i]) * 2;
      doubleNumberString += double > 9?double - 9:double;
    }else{
      doubleNumberString += Number(numberString[i]);
    }
  }
  return Number(doubleNumberString);
}

function sumDigits(number){
  var numberString = (""+ number).split("");
  var sum = 0;
  numberString.forEach(function(num){
    sum += Number(num)
  });
  return sum;
}

module.exports = {
  doubleOdds: doubleOdds,
  sumDigits: sumDigits,
  check: check
}