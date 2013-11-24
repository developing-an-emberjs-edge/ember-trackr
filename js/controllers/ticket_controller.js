var TicketController = Ember.ObjectController.extend({
  statuses: ['New', 'Open', 'Closed'],
  needs: ['users'],
  users: Ember.computed.oneWay('controllers.users')
});

module.exports = TicketController;
