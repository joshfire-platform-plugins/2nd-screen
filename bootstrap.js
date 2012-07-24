define([], function () {
  return function (runtime, params, callback) {
    runtime.readFile('toInject.js', function (err, codeI) {
      codeI = codeI.replace(/_APP_KEY_/gi, params.options.pusherAppKey);
      // If we're in the app wich will send events
      if (params.options['2ndscreenappid']) {
        codeI = codeI.replace(/_2ND_SCREEN_ID_/gi, params.options['2ndscreenappid']);
        codeI = codeI.replace(/_2ND_SCREEN_/gi, false);
      } else { // Otherwise we're in the 2nd screen and use our app id
        codeI = codeI.replace(/_2ND_SCREEN_ID_/gi, params.config.app.id);
        codeI = codeI.replace(/_2ND_SCREEN_/gi, true);
      }
      params.content += codeI;
      callback();
    });
  };
});