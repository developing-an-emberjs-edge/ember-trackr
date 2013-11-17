var container, store;

module('User', {
  setup: function() {
    container = new Ember.Container();
    container.register('store:main', DS.Store);
    container.register('model:user', App.User);

    store = container.lookup('store:main');
  }
});

test('displayName', function() {
  var user;

  Ember.run(function() {
    user = store.createRecord('user', {
      firstName: 'Tom',
      lastName: 'Dale'
    });
  });

  equal(user.get('displayName'), 'Tom Dale');
});
