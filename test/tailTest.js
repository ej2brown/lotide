const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // => will always fail!

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [3]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail('five'), 'ive'); 
  });
});