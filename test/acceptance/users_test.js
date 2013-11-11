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

test('viewing user details', function() {
  visit('/')
  .click('a:contains("Users")')
  .click('a:contains("Tom Dale")')
  .then(function() {
    ok(find('img[src^="http://www.gravatar.com/avatar/9bf3a766e037b9d5a4da0a6f9d0f4f68.jpg"]').length,
       'expected to find gravatar image');
  });
});
