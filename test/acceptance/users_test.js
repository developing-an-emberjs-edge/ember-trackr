module('Users', {
  setup: function() {
    App.reset();
  }
});

test('listing users', function() {
  visit('/')
  .click('a:contains("Users")')
  .then(function() {
    ok(find('a:contains("Tom Dale")').length,
       'expected to find Tom Dale');
  });
});
