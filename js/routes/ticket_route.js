var TicketRoute = Ember.Route.extend({
  actions: {
    edit: function() {
      this.set('controller.isEditing', true);
    }
  }
});

module.exports = TicketRoute;
