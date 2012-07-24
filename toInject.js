var pusher = new Pusher('_APP_KEY_'); // Replaced in bootstrap.js

// Should be changed by something specific by Joshfire Factory app
Pusher.channel_auth_endpoint = 'http://pusherauthp.herokuapp.com/pusher/auth';
Pusher.channel_auth_transport = 'jsonp';

var channel = pusher.subscribe('private-_2ND_SCREEN_ID_');

// To send an event, on a private channel then
// we *have to* listen to pusher:subscription_succeeded
channel.bind('pusher:subscription_succeeded', function() {
  // console.warn("Yeah, subscription_succeeded !");
});

// Check if we're the 2nd screen
if (_2ND_SCREEN_) {
  channel.bind('client-push-to-2ndscreen', function(message) {
    // Addon 2nd screen got data, now what?
    // We need to call a special function exposed by the template... (so we're tied to a template)
    console.log('Addon 2nd screen got data, now what?', message.data);
    if (message.data) {
      displayItem(message.data);
    }
  });
}