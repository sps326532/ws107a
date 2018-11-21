var assert = require('assert');
var M = require('./mop')

describe('簡易數學函式庫', function() {
    it('2+3=5', function() {
      assert.equal(M.add(2, 3), 5);
    });
    it('4*2=8', function(){
      assert.equal(M.mul(4, 2), 8);
    });
});