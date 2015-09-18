exports.convert = function (num)
{
    console.log();
    var romanNumerals = [
        ['I', 1], ['V', 5], ['X', 10], ['L', 50],
        ['C', 100], ['D', 500], ['M', 1000]
    ];

    var numCopy = num;
    var r;
    var converted = [];
    var modVal = 10;

    while (numCopy > 0)
    {
        r = numCopy % modVal;
        numCopy -= r;

        for (var i = 0; i < romanNumerals.length; i++)
        {
            // is the number between two roman numerals?
            if (r >= romanNumerals[i][1] && r < romanNumerals[i + 1][1])
            {
                console.log('Value ' + r + ' is between ' + romanNumerals[i][1] + ' and ' + romanNumerals[i + 1][1]);
                var symbolIter = r / romanNumerals[i][1];
                console.log('symbolIter = ' + r + ' / ' + romanNumerals[i][1] + ' = ' + symbolIter);

                if (symbolIter <= 3)
                {
                    if (symbolIter % 1 !== 0)
                    {
                        console.log('symbolIter % 1 !== 0: ' + (symbolIter % 1 !== 0));
                        var diff = r - romanNumerals[i][1];
                        var newIter = diff / romanNumerals[i - 1][1];
                        console.log('prev number: ' + romanNumerals[i - 1][1]);
                        console.log('diff: ' + diff);
                        console.log('newIter: ' + newIter);

                        if (newIter > 3)
                        {

                        }
                        else
                        {
                            for (j = 0; j < newIter; j++)
                            {
                                console.log('Adding lesser digit: ' + romanNumerals[i - 1][0]);
                                converted.unshift(romanNumerals[i - 1][0]);
                            }
                        }

                    }

                    for (var j = 0; j < Math.floor(symbolIter); j++)
                    {
                        console.log('Adding digit: ' + romanNumerals[i][0]);
                        converted.unshift(romanNumerals[i][0]);
                    }
                }
                else
                {
                    console.log('symbolIter was greater than 3');
                    console.log('Adding digit: ' + romanNumerals[i + 1][0]);
                    converted.unshift(romanNumerals[i + 1][0])
                    converted.unshift(romanNumerals[i][0])
                }
            }
        }
        console.log('---- Next digit ----');
        modVal *= 10;
    }

    console.log('##### Complete ####');
    return converted.join('');
}
