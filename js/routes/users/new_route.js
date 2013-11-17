var UsersNewRoute = Ember.Route.extend({
  model: function() {
    return {};
  },

  actions: {
    save: function() {
      var attrs = this.get('controller').getProperties(
        'firstName',
        'lastName',
        'email'
      );

      var user = this.get('store').createRecord('user', attrs);

      var promise = user.save();

      this.transitionTo('user', promise);
    }
  }
});

module.exports = UsersNewRoute;
