var Message = require('./message.js').Message;

$(document).ready(function(){
  $('#email').submit(function(event){
    event.preventDefault();
    var toField = $('#to').val();
    var messageField = $('#message').val();
    var fromField = $('#from').val();
    var newMessage = new Message(toField, fromField, messageField);
    console.log(newMessage.encode());
  });
});
