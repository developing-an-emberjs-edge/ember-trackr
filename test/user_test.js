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

test('gravatarURL', function() {
  var user;

  Ember.run(function() {
    user = store.createRecord('user', {
      email: 'tom@example.com'
    });
  });

  equal(user.get('gravatarURL'),
        'http://www.gravatar.com/avatar/e4f7cd8905e896b04425b1d08411e9fb.jpg?s=80');
});

test('gravatarURL with blank email', function() {
  var user;

  Ember.run(function() {
    user = store.createRecord('user', {
      email: ''
    });
  });

  equal(user.get('gravatarURL'),
        'http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80');
});

test('gravatarURL with undefined email', function() {
  var user;

  Ember.run(function() {
    user = store.createRecord('user');
  });

  equal(user.get('gravatarURL'),
        'http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80');
});
