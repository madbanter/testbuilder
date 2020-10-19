// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var cardInfo = [
    {cardName: 'Diner\'s Club', cardLengths: [14], prefixes: [38, 39]},
    {cardName: 'American Express', cardLengths: [15], prefixes: [34, 37]},
    {cardName: 'Visa', cardLengths: [13, 16, 19], prefixes: [4]},
    {cardName: 'MasterCard', cardLengths: [16], prefixes: [51, 52, 53, 54, 55]},
    {cardName: 'Discover', cardLengths: [16, 19], prefixes: [6011, 644, 645, 646, 647, 648, 649, 65]},
    {cardName: 'Maestro', cardLengths: [12, 13, 14, 15, 16, 17, 18, 19], prefixes: [5018, 5020, 5038, 6304]}
  ];
  for (var i = 0; i < cardInfo.length; i++) {
    card = cardInfo[i];
    if (card.cardLengths.includes(cardNumber.length)) {
      for (var prefixIndex = 0; prefixIndex < card.prefixes.length; prefixIndex++) {
        if (cardNumber.startsWith(card.prefixes[prefixIndex].toString())) {
          return card.cardName;
        }
      }
    }
  }
};
