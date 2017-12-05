const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')
const assert = require('assert');

describe('Park', function(){
  let park;

  beforeEach(function(){
    park = new Park();
  });

  it('should start with empty enclosure', function(){
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should have one dinosaur in the enclosure', function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1);
  });
});
