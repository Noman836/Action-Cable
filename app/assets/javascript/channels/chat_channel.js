import consumer from "channels/consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log("connected to chat channel--------")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});
