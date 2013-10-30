module('User');

test('displayName', function() {
  var user = App.User.create({
    firstName: 'Tom',
    lastName: 'Dale'
  });

  equal(user.get('displayName'), 'Tom Dale');
});
