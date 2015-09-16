var rome = require('../toRoman.js');
describe('When passed a decimal', function()
{
    it("of value 1 should return a Roman numeral", function()
    {
        expect(rome.convert(1)).toBe('I');
    });

    it("of value 2 should return a Roman numeral", function()
    {
        expect(rome.convert(2)).toBe('II');
    });

    it("of value 3 should return a Roman numeral", function()
    {
        expect(rome.convert(3)).toBe('III');
    });

    it("of value 4 should return a Roman numeral", function()
    {
        expect(rome.convert(4)).toBe('IV');
    });

    it("of value 7 should return a Roman numeral", function()
    {
        expect(rome.convert(7)).toBe('VII');
    });

});

// "'I' === 1: " + ('I' === convert(1)) + '. Value was: ' + convert(1) );
// "'II' === 2: " + ('II' === convert(2)) + '. Value was: ' + convert(2) );
// "'III' === 3: " + ('III' === convert(3)) + '. Value was: ' + convert(3) );
// "'IV' === 4: " + ('IV' === convert(4)) + '. Value was: ' + convert(4) );
// "'V' === 5: " + ('V' === convert(5)) + '. Value was: ' + convert(5) );
// "'VI' === 6: " + ('VI' === convert(6)) + '. Value was: ' + convert(6) );
// "'VII' === 7: " + ('VII' === convert(7)) + '. Value was: ' + convert(7) );
// "'VIII' === 8: " + ('VIII' === convert(8)) + '. Value was: ' + convert(8) );
// "'IX' === 9: " + ('IX' === convert(9)) + '. Value was: ' + convert(9) );
// "'X' === 10: " + ('X' === convert(10)) + '. Value was: ' + convert(10) );
// "'XI' === 11: " + ('XI' === convert(11)) + '. Value was: ' + convert(11) );
// "'XII' === 12: " + ('XII' === convert(12)) + '. Value was: ' + convert(12) );
// "'XIII' === 13: " + ('XIII' === convert(13)) + '. Value was: ' + convert(13) );
// "'XIV' === 14: " + ('XIV' === convert(14)) + '. Value was: ' + convert(14) );
// "'XV' === 15: " + ('XV' === convert(15)) + '. Value was: ' + convert(15) );
// "'XVI' === 16: " + ('XVI' === convert(16)) + '. Value was: ' + convert(16) );
// "'XVII' === 17: " + ('XVII' === convert(17)) + '. Value was: ' + convert(17) );
// "'XVIII' === 18: " + ('XVIII' === convert(18)) + '. Value was: ' + convert(18) );
// "'XIX' === 19: " + ('XIX' === convert(19)) + '. Value was: ' + convert(19) );
// "'XX' === 20: " + ('XX' === convert(20)) + '. Value was: ' + convert(20) );
// "'XXXVI' === 36: " + ('XXXVI' === convert(36)) + '. Value was: ' + convert(36) );
// "'LXI' === 61: " + ('LXI' === convert(61)) + '. Value was: ' + convert(61) );
