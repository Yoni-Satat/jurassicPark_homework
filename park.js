const Park = function(enclosure){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaurType){
  for (var i = 0; i < this.enclosure.length; i++) {
    if (dinosaur.type === dinosaurType) {
      let index = this.enclosure.indexOf(dinosaurType);
      this.enclosure.splice(index, 1);
    }
  }
}

module.exports = Park;
