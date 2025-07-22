module.exports = function reverse(n) {
  const numberAsString = Math.abs(n).toString();
  const arrayOfDigits = numberAsString.split('');
  const reversedArrayOfDigits = arrayOfDigits.reverse();
  const reversedNumberAsString = reversedArrayOfDigits.join('');
  const digitsReversedNumber = parseInt(reversedNumberAsString, 10);

  return digitsReversedNumber;
};
