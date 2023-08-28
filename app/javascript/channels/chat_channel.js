import consumer from "channels/consumer"

consumer.subscriptions.create("ChatChannel", {
  connected: function() {
    console.log("connected to chat channel--------")
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    var messages = $('#chatbox');
    messages.append(data['message']);
    messages.scrollTop(messages[0].scrollHeight);
  }
});
