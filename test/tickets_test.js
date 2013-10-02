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

test('viewing ticket details', function() {
  visit('/')
  .click('a:contains("Tickets")')
  .click('a:contains("Ticket 1")')
  .then(function() {
    ok(find('*:contains("Sed posuere consectetur est at lobortis.")').length,
       'expected to find ticket description');
  });
});
