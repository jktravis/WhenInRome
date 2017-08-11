function convert(num) {
  // Generate a Roman numeral for the provided num.
  // Declare matrix;
  const romanNumerals = [
    ['I', 1], ['V', 5], ['X', 10], ['L', 50],
    ['C', 100], ['D', 500], ['M', 1000],
  ];

  let numCopy = num; // preserve the original number.
  let remainder;
  const converted = []; // Array to hold the characters for the new string.
  let modVal = 10; // initial divisor.

  // Continue until we subtracted all values.
  while (numCopy > 0) {
    remainder = numCopy % modVal;
    numCopy -= remainder;

    for (let i = 0; i < romanNumerals.length; i++) {
      // is the number between two roman numerals?
      if (remainder >= romanNumerals[i][1] && remainder < romanNumerals[i + 1][1]) {
        const symbolIter = remainder / romanNumerals[i][1];

        if (symbolIter <= 3) {
          const diff = remainder - romanNumerals[i][1];
          let newIter = 0;
          if (symbolIter % 1 !== 0) {
            newIter = diff / romanNumerals[i - 1][1];

            if (newIter <= 3) {
              for (let j = 0; j < newIter; j++) {
                converted.unshift(romanNumerals[i - 1][0]);
              }
            }
          }

          if (newIter > 3) {
            converted.unshift(romanNumerals[i + 1][0]);
            converted.unshift(romanNumerals[i - 1][0]);
          } else {
            for (let j = 0; j < Math.floor(symbolIter); j++) {
              converted.unshift(romanNumerals[i][0]);
            }
          }
        } else {
          converted.unshift(romanNumerals[i + 1][0]);
          converted.unshift(romanNumerals[i][0]);
        }
      }
    }
    modVal *= 10;
  }
  return converted.join('');
}

export default convert;
