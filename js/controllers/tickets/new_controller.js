var NeedsUsers = require('../../mixins/needs_users');

var TicketsNewController = Ember.ObjectController.extend(NeedsUsers, {
  statuses: ['New', 'Open']
});

module.exports = TicketsNewController;
