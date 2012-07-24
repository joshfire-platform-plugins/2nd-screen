define([], function() {
  return function(config) {
    return {
      generate: function(options, callback) {
        var html = "<button class=\"secondscreen\">AirPlay</button>";
        return callback(null, html);
      },
      enhance: function(el, options) {
        el.querySelector('.secondscreen').addEventListener('click', function () {
          var triggered = channel.trigger('client-push-to-2ndscreen', { data: options.data });
        }, false);
      }
    };
  };
});