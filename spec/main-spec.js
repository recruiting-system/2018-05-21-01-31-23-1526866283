const main = require('../main/main');

describe('main()', () => {

    it('找出数组中出现频率最高的元素', () => {
        spyOn(console, 'log');
    var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
        main(a);
        expect(console.log).toHaveBeenCalledWith('a');
    });
});