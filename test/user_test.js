module('User');

test('displayName', function() {
  var container = new Ember.Container();
  container.register('store:main', DS.Store);
  container.register('model:user', App.User);

  var store = container.lookup('store:main');

  var user = store.createRecord('user', {
    firstName: 'Tom',
    lastName: 'Dale'
  });

  equal(user.get('displayName'), 'Tom Dale');
});
