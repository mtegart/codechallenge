const findSum = function(array) {
  // Check if the input is an array
  if (!Array.isArray(array)) {
    return 'Input is not an array';
  }

  // Check if the array is empty
  if (array.length === 0) {
    return 0; // Sum of an empty array is 0
  }

  // Use the reduce method to find the sum of elements in the array
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum;
};

const findFrequency = function(array) {
  // Check if the input is an array
  if (!Array.isArray(array)) {
    return 'Input is not an array';
  }

  // Initialize an empty object to store frequencies
  const frequencyMap = {};

  // Iterate through the array to count frequencies
  array.forEach(element => {
    // Convert the element to a string to handle both words and numbers
    const key = String(element);

    // Check if the element is already in the frequency map
    if (frequencyMap.hasOwnProperty(key)) {
      // If yes, increment the count
      frequencyMap[key]++;
    } else {
      // If not, initialize the count to 1
      frequencyMap[key] = 1;
    }
  });

  // Return the frequency map object
  return frequencyMap;
};

const isPalindrome = function(str) {
  // Check if the input is a string
  if (typeof str !== 'string') {
    return false;
  }

  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string is equal to its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
};

const largestPair = function(array) {
  // Check if the input is an array with at least two elements
  if (!Array.isArray(array) || array.length < 2) {
    return 'Input should be an array with at least two elements';
  }

  // Initialize variables to store the largest pair and its sum
  let largestSum = array[0] + array[1];
  let largestPair = [array[0], array[1]];

  // Iterate through the array to find the largest pair
  for (let i = 1; i < array.length - 1; i++) {
    const currentSum = array[i] + array[i + 1];
    
    // Update largest pair and sum if a larger pair is found
    if (currentSum > largestSum) {
      largestSum = currentSum;
      largestPair = [array[i], array[i + 1]];
    }
  }

  // Return the sum of the largest pair
  return largestSum;
};

const removeParenth = function(str) {
  // Check if the input is a string
  if (typeof str !== 'string') {
    return 'Input should be a string';
  }

  // Use a regular expression to remove parentheses and content within them
  const result = str.replace(/(\([^)]*\)|\{[^}]*\})/g, '');

  return result;
};

const scoreScrabble = function(str) {
  // Check if the input is a string
  if (typeof str !== 'string') {
    return 'Input should be a string';
  }

  // Define point values for each letter in Scrabble
  const letterValues = {
    a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4,
    i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3,
    q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8,
    y: 4, z: 10
  };

  // Convert the input string to lowercase
  const lowerStr = str.toLowerCase();

  // Calculate the Scrabble score for the word
  const score = lowerStr.split('').reduce((totalScore, letter) => {
    return totalScore + (letterValues[letter] || 0);
  }, 0);

  return score;
};
