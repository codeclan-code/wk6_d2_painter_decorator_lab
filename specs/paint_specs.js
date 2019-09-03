const assert = require('assert');
const PaintCan = require('../paintcan.js');

describe ('PaintCan', function() {

  let testPaintCan;

  beforeEach(function(){
    testPaintCan = new PaintCan(144);
  });

  it('should have number of litres of paint', function(){
    const actual = testPaintCan.paintVolume;
    assert.strictEqual(actual, 144);
  })

  it('should be able to check if empty', function () {
    const actual = testPaintCan.checkEmpty();
    assert.strictEqual(actual, false);
  })

  xit('should be able to empty paint', function(){
    const actual = testPaintCan.usePaint();
    assert.strictEqual(actual, false)
  })

})
