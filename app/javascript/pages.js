$(document).ready(function() {
    var message = $('#chatbox');

    function init() {
        message.scrollTop(message[0].scrollHeight);
    }
    window.setTimeout(init, 50);
});