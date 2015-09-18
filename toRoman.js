exports.convert = function (num)
{
    // Generate a Roman numeral for the provided num.
    // Declare matrix;
    var romanNumerals = [
        ['I', 1], ['V', 5], ['X', 10], ['L', 50],
        ['C', 100], ['D', 500], ['M', 1000]
    ];

    var numCopy = num; //preserve the original number.
    var r; // a remainder.
    var converted = []; // Array to hold the characters for the new string.
    var modVal = 10; // initial divisor.

    // Continue until we subtracted all values.
    while (numCopy > 0)
    {
        r = numCopy % modVal;
        numCopy -= r;

        for (var i = 0; i < romanNumerals.length; i++)
        {
            // is the number between two roman numerals?
            if (r >= romanNumerals[i][1] && r < romanNumerals[i + 1][1])
            {
                var symbolIter = r / romanNumerals[i][1];

                if (symbolIter <= 3)
                {
                    var diff = r - romanNumerals[i][1];
                    var newIter = 0;
                    if (symbolIter % 1 !== 0)
                    {
                        newIter = diff / romanNumerals[i - 1][1];

                        if (newIter <= 3)
                        {
                            for (j = 0; j < newIter; j++)
                            {
                                converted.unshift(romanNumerals[i - 1][0]);
                            }
                        }

                    }

                    if (newIter > 3)
                    {
                        converted.unshift(romanNumerals[i + 1][0]);
                        converted.unshift(romanNumerals[i - 1][0]);
                    }
                    else
                    {
                        for (var j = 0; j < Math.floor(symbolIter); j++)
                        {
                            converted.unshift(romanNumerals[i][0]);
                        }
                    }
                }
                else
                {
                    converted.unshift(romanNumerals[i + 1][0])
                    converted.unshift(romanNumerals[i][0])
                }
            }
        }
        modVal *= 10;
    }
    return converted.join('');
}
