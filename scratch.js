function convert(num)
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
                if (symbolIter % 1 === 0)
                {
                    console.log('no remainder');
                }
                if (symbolIter <= 3)
                {
                    if (symbolIter % 1 !== 0)
                    {
                        console.log('symbolIter % 1 !== 0: ' + (symbolIter % 1 !== 0));
                        for (j = 0; j < Math.floor(symbolIter); j++)
                        {
                            console.log('Adding digit: ' + romanNumerals[i - 1][0]);
                            converted.unshift(romanNumerals[i - 1][0]);
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

// console.log( "'I' === 1: " + ('I' === convert(1)) + '. Value was: ' + convert(1) );
// console.log( "'II' === 2: " + ('II' === convert(2)) + '. Value was: ' + convert(2) );
// console.log( "'III' === 3: " + ('III' === convert(3)) + '. Value was: ' + convert(3) );
// console.log( "'IV' === 4: " + ('IV' === convert(4)) + '. Value was: ' + convert(4) );
// console.log( "'V' === 5: " + ('V' === convert(5)) + '. Value was: ' + convert(5) );
// console.log( "'VI' === 6: " + ('VI' === convert(6)) + '. Value was: ' + convert(6) );
console.log( "'VII' === 7: " + ('VII' === convert(7)) + '. Value was: ' + convert(7) );
console.log( "'VIII' === 8: " + ('VIII' === convert(8)) + '. Value was: ' + convert(8) );
console.log( "'IX' === 9: " + ('IX' === convert(9)) + '. Value was: ' + convert(9) );
// console.log( "'X' === 10: " + ('X' === convert(10)) + '. Value was: ' + convert(10) );
// console.log( "'XI' === 11: " + ('XI' === convert(11)) + '. Value was: ' + convert(11) );
// console.log( "'XII' === 12: " + ('XII' === convert(12)) + '. Value was: ' + convert(12) );
// console.log( "'XIII' === 13: " + ('XIII' === convert(13)) + '. Value was: ' + convert(13) );
// console.log( "'XIV' === 14: " + ('XIV' === convert(14)) + '. Value was: ' + convert(14) );
// console.log( "'XV' === 15: " + ('XV' === convert(15)) + '. Value was: ' + convert(15) );
// console.log( "'XVI' === 16: " + ('XVI' === convert(16)) + '. Value was: ' + convert(16) );
console.log( "'XVII' === 17: " + ('XVII' === convert(17)) + '. Value was: ' + convert(17) );
console.log( "'XVIII' === 18: " + ('XVIII' === convert(18)) + '. Value was: ' + convert(18) );
console.log( "'XIX' === 19: " + ('XIX' === convert(19)) + '. Value was: ' + convert(19) );
// console.log( "'XX' === 20: " + ('XX' === convert(20)) + '. Value was: ' + convert(20) );
console.log( "'XXXVI' === 36: " + ('XXXVI' === convert(36)) + '. Value was: ' + convert(36) );
console.log( "'LXI' === 61: " + ('LXI' === convert(61)) + '. Value was: ' + convert(61) );
