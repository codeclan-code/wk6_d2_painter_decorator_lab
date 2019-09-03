const PaintCan = function(volume) {
  this.paintVolume = volume;
};

PaintCan.prototype.checkEmpty = function() {
  if (this.paintVolume === 0) {
    return true;
  } else {
    return false;
  }
};



module.exports = PaintCan;
