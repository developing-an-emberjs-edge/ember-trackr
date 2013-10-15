var TicketsNewRoute = Ember.Route.extend({
  actions: {
    save: function() {
      var attrs = this.get('controller').getProperties(
        'title',
        'status',
        'description'
      );

      this.get('store').createRecord('ticket', attrs);
    }
  }
});

module.exports = TicketsNewRoute;
