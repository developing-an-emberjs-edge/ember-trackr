var TicketsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').findAll('ticket');
  }
});

module.exports = TicketsRoute;
