var PreloadsUsers = Ember.Mixin.create({
  afterModel: function() {
    var usersController = this.controllerFor('users');

    var promise = this.get('store').findAll('user').then(function(users) {
      usersController.set('model', users);
    });

    return promise;
  }
});

module.exports = PreloadsUsers;
