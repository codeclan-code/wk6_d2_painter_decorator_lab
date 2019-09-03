const assert = require('assert');
const Room = require('../room.js');

describe ('Room', function() {

  let testRoom;

  beforeEach(function(){
    testRoom = new Room(144)
  });

  it('should have area', function() {
    const actual = testRoom.area;
    assert.strictEqual(actual, 144);
  });

  it('should start not painted', function(){
    const actual = testRoom.painted;
    assert.strictEqual(actual, false);
  })


  it('should be able to be painted', function(){
    testRoom.paint()
    const actual = testRoom.painted;
    assert.strictEqual(actual, true)
  })

})
