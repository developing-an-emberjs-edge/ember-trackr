module('Tickets', {
  setup: function() {
    App.reset();
  }
});

test('listing tickets', function() {
  visit('/')
  .click('a:contains("Tickets")')
  .then(function() {
    ok(find('li:contains("Ticket 1")').length,
       'expected to find Ticket 1');
  });
});
