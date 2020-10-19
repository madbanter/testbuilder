/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901230') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if (!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should;

  it('has a prefix of 51 and length 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and length 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and length 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011345678901234').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011345678901234567').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511345678901234').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511345678901234567').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + '1345678901234').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix + '1345678901234567').should.equal('Discover');
      });
    })(prefix);
  }
});

describe('Maestro', function() {
  var prefixes = [5018, 5020, 5038, 6304];
  for (var cardLength = 12; cardLength <= 19; cardLength++) {
    for (var prefixIndex = 0; prefixIndex < prefixes.length; prefixIndex++) {
      var prefix = prefixes[prefixIndex];
      (function(prefix, cardLength) {
        it('has a prefix of ' + prefix + ' and a length of ' + cardLength, function() {
          var testCard = prefix + '6304345678901234567'.slice(prefix.toString().length, cardLength);
          detectNetwork(testCard).should.equal('Maestro');
        });
      })(prefix, cardLength);
    }
  }
});

describe('China UnionPay', function() {
  var prefixRanges = ['622126-622925', '624-626', '6282-6288'];
  var cardLengths = [16, 17, 18, 19];
  var prefixes = [];

  var buildPrefixRange = function(low, high) {
    var results = [];
    for (var i = low; i <= high; i++) {
      results.push(i);
    }
    return results;
  };

  for (var prefixIndex = 0; prefixIndex < prefixRanges.length; prefixIndex++) {
    var prefix = prefixRanges[prefixIndex];
    var dashLocation = prefix.indexOf('-');
    if (dashLocation !== -1) {
      var newPrefixes = buildPrefixRange(Number(prefix.slice(0, dashLocation)), Number(prefix.slice(dashLocation + 1)));
      prefixes = prefixes.concat(newPrefixes);
    }
  }

  for (var cardLengthIndex = 0; cardLengthIndex < cardLengths.length; cardLengthIndex++) {
    var cardLength = cardLengths[cardLengthIndex];
    for (var prefixIndex = 0; prefixIndex < prefixes.length; prefixIndex++) {
      var prefix = prefixes[prefixIndex];
      (function(prefix, cardLength) {
        it('has a prefix of ' + prefix + ' and a length of ' + cardLength, function() {
          var testCard = prefix + '6221265678901234567'.slice(prefix.toString().length, cardLength);
          detectNetwork(testCard).should.equal('China UnionPay');
        });
      })(prefix, cardLength);
    }
  }
});

describe('Switch', function() {
  var prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var cardLengths = [16, 18, 19];
  for (var cardLengthIndex = 0; cardLengthIndex < cardLengths.length; cardLengthIndex++) {
    for (var prefixIndex = 0; prefixIndex < prefixes.length; prefixIndex++) {
      var prefix = prefixes[prefixIndex];
      var cardLength = cardLengths[cardLengthIndex];
      (function(prefix, cardLength) {
        it('has a prefix of ' + prefix + ' and a length of ' + cardLength, function() {
          var testCard = prefix + '6759345678901234567'.slice(prefix.toString().length, cardLength);
          detectNetwork(testCard).should.equal('Switch');
        });
      })(prefix, cardLength);
    }
  }
});