module('Application', {
  setup: function() {
    App.reset();
  }
});

test('footer', function() {
  visit('/').then(function() {
    var year   = new Date().getFullYear(),
        expect = 'Copyright © ' + year + ' EmberTrackr Inc.',
        actual = $.trim(find('footer').text());

    equal(actual, expect);
  });
});
