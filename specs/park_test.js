const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')
const assert = require('assert');

describe('Park', function(){
  let park;
  let dinosaur;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Velociraptor", 2);
    dinosaur3 = new Dinosaur("Triceratops", 1);
  });

  it('should start with empty enclosure', function(){
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should have one dinosaur in the enclosure', function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1);
  });

  it('should remove a dinosaur by its type', function(){
    park.removeDinosaur("Tyrannosaurus");
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should get all the dinosaurs with an offspring count of more than 2', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.countDinosaurs(), 2);
    // assert.strictEqual(park.enclosure.length, 3);
  });
});
