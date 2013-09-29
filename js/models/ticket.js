var Ticket = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string')
});

Ticket.FIXTURES = [{
  id: 1,
  title: 'Ticket 1',
  description: 'Sed posuere consectetur est at lobortis.',
  status: 'New'
}];

module.exports = Ticket;
