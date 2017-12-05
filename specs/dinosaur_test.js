const Dinosaur = require('../dinosaur.js');
const assert = require('assert');

describe('Dinosaur', function(){
  let dinosaur;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus", 0);
  });

  it('should have a type', function(){
    assert.strictEqual(dinosaur1.type, "Tyrannosaurus");
  });

  it('should have 0 offspring', function(){
    assert.strictEqual(dinosaur1.offspring, 0);
  });
});
