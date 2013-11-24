var TicketRoute = Ember.Route.extend({
  afterModel: function() {
    var usersController = this.controllerFor('users');

    var promise = this.get('store').findAll('user').then(function(users) {
      usersController.set('model', users);
    });

    return promise;
  },

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
