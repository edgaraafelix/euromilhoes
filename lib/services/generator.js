'use strict';

function random() {
  const generateUniqueRandomNumbers = (count, range) => {
    const uniqueNumbers = new Set();
    
    while (uniqueNumbers.size < count)
      uniqueNumbers.add(Math.floor(Math.random() * range) + 1);

    return Array.from(uniqueNumbers).sort((a, b) => a - b);
  };

  // Generate 5 unique numbers between 1 and 50
  const numbers = generateUniqueRandomNumbers(5, 50);

  // Generate 2 unique numbers between 1 and 11
  const stars = generateUniqueRandomNumbers(2, 11);

  return { numbers, stars };
}

module.exports = [
  {
    name: 'services.generator.random',
    method: random
  }
]
