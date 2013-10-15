var TicketsNewRoute = Ember.Route.extend({
  actions: {
    save: function() {
      var attrs = this.get('controller').getProperties(
        'title',
        'status',
        'description'
      );

      var ticket = this.get('store').createRecord('ticket', attrs);

      var promise = ticket.save();

      this.transitionTo('ticket', promise);
    }
  }
});

module.exports = TicketsNewRoute;
