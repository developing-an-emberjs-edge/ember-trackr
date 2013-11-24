var PreloadsUsers = require('../mixins/preloads_users');

var TicketRoute = Ember.Route.extend(PreloadsUsers, {
  actions: {
    edit: function() {
      this.set('controller.isEditing', true);
    },

    done: function() {
      this.set('controller.isEditing', false);
      this.modelFor('ticket').save();
    }
  }
});

module.exports = TicketRoute;
