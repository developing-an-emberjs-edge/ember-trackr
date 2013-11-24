var NeedsUsers = require('../mixins/needs_users');

var TicketController = Ember.ObjectController.extend(NeedsUsers, {
  statuses: ['New', 'Open', 'Closed']
});

module.exports = TicketController;
