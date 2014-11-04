$(document).ready(function() {
$('#start_chat').on('click', function(e) {
  e.preventDefault();
  var userName = $('#nameInput').val();
  $('div#chatroom').css("visibility", "visible");
  $('#start_chat').css("visibility", "hidden")
  var myDataRef = new Firebase('https://xv8fc84h6qr.firebaseio-demo.com/');
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var i = 0
          var id = i++
          var text = $('#messageInput').val();
          myDataRef.push({id: id, name: userName, text: text});
          $('#messageInput').val('');
        }
      });
      myDataRef.limit(10).on('child_added', function(snapshot) {
        message = snapshot.val();
        displayChatMessage(message.name, message.text);
        deleteMessageLimit();
      });
      function displayChatMessage(name, text) {
        if(name === userName){
          $('<div class="text"/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'))
        }else {
          $('<div class="other"/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'))
        }
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
      function deleteMessageLimit(){
        var kids = $('#messagesDiv').children();
        if(kids.length > 10){
          kids[0].remove();
        }
      }
  });
});