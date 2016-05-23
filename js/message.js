exports.Message = function(to, from, messageText){
  this.to = to;
  this.from = from;
  this.messageText = messageText;
}

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

exports.Message.prototype.read = function() {
  return "Dear " + this.to + ", " + this.messageText + " Yours truly, " + this.from;
}

exports.Message.prototype.encode = function() {
  return "Dear " + reverse(this.to) + ", " + reverse(this.messageText) + " Yours truly, " + reverse(this.from);
}
